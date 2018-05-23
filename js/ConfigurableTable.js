//The ConfigurableTable object is the object that represents the lens table. Inside this object
//we will have a five Configuration Objects whose titles are in the field "this.titles". 

class ConfigurableTable{
	constructor(){
		this.tree = new Tree(['Lente','L','']);
		populateTree(this.tree); //Give the tree all the nodes that are represented in "ConfigurableClientTree.js"
		this.objects_hash = {};
		this.table_div = jQuery("<div>",{class:"popup-table"});
		this._addModelStrip();
		this.table_ul = jQuery("<ul>");
		this.body_div = jQuery("<div>",{class:"body-div"});
		this.body_div.append(this.table_ul);
		this.table_div.append(this.body_div);
		this.current_node_id = 'L/V'; // "L/V is used to display the tree of Gafas de Vista, To display Gafas de Sol Graduadas y sin Graduar use L/S "
		this.titles = ['Selecciona el tipo de lentes','¿Necesitas lentes reducidas?','Tratamientos Extra','Opciones para la graduación','Introduce tus datos de graduación'];
		this.t_categories = ['foco','reduccion','tratamiento','graduacion1','graduacion2'];
		this.ready_to_buy = false
		this.error_input_ids = [];

	}


	//Exectuded once at the beggining to start designing the lens table	
	designTable(){
		//Start all the Configuration objects and store them in this.objects_hash
		for(var i = 0; i < this.titles.length; i++){
			var config = new Configuration(this.titles[i], i+1, this.table_ul);
			this.objects_hash[this.t_categories[i]] = config;
		}

		this._addBuyButton() //Add the red buy button
		// Display the first category (i.e foco)
		var foco = this.objects_hash['foco'];
		this.current_category += 1;
		foco.setLensTable(this);
		foco.designCategory(this.current_node_id, this.objects_hash, this.tree);
		// return this.table_div;
		jQuery('#initialDiv').append(this.table_div);
	}


	//This method is used once a client has clicked an option within a category object and we want to show the next relevant category down the table
	showNextCategory(data){
		this._deleteErrorMessage();
		var next_category = data['next_category'];
		this.current_node_id = data["button_id"];
		this._canEnableBuyButton(next_category,data['button_type'],data['category_position'])
		if(data["button_type"] == 'button-normal' || !next_category){
			return;
		}
		var nextConfig =  this.objects_hash[next_category];
		nextConfig.setLensTable(this);
		nextConfig.designCategory(this.current_node_id, this.objects_hash, this.tree);
	}


	//Check to see if the buy button can become enabled (i.e red and clickable)
	//This will be the case once the client does not need to click any more options to make his purchase
	_canEnableBuyButton(next_category, button_type, category_position){
		this.current_category = category_position;
		if((!next_category && category_position >= 4) && (button_type == 'button-blue' || button_type == '')){ //button type has been selected (equals button blue) or button type has no been selected at all which means it is an inexistent category that is meant to be hidden 
			this._enableBuyButton('rgb(228, 79, 44)', 'rgb(186, 61, 31)', 'rgb(186, 61, 31)', 'rgb(186, 61, 31)', false);
			this.ready_to_buy = true;
		}else{
			this._enableBuyButton('rgb(234, 185, 186)','rgb(230, 235, 239)','','',true);
			this.ready_to_buy = false;
		}

	}

	//This is the css that makes the buy button change
	_enableBuyButton(color, border_top_color, border_left_color, border_bottom_color, is_enabled){
		jQuery('.buy-button').css('background-color', color);
		jQuery('.buy-button').css('border-top-color', border_top_color);
		jQuery('.buy-button').css('border-left-color',border_left_color);
		jQuery('.buy-button').css('border-bottom-color',border_bottom_color);	
		jQuery('.buy-button').prop('disabled', is_enabled);
	}


	//This method is executed when the lens table is being first created, so that we have a buy button
	//which at the beggining is disabled
	_addBuyButton(){
		var button_text = jQuery('<span> COMPRAR </span>').addClass("buy-button-text")
		var button = jQuery('<button>').addClass("buy-button");
		button.append(button_text);
		this.table_ul.append(button);
		var confTab = this;
		button.prop('disabled',true);
		button.click(function(){
			if(confTab.ready_to_buy){
				confTab._finishSale()
			}
		});
		
		button = this._giveEnabledBuyButtonStyle(button);
	}

	//This method gives hover functionality to the buy button once its enabled
	_giveEnabledBuyButtonStyle(button){
		var confTab = this;
		button.hover(function(){
						if(confTab.ready_to_buy){
							jQuery('.buy-button').css('background-color','rgb(212, 74, 41)');
						}
				
					}, 
					function(){
						if(confTab.ready_to_buy){
							jQuery('.buy-button').css('background-color','rgb(228, 79, 44)');
						}
					});
		return button;
	}


	//Once the user is able to finish his purchase, this method will be executed
	//Note: Once this whole code is ready, console.log('product sold') will have to be replaced
	//with the function that triggers the real "add to cart button"
	_finishSale(){
		if(this.current_category == 5){
			this._clearPrescriptionErrorMessages();
			if(this._hasNoInputErrors()){
				console.log('product sold');
			}else{
				this._throwInvalidEsferaError();
			}
		}else{
			 	console.log('product sold');
		}
		
		
	}

	//
	_clearPrescriptionErrorMessages(){
		for(var i = 0; i< this.error_input_ids.length; i++){
			jQuery(this.error_input_ids[i]).css('outline','');
		}
		jQuery('#prescription-error-row').remove();
		jQuery('.prescription-row').first().children().each(function(){
			this.style.paddingBottom = "0px";
		});
	}


	_throwInvalidEsferaError(){
		var error_row = jQuery('<tr><td class= "invalid-esfera-error"> número de esfera invalido (por favor ponga un número entre -5,00 y 6,00 que sea un multiple de 0.25)<td></tr>').addClass('invalid-error-row');
		error_row.attr('id','prescription-error-row');
		jQuery('.prescription-row').first().after(error_row);
		jQuery('.invalid-error-row td').last().remove();
		jQuery('.prescription-row').first().children().each(function(){
			this.style.paddingBottom = "50px";
		});
	}
	//checks to see if the esfera input is correct
	_hasNoInputErrors(){
		var correct_values = 0;
		var reg_exp_1 = /^(-?[1-5]|[0-6])(\.|\,)(00|25|75|50|0|5)$/
		var reg_exp_2 = /^[0-9]$/
		var esfera_inputs = [jQuery('input#esferaRight') , jQuery('input#esferaLeft')];
		for(var i = 0; i<esfera_inputs.length; i++){
			var element = esfera_inputs[i][0];
			var input_value = element.value;
			if(reg_exp_1.test(input_value) || reg_exp_2.test(input_value) ){				
				correct_values += 1;
			}else{
				jQuery('input#'+element.id).css('outline','red solid medium');
				this.error_input_ids.push("input#"+element.id);
			}
		}
		return correct_values == 2;
	}

	_deleteErrorMessage(){
		if(jQuery('.error-message')){
			jQuery('.error-message').remove();
		}
	}
	
	// _throwErrorMessage(location, message){
	// 	if(!jQuery('.error-message').length){
	// 		var e_message = jQuery("<div>"+ message +" </div>").addClass('error-message');
	// 		e_message.insertAfter(location);
	// 	}
	// }

	//This method creates the "model strip" at the top of the lens table with
	//the name, color and price of the product
	_addModelStrip(){
		var model_div = jQuery('<div>',{class: "model-div"});
		var model_name_box = jQuery('<div>',{class: 'model-name-box' })
		var model_name = jQuery('<span> Taggart </span>').addClass("model-name");
		var model_color = jQuery('<span>Azul</span>').addClass("model-color");
		var model_price = jQuery('<span> 75.00€ </span>').addClass("model-price");
		model_name_box.append(model_name);
		model_name_box.append(model_color);
		model_div.append(model_name_box);
		model_div.append(model_price);
		this.table_div.append(model_div);
	}

	_restoreClickedButton(){
      jQuery('#cloned_button button').css('background-color','rgb(51, 135, 198)');
      jQuery('#cloned_button button').css('border','');
      jQuery('#cloned_button button span').css('color', 'white');
      jQuery('#cloned_button button').prop('disabled', false);
      jQuery('#cloned_button button').css('cursor','pointer');

 	}

	hideTable(){
		jQuery('.table').css('visibility','hidden');
	}

}


