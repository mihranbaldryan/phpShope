



function validateForm() {
   
    var lab=document.getElementById("filelab")
    var img=document.forms["addForm"]["fileup"];
    var company=document.forms["addForm"]["company"];
    var model=document.forms["addForm"]["model"];
    var price=document.forms["addForm"]["price"];
    var year=document.forms["addForm"]["year"]; 


   lab.style="border:2px solid #475498";
    company.style="border:2px solid #475498";
    model.style="border:2px solid #475498";
    price.style="border:2px solid #475498";
    year.style="border:2px solid #475498";

   


    if (!img.files[0]) {
    
     lab.style.backgroundColor="red";

    }
    




  if (!(/[^\s]+/i.test(company.value)))
{
    company.style="border:3px solid red";
   
  }


  if (!(/[^\s]+/i.test(model.value)))
  {
      model.style="border:3px solid red";
     
    }



    if (!/^(([1-9]\d*(\.{1}\d*[1-9]+)?)|(0(\.\d*[1-9]+)?))$/.test(price.value))
    {
        price.style="border:3px solid red";
       
      }




  if (!/^([1-9]\d{3})?$/.test(year.value))
{
    year.style="border:3px solid red";
   
  }


  if((!img.files[0])||(!(/^[^\s]+/i.test(company.value)))||(!(/[^\s]+/i.test(model.value)))||(!/^(([1-9]\d*(\.{1}\d*[1-9]+)?)|(0(\.\d*[1-9]+)?))$/.test(price.value))||!(/^([1-9]\d{3})?$/.test(year.value)))
    {
      return false;
    }
    
        }




































        (function(){

          var product;
          var cart={};
          var cartlike={};
          var cartcompare={};
      
      
          function all() {
      
      
              $.post(
                  "../db/core.php",
                  {
                      "action" : "all"
                  },
                  showGood
              );
          }
      
      
      
      
         
      
      
      
      
       function showGood(data){
          
         
       product=JSON.parse(data);
       
      if(data){
          showcard(product);}
          else
          {
              alert("not found");
          }
       }
      
      
       
      
          $(document).ready(function () {
      
      
             all();
      
             
           });
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      function showcard(product){
         
          var out='';
          for (var key in product){
              
      out+=`<div class="content_card">`;
      out+=`<div id="make-3D-space">`;
          out+=`<div id="product-card">`;
          out+=`<img style="width: 230px;min-height: 300px;max-height: 400px;" src='../${ product[key].img }' alt="" />`;
          out+=`<div class="image_overlay"></div>`;
          out+=`<a href="update/update.php#${key}"><div id="view_details"  getid="${key}" >Update</div></a>`;
          out+=`<div class="stats">`;        	
          out+=`<div class="stats-container">`;
         
          out+=`<span class="product_name">${ product[key].company }</span>`;   
          out+=`<span class="product_price">${product[key].price}$</span>`;
          
          out+=`<p>${ product[key].model }</p>`;                                            
          out+=`<div class="product-options">`;
          out+=`<div class="clear"></div>`;
      //     out+=`<div class="productInfo">`;
      // if(localStorage.getItem('cart')){
      //     cart=JSON.parse(localStorage.getItem('cart'));}
      // if(localStorage.getItem('cartlike')){
      //     cartlike=JSON.parse(localStorage.getItem('cartlike'));}
      //     if(localStorage.getItem('cartcompare')){
      //         cartcompare=JSON.parse(localStorage.getItem('cartcompare'));}
      
      // if (localStorage.getItem('cart')&&cart[key]){
      //         out+=`<a  class="add_cart1" style="background-color:#475498;" getid="${key}"><img class="info"  src="../images/shopping-cart.png" alt=""></a>`;
      //      }
      // else {
      //     out+=`<a  class="add_cart1"  getid="${key}"><img class="info"  src="../images/shopping-cart.png" alt=""></a>`;
      //      }
      
      
      
           
      // if (localStorage.getItem('cartcompare')&&cartcompare[key]){
      //     out+=`<a  class="add_cart2"  style="background-color:#475498;" getid="${key}"><img class="info"  src="../images/compare.png" alt=""></a>`;
      // }
      // else{
      //     out+=`<a  class="add_cart2" getid="${key}"><img class="info"  src="../images/compare.png" alt=""></a>`;
      // }
      
      
      
      //  if (localStorage.getItem('cartlike')&&cartlike[key]){
              
      //     out+=`<a class="add_cart3"  style="background-color:#475498;" getid="${key}"><img class="info"  src="../images/like.png" alt=""></a>`;}
      //  else {
      //           out+=`<a class="add_cart3" getid="${key}"><img class="info"  src="../images/like.png" alt=""></a>`;
      //       }
      
      
      
      
                              
      //                         out+=`</div>`;
                              out+=`</div>`;                       
                              out+=`</div>`;
                              out+=`</div>`;	
                              out+=`</div>`;	 
                              out+=`</div>`;
                              out+=`</div>`;
      }
      
      
      
      
                              $('.admin_card_1').html(out);
      
                             
      
                             
      
      
      }
      
      
      
      
      
      
      
      
      
      
      
      })();