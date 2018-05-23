// The Configuration object (also knonwn as the category object) is made of a
// title (such as'Selecciona el tipo de lentes','¿Necesitas lentes reducidas?'.. etc) and a body. 
//In the body (or category body) we see displayed all the options that the client is able to click (i.e Monofocal, Progresiva, Solo Montura etc..) 
//in order to make a purchase


class Configuration{
	constructor(title, num, table_ul){
		this.title = title;
		this.rank = num;
		this.table_ul = table_ul;
		this.buttons = []; 
		this.populated_body = false;
		this.t_categories = ['foco','reduccion','tratamiento','graduacion1','graduacion2'];
		this.clicked_button = null
		this.clicked_name = null;
		this.prevPrice = null;
		this.category_exposed = false;
		this.hiddenTitles = false;
		this._setUp();
	}
	
	//*****************************Start of setting up Configurable view ********************


	_setUp(){	
		this._addTitle();
		this._addBodySpace();
		if(this.rank == 5){
			this.title_li.css('display','none');
		}
	}

	//Adds the title of each category (i.e "selecciona el tipo de lentes")
	_addTitle(){
		this.title_li = jQuery("<li>").addClass("title-li");
		this.title_content = jQuery('<div>'+ this.rank +'. '+ this.title+'</div>').addClass("title-content");
		this.title_content.attr('id', this.rank);
		this.title_li.append(this.title_content);
		this.title_li = this._titleLiClick();
		this.table_ul.append(this.title_li);
	}


	//gives the title a click functionality so that when you click on a title the options below disappear and appear alternitavely 
	_titleLiClick(){
		var conf = this
		this.title_li.click(function(){
			if(conf.category_exposed){
				conf.hideCategory();
			}else if(conf.populated_body && !conf.category_exposed){
				conf.unhideCategory();
				conf._ensureOneCategoryShowing(event.target);
			}
		});
		return this.title_li;
	}

	// There must always be one category showing on the lens table (this method enforces that)
	_ensureOneCategoryShowing(title){
		var title_index =this._getTitlteIndex(title);
		parseInt(title.id);
		for(var i = 0; i< this.t_categories.length; i++){
			var object = this.objects_hash[this.t_categories[i]];
			if(object.rank != title_index && (object.populated_body && object.category_exposed)){
				object.category_exposed = false;
				object.hideCategory();
			}
		}
	}


	_getTitlteIndex(title){
		if(title.className == 'title-content'){
			return parseInt(title.id);
		}else{
			return parseInt(title.children[0].id);
		}
	}

	_addBodySpace(){
		this.category_body = jQuery("<div>",{class: "category-body"});
		this.table_ul.append(this.category_body);
	}

	//allows a configurable object to reference the ConfigurableTable object
	setLensTable(configurableTable){
		this.lensTable = configurableTable;
	}


//************ Design Category Method ***************************************
	
	//decides how to design a cateogry body based on the features of the current category object (i.e this)
	designCategory(id, objects_hash, tree){
		this.objects_hash = objects_hash
		if(this.rank <= 3){
			var treeData = tree.getNodeAndChildren(id, tree.traverseBF);  //searches in the Configurable Client Tree for the child node
			var options = treeData['children'];
			this.current_category = options[0].category;
			var data_for_next = this._checkIfToHide(options[0]);
			if(data_for_next){
				this.lensTable.showNextCategory(data_for_next);
				return;
			}
		}else if(this._isFocoCategory("Solo_Montura") || this._isFocoCategory("Neutra")){
			this.lensTable.showNextCategory({'next_category': null,'button_id':'','button_type':'','category_position':4})
			this._hide4thTitle();
			return;
		}else if(this.rank == 4){
			var options = this._getPrescriptionOptions();
		}else{
			this._addPrescriptionFillIns();
			this._givePopulatedBodyFields();
			this._enable5thTitle();
			this._enable5thBody();
			this.lensTable.showNextCategory({'next_category': null,'button_id':'','button_type':'','category_position':5});
			return;
		}
		
		this._populateWithOptions(options);
	}
//**********************************************************************************************
	
	_hide4thTitle(){
		var obj = this.objects_hash['graduacion1'];
		obj.hideTitle();

	}
	//checks to see if the option_name belongs to the foco category
	_isFocoCategory(option_name){
		var obj = this.objects_hash['foco'];
		if(obj.clicked_button.dataset['option_name'] == option_name){
			return true;
		}
	}

	//show the body of the 5th category (i.e eje, esfera, cilindro)
	_enable5thBody(){
		this.category_body.css('display','block');
	}

	//show the title of the 5th category 
	_enable5thTitle(){
		this.title_li.css('display','block');
		this.title_content.css('display','block');

	}

	_givePopulatedBodyFields(){
		this.populated_body = true;
		this.category_exposed = true;
		this._titleColorToDark();
	}


//******************* Start of Prescription logic (logica para "rellene tu graduacion" ) *******************

	//populates the cateogry body for clients that want to fill in their prescription (graduacion)
	_addPrescriptionFillIns(){
		var mins_maxs = {"esfera":['-6,00','5,00'],"cilindro":['-3,00','3,00'],"eje":['0','180'],"adicion":['0,00','3,00'],'distancia':['20,00','45,00']}
		var field_names = [['esfera','Esfera','ESF/SPH'],['cilindro','Cilindro','CIL/CYL'],['eje','Eje°','EJE/AXIS'],['adicion','Adición<sup>*</sup>','AD/ESF V.P.'],['distancia','Distancia interpupilar','']];
		var table = jQuery('<table>').addClass('prescription-table');
		var header_row = jQuery('<tr>').addClass('header-row');
		header_row.append(jQuery('<th>'));
		header_row.append(jQuery('<th>Derecho</th>').addClass('header-row-title'));
		header_row.append(jQuery('<th>Izquierdo</th>').addClass('header-row-title'));
		table.append(header_row);	
		for(var i = 0; i < field_names.length; i++){
			table = this._addFillTableLine(table, field_names[i][0],field_names[i][1], field_names[i][2], mins_maxs);
		}
		var final_note = jQuery('<div><p><sup>*</sup>Si incluyes la adición y no quieres lentes progresivas indicanos si es gafa de lejos o cerca</p></div>').addClass('prescription-final-note');
		this.category_body.append(table);
		this.category_body.append(final_note);
	}

	//helper method that fills one line of the category body for perescription fill in
	_addFillTableLine(table, field_id, field_name, field_initials, mins_maxs){
		if(field_id == 'adicion' && !this._isFocoCategory('Progresiva')){
			return table;
		}
		var header_row = jQuery('<tr>').addClass('prescription-row');
		var labelInitBox = jQuery('<td>').addClass('label-initials-box');
		var label = jQuery('<div class="prescription-label">'+field_name + '</div>');
		var initials = jQuery('<div> '+ field_initials+'</div>').addClass('prescription-initials');
		var label_info_space = jQuery('<div>').addClass('label-info-space');
		label_info_space.append(label);
		if(field_id != 'distancia'){
			var info_circle =  jQuery('<span class="info-circle-wrapper"> <i class="fa fa-info-circle info-circle" aria-hidden="true"></i></span>');
			var info_circle = this._addInfoCircleClick(info_circle,field_id,labelInitBox);
			label_info_space.append(info_circle);
		}
		labelInitBox.append(label_info_space);
		labelInitBox.append(initials);
		header_row.append(labelInitBox);
		var field_id_right = field_id + "Right";
		var field_id_left = field_id + "Left";
		var step;
		var value;
		var is_distancia_pupilar;
		if(field_id == 'eje'){
			step = '1';
			value = '0';
		}else if(field_id == 'distancia'){
			step = '0.50'
			value = '0.00'
			is_distancia_pupilar = true;
			label.addClass('distancia-pupilar-label');
		}else{
			step = '0.25';
			value = '0.00';
		}
		var input_box_right = jQuery('<td> <input id ="'+field_id_right+'" type="number" name="quantity" min="'+ mins_maxs[field_id][0]+'" max="'+mins_maxs[field_id][1]+'" step="'+step +'" value="'+ value+'"> </td>').addClass('prescription-input-box'); 
		var input_box_left = jQuery('<td> <input id ="'+field_id_left+'" type="number" name="quantity" min="'+ mins_maxs[field_id][0]+'" max="'+mins_maxs[field_id][1]+'" step="'+step +'"  value="'+ value+'"> </td>').addClass('prescription-input-box');
		header_row.append(input_box_right);
		header_row.append(input_box_left);
		if(is_distancia_pupilar){
			var link = jQuery('<td><a class="prescription-link" target="_blank" href="http://www.lordwilmore.es/distancia-interpupilar"> ¿Sabes cómo medir tu DIP? </a></td>').addClass('prescription-link-td'); 
			header_row.append(link);
		}
		table.append(header_row)
		return table;
	}


	//gives the functionality of the info circle next to each option (i.e esfera, cilindro etc)
	_addInfoCircleClick(info_circle, field_id, label_initials_box){
		var info_circle_hash = {"esfera":"La esfera hace referencia a la graduación para ver de lejos. Miopia ( - ) Hipermetropía ( + ). Es importante que introduzcas la última graduación de la receta que te ha hecho tú Óptico Optometrista o Oftalmologo.",
								"cilindro": "El cilindro hace referencia a la graduación que corresponde al Astigmatismo y puede estar anotado en la receta en negativo ( - )o positivo ( + ).  Es importante que introduzcas la última graduación de la receta que te haya realizado un Óptico Optometrista o un Oftalmólogo.",
								"eje": "El eje corresponde a la posición de montage del astigmatismo. Se indica en la receta en grados de 0 a 180. Solo aparecera en la receta si tienes astigmatismo cyl. Es muy importante que introduzcas la graduación de la receta que ta realizado un Óptico Optometrista o un Oftalmólogo.",
								"adicion" : "La Adición en la graduación que necesitas para cerca y normalmente se suma a la de lejos.  Es muy importante que introduzcas la graduación de la receta que ta realizado un Óptico Optometrista o un Oftalmólogo." };
		
		info_circle.hover(function(){
			var info_window = jQuery('<div>').addClass('info-circle-window');
			info_window.attr('id',field_id);
			var info_text = jQuery('<div>'+info_circle_hash[field_id]+'</div>').addClass('info-circle-window-text');
			info_window.append(info_text);
			label_initials_box.prepend(info_window);
		}, function(){
			jQuery("#"+ field_id).remove(); 
		});
		return info_circle;
	}


//******************* End of Prescription logic (logica para "rellene tu graduacion" ) *******************

	
	// Fill the category body with its options (the ones that user is  able to click such as "Monofocal", "Progresiva", "Solo Montura" and "Neutra" for the foco category)

	_populateWithOptions(options){
		for(var i = 0; i<options.length; i++){
			var option_div = jQuery("<div>", {class: "option-div"});
			option_div = this._addOptionData(options[i], option_div);
			this.category_body.append(option_div);
			this.category_body.css('display','');
		}
		if(options[0].category == 'graduacion1'){
		    this.category_body.append(this._getPrescriptionNote());
		}
		this._givePopulatedBodyFields();
		
	}


	
	//Some options within the "ConfigurableClientTree.js" are purposefuly called "Hide" we want to skip certain category after certain choices (such as when the client click "Solo Montura" and we want to hide the categories for "reduccion", "tratamiento" and "Graduacion")
	_checkIfToHide(node){
		if(node.name == "Hide"){
			this.hideTitle();
			this.resetNulls();
			var cat_position = this.t_categories.indexOf(node.category)
			var next_category = this.t_categories[cat_position+1];
			var data = {"button_id": node.id, "next_category": next_category, "category_position": cat_position,"button_type": ''}
			return data;
		}
	}


	_getPrescriptionNote(){
		var note = jQuery('<div> NOTA: NECESITAMOS TU GRADUACIÓN PARA REALIZAR TUS GAFAS. Recuerda que sólo un óptico-optometrista o un oftalmólogo pueden graduar la vista y determinar la graduación que necesitas. No olvides hacerlo cada año. </div>').addClass('prescription-note')
		var span = jQuery('<span>');
		span.append(note);
		return span;
	}


	_getPrescriptionOptions(){
	   var data = [{category: 'graduacion1',name:"grad1opcion1", id:"null",label:'Tengo la graduación y la voy a seleccionar ahora', price:'', subLabels:[]},
	   			   {category: 'graduacion1',name:"grad1opcion2", id:"null",label:'Tengo una foto y prefiero adjuntar la foto', price:'', subLabels:[]},
	   			   {category: 'graduacion1',name:"grad1opcion3", id:"null",label:'Ya soy cliente y tengo la misma graduación', price:'', subLabels:[]},
	   			   {category: 'graduacion1',name:"grad1opcion4", id:"null",label:'Tengo una foto y os la mandaré por email', price:'', subLabels:['(opticos@lordwilmore.es)']},
	   			   {category: 'graduacion1',name:"grad1opcion5", id:"null",label:'Quiero las gafas sin graduar', price:'', subLabels:[]}
	   			  ];
	   return data;	
	}

	// Organizes how the actual option is displayed on the body
	_addOptionData(option, option_div){
		var config = this;
		option_div.attr("id",option.name);
		var option_header = jQuery('<div>').addClass('option-header');
		option_header = this._createButton(option, option_header);
		option_header = this._addOptionPrice(option, option_header);
		option_div.append(option_header);
		option_div = this._addOptionLabels(option ,option_div, option_header);
		return option_div;
	}

	//creates the label of the option
	_addOptionLabels(option, option_div, option_header){
		var label = jQuery('<span>'+ option.label+ '</span>').addClass('option-label');
		option_header.append(label);
		option_div.append(option_header);
		option_div = this._addOptionSubLabels(option, option_div);
		return option_div;
	}

	//creates the sublabels of an option
	_addOptionSubLabels(option, option_div){
		var reduccion = false;
		var ul = jQuery("<ul>").addClass('.option-ul');
		if(option.category == 'reduccion'){
			reduccion = true
		}
		for(var i = 0; i < option.subLabels.length; i++){
			if(reduccion && i == option.subLabels.length-1 && option.subLabels.length>1){
				var element = jQuery('<li>'+ option.subLabels[i]+ '</li>').addClass('option-subLabel-small');
				ul.append(element);
			}else{
				var element = jQuery('<li>'+ option.subLabels[i]+ '</li>').addClass('option-subLabel');
				ul.append(element);
			}
		}
		option_div.append(ul)
		return option_div;
	}




	_addOptionPrice(option, option_header){
		var price =  jQuery('<span>'+ option.price +'</span>').addClass('option-price');
		option_header.append(price);
		return option_header;
	}

	//creates the actual button for the option
	_createButton(option, option_header){
		var button_div = jQuery('<div>').addClass("button-normal");
	 	button_div.attr({"id": option.id, "data-category": option.category, "data-option_name": option.name, "data-id2": option.id, "data-button_blue": 'false' });
		if(option.children){
			if(option.children.length != 0){
				button_div.attr("data-next_category", option.children[0].category);
			}
	 	}else{
	 		button_div.attr("data-next_category", null);
		}
	 	this._addClickFunctionality(button_div, option);
		this.buttons.push(button_div);
		option_header.append(button_div);
		return option_header;
	}

	//The title text changes color depending on wether its body is showing or not
	_titleColorToDark(){
		jQuery('#'+this.rank).css("color", 'rgb(13, 87, 107)');
	}

	titleColorToLight(){
		jQuery('#'+this.rank).css("color",'rgb(247, 249, 249)');
	}
	
	

	//*****************************End of setting up Configurable view *****************************************************
	

	//***************************** Start of all  click functionality (All the logic once the user has clicked on a button) *********************************************************

	//Organizes the different logical parts that execute when a button is clicked
	_addClickFunctionality(button, option){
		var config = this;
		button.click(function(){
			config.clicked_button = event.target;
			config._updatePrice(config.clicked_button)
			config._sortButtonColoring(config.clicked_button);
			config._updateMagento(config.clicked_button);
			config._eraseCategories(config.clicked_button);
			config._hideCategories(config.clicked_button);
			config._decideNext(config.clicked_button, option);
		});
	}

	//organizes the button coloring (i.e a blue spot inside the button circle when is clicked, and an empty button circle otherwise)
	_sortButtonColoring(button){
		// 
		for(var i = 0; i< this.buttons.length; i++){
			if(this.buttons[i][0] != button && this.buttons[i].attr('class') == 'button-blue'){
				this._alterButton(this.buttons[i], "button-blue", "button-normal");
			//clciked button	
			}else if(this.buttons[i][0] == button ){
				if(this.buttons[i].attr('class') == 'button-blue'){
					this._alterButton(this.buttons[i], 'button-blue','button-normal');
				   	this.clicked_button.className = 'button-normal';
				}else{
					this._alterButton(this.buttons[i], 'button-normal','button-blue');
					this.clicked_button.className = 'button-blue';
				}
			}
		}

	}



	_alterButton(button, old_class, new_class){
		button.removeClass(old_class);
		button.addClass(new_class)
	
	}


	//**** THE PART THAT STILL NEEDS WORK (rafa):
	//You need to make sure that when option is clicked (or unclicked), the price
	//is reflected on the lens table (based on the magento custom options)

	

	_updateMagento(button){
		var prevClickedName = this.clicked_name;
		this.clicked_name = button.dataset['option_name'];
		var category = button.dataset['category'];
		
	}

//*********  Start of Previous Code that altered the price based on magento *************
	
	// _fixOptionNameForMagento(option_name){
		// 	if(option_name.includes(' ')){
		// 		return option_name.replace(' ', '_');
		// 	}
		// 	var sub = option_name.substring(2,4);
		// 	return  "1" + sub;
		// }

	// _updateMagento(button){
	// 	var prevClickedName = this.clicked_name;
	// 	this.clicked_name = button.dataset['option_name'];
	// 	var category = button.dataset['category'];
	// 	if(category == 'reduccion' || this.clicked_name.includes(' ')){
	// 		this.clicked_name = this._fixOptionNameForMagento(this.clicked_name);
	// 	}
	// 	if(button.className == 'button-blue'){
	// 		this._updateMagentoPrice(prevClickedName, "decrease");
	// 		jQuery('option#'+ this.clicked_name).prop('selected', true);
	// 		this._updateMagentoPrice(this.clicked_name, "increase")
	// 	}else if(button.className == 'button-normal'){
	// 		jQuery('option#'+ this.clicked_name).prop('selected', false);
	// 		this._updateMagentoPrice(this.clicked_name, "decrease");
	// 		this.clicked_name = null;
	// 	}
	// }	

	

	// _updateMagentoPrice(clicked_name, raise){		
	// 	if(clicked_name){
	// 		var extra_money = parseInt(jQuery('option#'+clicked_name).attr('price'));
	// 		debugger
	// 		var current_price_text = jQuery('.model-price').text()
	// 		var current_price = parseInt(current_price_text.substring(0,current_price_text.length-1));
	// 		if(raise == "increase"){
	// 			var new_amount = current_price + extra_money;
	// 		}else{
	// 			var new_amount = current_price - extra_money;
	// 		}
	// 		jQuery('span.price').last().text(new_amount+ ".00€");
	// 		jQuery('.model-price').text(new_amount + ".00€");
	// 	}
	// }


	_updatePrice(button){
		var data = button.dataset;
		var option_price_string = jQuery("#"+data.option_name + ' span')[0].innerText;
		var length = option_price_string.length;
		var option_price=parseInt(option_price_string.substring(1,length-1));
		var cumulative_price_string = jQuery(".model-price")[0].innerText;
		length= cumulative_price_string.length;
		var cumulative_price = parseInt(cumulative_price_string.substring(0,length-1))
		var new_price;
		if(!isNaN(option_price)){
			var isblue = this._findIfButtonBlue(data.id2);
			if(!isblue){
				if(this.prevPrice){
					cumulative_price = cumulative_price - this.prevPrice;
				}
				var addition =  cumulative_price + option_price;
				new_price = addition + ".00€";
			}else{
				var subtraction = cumulative_price - option_price;
				new_price = subtraction + ".00€";
				option_price = null;
			}
			this.prevPrice = option_price;
			jQuery(".model-price")[0].innerText = new_price;
		}
			
	}

	_subtractFromCumulativePrice(value){
		
		var cumulative_price_string = jQuery(".model-price")[0].innerText;
		length= cumulative_price_string.length;
		var cumulative_price = parseInt(cumulative_price_string.substring(0,length-1));
		var subtraction = cumulative_price - value;
		var new_price = subtraction + ".00€";
		jQuery(".model-price")[0].innerText = new_price
		this.prevPrice = null;
		debugger
	}


	_findIfButtonBlue(id){
		for(var i =0; i<this.buttons.length; i++){
			if(this.buttons[i][0].id == id){
				 if(this.buttons[i][0].getAttribute("class") == "button-blue"){
				 	return true;
				 }else{
				 	return false;
				 }
			} 
		}
		
	}


//*********  End of Previous Code that altered the price based on magento *************



	 // As only one category body must be displayed at all times for the client, we need to hide the category bodies
	 // of the previously selected categories

	_hideCategories(button){
		if(this._isFocoCategory('Solo_Montura') || this._isFocoCategory('Neutra')){
			return;
		}
		var button_category = button.dataset['category'];
		if(button.className == 'button-blue' && (button_category != 'graduacion1' || (button_category == 'graduacion1' && this._isFillInPrescription(button)))){
				var cat_position = this.t_categories.indexOf(button_category);
				var	object = this.objects_hash
				var cat_to_hide = this.t_categories[cat_position]
				var object = this.objects_hash[cat_to_hide];
				object.hideCategory();
		}
		
	}

	
	_isFillInPrescription(button){ //check to see that it is not 'Solo montura' so the category is not hidden
		if(button.dataset['option_name'] == 'opcion1'){
			return true;
		}

	}
	
	hideTitle(){
		if(this.title_li){
			this.title_li.hide();
		}
	}

	unHideTitle(){
		if(this.title_li && this.rank != 5){
			this.title_li.show();
		}
	}

	hideCategory(){
		if(this.category_body){
			this.category_body.hide();
			this.category_exposed = false;
		}
		 // the category_exposed field is to know if the options are being show or not
	}

	unhideCategory(){
		if(this.category_body){
			this.category_body.show();
			this.category_exposed = true;
		}
	}

	
			
	emptyOptions(){
		if(this.category_body){
			this.category_body.empty();
		}
		
	}

	//when an option is clicked (or unclicked) the following categories (i.e the categories down the tree or down the table) must be erased so that 
	//any previous lens configuration is replaced by what the client is know selecting (or deselecting)

	_eraseCategories(button){
		var cat_position = this.t_categories.indexOf(button.dataset['category']);
		var start_pos = cat_position +1;
		for (var i = start_pos; i<this.t_categories.length; i++){
			var object = this.objects_hash[this.t_categories[i]];
			object.unHideTitle();
			object.emptyOptions();
			object.populated_body = false; //new addition
			object.titleColorToLight();
			if(object.prevPrice){
				object._subtractFromCumulativePrice(object.prevPrice);

			}
			object.resetNulls();
		}
	}

	resetNulls(){
		this.clicked_button = null;
		this.clicked_name = null;
		this.category_exposed = false
	}


	//After all the other logic concerning a client click, we need to decide based on that click what category to show next (if any) or whether the client is ready to buy
	//For this information we call the ConfigurableTable object (from ConfugrableTable.js) and execute its "showNextCategory" method

	_decideNext(button, option) {
		var data_for_next = {"button_id":button.id}
		var next_category = null;
		if(this.rank >2){
			this._prescriptionLogic(button,option)
			return;
		}else if(option.children.length != 0){
			next_category = option.children[0].category;
		}
		data_for_next['next_category'] = next_category;
		var cat_position = this.t_categories.indexOf(button.dataset['category']);
		data_for_next['category_position'] = cat_position;
		data_for_next['button_type'] = button.className;
		this.lensTable.showNextCategory(data_for_next);
		
	}	

	// the method _decideNext only applies to categories "foco", "reduccion" and "tratamiento"
	//Once the client is inside the "Graduacion" category the logic of what comes next is handled by this method

	_prescriptionLogic(button,option){
		if(this.rank == 3){
			var data_for_next = {'next_category':'graduacion1','button_id':'','category_position':3,'button_type':button.className}
			this.lensTable.showNextCategory(data_for_next);
		}else{
			var data_for_next = {'next_category': null,'button_id':'','category_position':4,'button_type':button.className}
			this._erasePhotoInput();
			if(option.name == 'opcion1'){
				data_for_next['next_category'] = 'graduacion2';
				this.lensTable.showNextCategory(data_for_next);
			}else{
				this._restOfOptionsLogic(button,option,data_for_next);
			}
		}	
	}

	_restOfOptionsLogic(button,option,data_for_next){
		this._empty5thCategory();
		if(option.name == 'opcion2' && button.className == 'button-blue'){
			this._addPrescriptionPhoto();	
		// }else if(option.name == 'opcion2' && button.className == 'button-normal'){
		// 	this._erasePhotoInput();
		//}
		}else{
			this.lensTable.showNextCategory(data_for_next);
		}
	}


	_empty5thCategory(){
		var object = this.objects_hash[this.t_categories[4]];
		object.hideTitle();
		object.emptyOptions();
		object.populated_body = false; //new addition
		object.titleColorToLight();

	}
	//This method is used to add a photo input so that a client can send a picture of his prescription (graduacion)
	_addPrescriptionPhoto(){
		var photo_input_box = jQuery('<div>').addClass('photo-input-box');
		var photo_input_text = jQuery('<div> Adjuntar Archivo </div>').addClass('photo-input-text');
		// var input_div = jQuery('<div> Seleccionar Archivo </div>').addClass('photo-input-button');
		var hidden_input= jQuery('<input type="file" id="hiddenInput" accept="image/*">').addClass('hidden-input');
		var visible_input = jQuery('<div id="visibleInput"> Seleccionar Archivo</div>').addClass('visible-input-button');
		hidden_input = this._inputHover(hidden_input);
		var input_wrapper = jQuery('<div>').addClass('input-wrapper');
		input_wrapper.append(hidden_input);
		input_wrapper.append(visible_input);
		var camera_icon = jQuery('<i class="fa fa-camera-retro fa-2x" aria-hidden="true"></i>').addClass('camera-icon');
		var input_camera_line = jQuery('<div>').addClass('input-camera-line');
		input_camera_line.append(input_wrapper);
		input_camera_line.append(camera_icon);
		photo_input_box.append(photo_input_text);
		photo_input_box.append(input_camera_line);
		photo_input_box.insertAfter('#opcion2 .option-header');
	}

	_erasePhotoInput(){
		jQuery('.photo-input-box').remove();
	}
	

	//This is some hover functionality for the prescription input
	_inputHover(hidden_input){
		hidden_input.hover(function(){
			jQuery('#visibleInput').css('background-color','rgb(237, 238, 239)');
		}, function(){
			jQuery('#visibleInput').css('background-color','white');
		});
		return hidden_input;
	}

			

}	

//*****************************End of click functionality ***************************

