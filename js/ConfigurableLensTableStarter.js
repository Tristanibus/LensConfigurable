//Once the product page loads, a LensTableStarter object will be instantiated.
//First this object hides all the elements in the magento page that we don't need to show the client
//Then we get all the color options of the product (usually 2 or 3) into a hash
//We clone the add to cart button and display it on the magento page
//When this cloned add to cart button is clicked, the lens table will popup
//We also add Id attributes to the magento custom options so that its easier to change the total price of the 
//product based on the client click choices

class LensTableStarter{
  constructor(){
      this._hideElements();
      this.colorOptionsHash = this._getColorOptions();
      this._cloneAddToCartButton();
      this._addIdAttributesToMagento();
      this.initial_price = jQuery('span.price').last().text(); 
  }


  //This methods gives the custom options of magento an id, that coincides with the name of an option (that is inside a specific cateogry body)
  _addIdAttributesToMagento(){
     var category_names = ['foco','reduccion','tratamiento','graduacion1','graduacion2'];
     var option_names = ['Monofocal','Progresiva','Neutra','Solo_Montura','150','160','167','150','160','167','Ninguno','Hidrófobo','Azules','grad1opcion1','grad1opcion2','grad1opcion3','grad1opcion4','grad1opcionhih5','ES','CI','EJ','AD','DI'];
     var c_n_count = 0;
     var o_n_count = 0;
   
     jQuery('dl.last').children().each(function(){
         this.setAttribute("id", category_names[c_n_count]);
         jQuery("#"+this.id +' .input-box select').children().each(function(){   
            if(this.value){
                this.setAttribute("id", option_names[o_n_count]);
                o_n_count +=1;
            }
         });
         c_n_count += 1;
     });

  }
  //hide the elements of the magento page that we don't need to see
  _hideElements(){
       //jQuery('.product-name').css("visibility", "hidden");
       //jQuery('.price-info').css("visibility", "hidden");
       //jQuery('span.price').first
       //jQuery('.extra-info').css("visibility", "hidden");
      
       //jQuery('.product-options.last').css("visibility","hidden");
       jQuery('#aitoption_wrapper_1050').css('visibility','hidden');
       jQuery('#aitoption_wrapper_1051').css('visibility','hidden');
       jQuery('.add-to-cart-buttons button').css('visibility','hidden');
       jQuery('dl.last').css('visibility','hidden');

       //jQuery('.product-options-bottom').css("visibility", "hidden");
       //jQuery('.product-collateral').css("visibility", "hidden");
       //jQuery('.footer').prop("display", "inline-block");
       //jQuery('.product-options').css('visibility','hidden');
  
  }  

   //put all the color options of the product into a hash
  _getColorOptions(){
    var colorOptionsHash = {};
    jQuery('#attribute92 option').each(function(){
      if(this.value){
        colorOptionsHash[this.value] = this.innerText
      }
     
    });
    return colorOptionsHash;
  }

  //clone add to cart button and display it
  _cloneAddToCartButton(lensTable){
      var cloned_button = jQuery('.add-to-cart-buttons button').clone().attr('id','cloned_button');
      cloned_button.css('visibility','visible');
      
      jQuery('.add-to-cart-buttons').prepend(cloned_button);
      //jQuery('.btnWarranty').css('margin-top','-50px');
      var thisObject = this;
      
      cloned_button.click(function(){
          if(jQuery('#attribute92').val()){
             thisObject._makeLightBoxEffect();
          }
      });
  
  }

  //start lense table object 
    _startLensTable(){
          var lensTable = new ConfigurableTable();
          lensTable.designTable();
          return lensTable
    }

    //make the pop up light box effect once the cloned add to cart button is clicked
    _makeLightBoxEffect(){
        var page_mask = jQuery('<div>',{class:"page-mask"});
        var body =  jQuery('body');
        body.css('height', '100%');
        body.css('overflow','hidden');
        this.lensTable = this._startLensTable();
        var close_button = this._closeLightBoxButton(); //this is the top right x to close the light box effect (and make the lens table disappear)
        page_mask.append(close_button);
        body.append(this.lensTable.table_div);
        jQuery('.title-li #1').css("color", 'rgb(13, 87, 107)'); 
        this._adaptMagentoDataToTable();
        body.append(page_mask);
        
    } 

    //Get data of the product on magento so that its displayed on the lens table (i.e on the model strip)
    _adaptMagentoDataToTable(){
      var name =jQuery('.product-name h1').text()
      var price = jQuery('span.price').last().text();
      var color_id = jQuery('Select#Foco').val()
      var color = this.colorOptionsHash[color_id];
      jQuery('.model-name').text(name);
      jQuery('.model-price').text(price);
      jQuery('.model-color').text(color);

    }

    //method to close the light box effect
    _closeLightBox(){
        jQuery('.page-mask').remove(); 
        jQuery('.close-button').remove()
        var body = jQuery('body');
        body.css('height','')
        body.css('overflow','');
        jQuery('.popup-table').remove();
        jQuery('.buy-button').css('border-right','');
        jQuery('span.price').last().text(this.initial_price);
        // this._restoreClickedButton();
    }

    //method that creats the top right white X that closes the light box effect
    _closeLightBoxButton(){
      var close_button = jQuery('<div>x</div>').addClass('close-button');
      var savedThis = this;
      close_button.click(function(){
        savedThis._closeLightBox();
      });
      close_button.hover(function(){
          jQuery(this).css('color','rgb(212, 211, 211)');

      }, function(){
          jQuery(this).css('color','white')
      });
      return close_button;
    }




  // _alterClickedButton(){
  //     jQuery('#cloned_button button').css('background-color','white');
  //     jQuery('#cloned_button button').css('border','0.5px solid grey');
  //     jQuery('#cloned_button button span').css('color', 'grey');
  //     jQuery('#cloned_button button').prop('disabled', true);
  //     jQuery('#cloned_button button').css('cursor','pointer');
    
  // }

  // _restoreClickedButton(){
  //     jQuery('#cloned_button button').css('background-color','rgb(54, 142, 209');
  //     jQuery('#cloned_button button').css('border','');
  //     jQuery('#cloned_button button span').css('color', 'white');
  //     jQuery('#cloned_button button').prop('disabled', false);
  //     jQuery('#cloned_button button').css('cursor','pointer');
  //     jQuery('#cloned_button button').hover(
  //         function(){
  //             jQuery(this).css('background-color', 'rgb(49, 125, 183)');
  //         }, 
  //         function(){
  //             jQuery(this).css('background-color', 'rgb(54, 142, 209)');
  //         }
  //     );
  // }

 


    // _hideTableOnOutsideClick(lensTable){
    //     var savedThis =this;
    //     jQuery('body').click(function(){
    //       var table = jQuery('.table');
    //       var opacity = parseInt(table.css('opacity'));
    //           if(opacity >= 1 && savedThis._isTableNotParent(event.target)){
    //              lensTable.hideTable();
    //              savedThis._restoreClickedButton();
    //           }
          
    //       });

    // }

    // _isTableNotParent(clicked_node){
    //   var table = jQuery('.table')[0];
    //   var html = jQuery('html')[0];
    //   var node = clicked_node;
    //   while(node != html){
    //       if(node == table){
    //         return false;
    //       }
    //       node = node.parentNode;

    //   }
    //   return true;

    // } 
  
   


}


