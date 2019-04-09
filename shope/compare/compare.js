

///////////////////////////////////////
(function(){

    
    var cart={};
    var cartlike={};
   var cartcompare={};

   





    function compare() {


        $.post(
            "../db/core.php",
            {
                "action" : "all"
            },
            compareGood
        );
    }


   



function compareGood(data){
   

    var data1=JSON.parse(data);
 
    if(data1){



       var data2={};
        var cart2={};
        if (localStorage.getItem('cartcompare')){
           
            cart2 = JSON.parse(localStorage.getItem('cartcompare'));
    
       for(var key in cart2){
    
    data2[key]=data1[key];
    
       }
      
   
       showcard(data2);
       showcardmore(data2);
      
        }


        }
        else
        {
            alert("not found");
        }

   
}











 

    $(document).ready(function () {


       
                compare();
                 

       
     });

















     function showcard(product){
        
        var out='';
        for (var key in product){
            
    out+=`<div class="content_card">`;
    out+=`<div id="make-3D-space">`;
        out+=`<div id="product-card">`;
        out+=`<img style="width: 230px;min-height: 300px;max-height: 400px;" src='../${ product[key].img }' alt="" />`;
        out+=`<div class="image_overlay"></div>`;
        out+=`<a href="../more/more.php#${key}"><div id="view_details"  getid="${key}" >More</div></a>`;
        out+=`<div class="stats">`;        	
        out+=`<div class="stats-container">`;
       
        out+=`<span class="product_name">${ product[key].company }</span>`;   
        out+=`<span class="product_price">${product[key].price}$</span>`;
        
        out+=`<p>${ product[key].model }</p>`;                                            
        out+=`<div class="product-options">`;
        out+=`<div class="clear"></div>`;
        out+=`<div class="productInfo">`;
    if(localStorage.getItem('cart')){
        cart=JSON.parse(localStorage.getItem('cart'));}
    if(localStorage.getItem('cartlike')){
        cartlike=JSON.parse(localStorage.getItem('cartlike'));}
        if(localStorage.getItem('cartcompare')){
            cartcompare=JSON.parse(localStorage.getItem('cartcompare'));}
    
    if (localStorage.getItem('cart')&&cart[key]){
            out+=`<a  class="add_cart1" style="background-color:#475498;" getid="${key}"><img class="info"  src="../images/shopping-cart.png" alt=""></a>`;
         }
    else {
        out+=`<a  class="add_cart1"  getid="${key}"><img class="info"  src="../images/shopping-cart.png" alt=""></a>`;
         }
    
    
    
         
    if (localStorage.getItem('cartcompare')&&cartcompare[key]){
        out+=`<a  class="add_cart2"  style="background-color:#475498;" getid="${key}"><img class="info"  src="../images/compare.png" alt=""></a>`;
    }
    else{
        out+=`<a  class="add_cart2" getid="${key}"><img class="info"  src="../images/compare.png" alt=""></a>`;
    }
    
    
    
     if (localStorage.getItem('cartlike')&&cartlike[key]){
            
        out+=`<a class="add_cart3"  style="background-color:#475498;" getid="${key}"><img class="info"  src="../images/like.png" alt=""></a>`;}
     else {
              out+=`<a class="add_cart3" getid="${key}"><img class="info"  src="../images/like.png" alt=""></a>`;
          }
    
    
    
    
                            
                            out+=`</div>`;
                            out+=`</div>`;                       
                            out+=`</div>`;
                            out+=`</div>`;	
                            out+=`</div>`;	 
                            out+=`</div>`;
                            out+=`</div>`;
    }
    
    
    
    
                            $('.compare_card .compare_card_1').html(out);
    
                           
    
                            $('.add_cart1').on('click', addToCart1); 
                            $('.add_cart2').on('click', addToCart2); 
    
                            $('.add_cart3').on('click', addToCart3);   
    
    
    }




function addToCart1() {

    //добавляем товар в корзину
    var id = $(this).attr('getid');

    if (localStorage.getItem('cart')){
cart=JSON.parse(localStorage.getItem('cart'));}
    
    if (cart[id]==undefined) {
        cart[id] = 1; //если в корзине нет товара - делаем равным 1
        $(this).css("background-color", "#475498");}
    else {
        $(this).css("background-color", "");
        delete cart[id];
        
          
        
    }

    
    
    
    saveCart('cart',cart);
}








function addToCart2() {
    

    //добавляем товар в корзину
    var id = $(this).attr('getid');

    if (localStorage.getItem('cartcompare')){
        cartcompare=JSON.parse(localStorage.getItem('cartcompare'));}
    
    // console.log(id);
    if (cartcompare[id]==undefined) {
        cartcompare[id] = 1; //если в корзине нет товара - делаем равным 1
        $(this).css("background-color", "#475498");
    }
    else {
        $(this).css("background-color", "");
        delete cartcompare[id];
       compare();
    }


    
    
    saveCart('cartcompare',cartcompare);
}







function addToCart3() {

    //добавляем товар в корзину
    var id = $(this).attr('getid');

    if (localStorage.getItem('cartlike')){
        cartlike=JSON.parse(localStorage.getItem('cartlike'));}
    
    // console.log(id);
    if (cartlike[id]==undefined) {
        cartlike[id] = 1; //если в корзине нет товара - делаем равным 1
        $(this).css("background-color", "#475498");
    }
    else {
        $(this).css("background-color", "");
        delete cartlike[id];
            
        
    }


    
    
    saveCart('cartlike',cartlike);
}





















function saveCart(a,b) {
    //сохраняю корзину в localStorage
    localStorage.setItem(a , JSON.stringify(b)); //корзину в строку
}























































   

   




   
















function showcardmore(product){
    var out='';

var key;
var data=[];
var i=0;
data[0]={}
data[1]={}



for( key in product)
{
    data[i]=product[key];
    i++;
}

    

        
    out+=`<div class="component_more">`;
   



            out+=`<div class="pSection2">`;

out+=`<table class="table">`;
out+=`<thead class="thead-dark">`;
if(data[0].year||data[0].version||data[0].os||data[1].year||data[1].version||data[1].os){

out+=`<tr class="thead-dark">`;


out+=`<th scope="col" colspan="2" >General</th>`;
            out+=`</tr>`;
        }
            out+=`</thead>`;
            out+=`<tbody>`;
            if(data[0].version||data[1].version){
                
            out+=`<tr class="parent">`;
           
            out+=`<th scope="row">Model</th>`;
            for( key in product)
            if( product[key].version )
               out+=`<td>${ product[key].version }</td>`;
               out+=`</tr>`;
               
            }
               if(data[0].year||data[1].year){
               out+=`<tr class="parent" >`;
                out+=`<th scope="row">Announcement Year</th>`;
                for( key in product)
                if( product[key].year)
                out+=`<td>${ product[key].year }</td>`;
                out+=`</tr>`;
                }
                if(data[0].os||data[1].os){
                out+=`<tr class="parent" >`;
                out+=`<th scope="row">Operation System</th>`;
                for( key in product)
                if(product[key].os)
               out+=`<td>${ product[key].os }</td>`;
               out+=`</tr>`;
                }
                if(data[0].screenType||data[0].screenResolution||data[0].screenSize||data[1].screenType||data[1].screenResolution||data[1].screenSize){
               out+=`<tr class="thead-dark">`;

                
               out+=`<th scope="col" colspan="2" >Display</th>`;
            out+=`</tr>`;
                }
            if(data[0].screenType||data[1].screenType){
            out+=`<tr class="parent">`;
            out+=`<th scope="row">Screen Type</th>`;
            for( key in product)
            if( product[key].screenType)
                out+=`<td>${ product[key].screenType } </td>`;
                out+=`</tr>`
            }
                if(data[0].screenResolution||data[1].screenResolution){
                out+=`<tr class="parent" >`;
                out+=`<th scope="row">Screen Resolution</th>`;
                for( key in product)
                if( product[key].screenResolution  )
                out+=`<td>${ product[key].screenResolution }</td>`;
                out+=`</tr>`;
                }
                if(data[0].screenSize||data[1].screenSize){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Screen Size</th>`;
            for( key in product)
            if( product[key].screenSize)
            out+=`<td>${ product[key].screenSize }</td>`;
            out+=`</tr>`;
                }
                if(data[0].frontCamera||data[0].mainCamera||data[1].frontCamera||data[1].mainCamera){
            out+=`<tr class="thead-dark">`;
             
                out+=`<th scope="col" colspan="2" >Camera</th>`;
            out+=`</tr>`;
             }
            if(data[0].frontCamera||data[1].frontCamera){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Front Camera</th>`;
            for( key in product)
            if(product[key].frontCamera)
                out+=`<td>${ product[key].frontCamera }</td>`;
                out+=`</tr>`
            }
                if(data[0].mainCamera||data[1].mainCamera){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Main Camera</th>`;
            for( key in product)
            if( product[key].mainCamera )
            out+=`<td>${ product[key].mainCamera }</td>`;
            out+=`</tr>`;
                }
                 if(data[0].numberOfProcessorCores||data[0].cpu||data[0].ram||data[0].memoryproductSlot||data[0].memory||data[1].numberOfProcessorCores||data[1].cpu||data[1].ram||data[1].memoryproductSlot||data[1].memory){
            out+=`<tr class="thead-dark">`;
            
                out+=`<th scope="col" colspan="2" >Memory & CPU</th>`;
            out+=`</tr>`;
             }
            if(data[0].numberOfProcessorCores||data[1].numberOfProcessorCores){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Number of processor cores</th>`;
            for( key in product)
            if( product[key].numberOfProcessorCores )
                out+=`<td>${ product[key].numberOfProcessorCores } </td>`;
                out+=`</tr>`;
            }
                if(data[0].cpu||data[1].cpu){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">CPU</th>`;
            for( key in product)
            if(  product[key].cpu )
            out+=`<td>${ product[key].cpu }</td>`;
            out+=`</tr>`;
                }
            if(data[0].ram||data[1].ram){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">RAM</th>`;
            for( key in product)
            if( product[key].ram )
            out+=`<td>${ product[key].ram }</td>`;
            out+=`</tr>`;
            }
            if(data[0].memoryCardSlot||data[1].memoryCardSlot){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Memory product Slot</th>`;
            for( key in product)
            if(  product[key].memoryCardSlot)
            out+=`<td>${ product[key].memoryCardSlot }</td>`;
            out+=`</tr>`;
            }
             if(data[0].memory||data[1].memory){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Memory</th>`;
            for( key in product)
            if(  product[key].memory)
            out+=`<td>${ product[key].memory }</td>`;
            out+=`</tr>`;
            }
            if(data[0].standartNetwork||data[0].accessToTheInternet||data[0].networkRangeLte4G||data[0].gps||data[0].bluetooth||data[0].wifiNetwork||data[0].network3G||data[0].nfc||data[1].standartNetwork||data[1].accessToTheInternet||data[1].networkRangeLte4G||data[1].gps||data[1].bluetooth||data[1].wifiNetwork||data[1].network3G||data[1].nfc){
            out+=`<tr class="thead-dark">`;
             
                out+=`<th scope="col" colspan="2" >Network</th>`;
            out+=`</tr>`;
             }
            if(data[0].standartNetwork||data[1].standartNetwork){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Standart Network</th>`;
            for( key in product)
            if(product[key].standartNetwork)
            out+=`<td>${ product[key].standartNetwork }</td>`;
                out+=`</tr>`;
            }
                if(data[0].accessToTheInternet||data[1].accessToTheInternet){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Access to the Internet</th>`;
            for( key in product)
            if( product[key].accessToTheInternet)
            out+=`<td>${ product[key].accessToTheInternet }</td>`;
            out+=`</tr>`;
                }
             if(data[0].networkRangeLte4G||data[1].networkRangeLte4G){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">4G LTE Network range</th>`;
            for( key in product)
            if(product[key].networkRangeLte4G)
            out+=`<td>${ product[key].networkRangeLte4G }</td>`;
            out+=`</tr>`;
             }
            if(data[0].gps||data[1].gps){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">GPS</th>`;
            for( key in product)
             if( product[key].gps)
            out+=`<td>${ product[key].gps }</td>`;
            out+=`</tr>`;
            }
            if(data[0].bluetooth||data[1].bluetooth){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Bluetooth</th>`;
            for( key in product)
            if( product[key].bluetooth)
            out+=`<td>${ product[key].bluetooth }</td>`;
            out+=`</tr>`;
            }
            if(data[0].wifiNetwork||data[1].wifiNetwork){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">WiFi Network</th>`;
            for( key in product)
            if( product[key].wifiNetwork)
            out+=`<td>${ product[key].wifiNetwork }</td>`;
            out+=`</tr>`;
            }
            if(data[0].network3G||data[1].network3G){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">3G Network</th>`;
            for( key in product)
            if( product[key].network3G)
            out+=`<td>${ product[key].network3G }</td>`;
            out+=`</tr>`;
            }
            if(data[0].nfc||data[1].nfc){
            out+=`<tr class="parent">`;
            out+=`<th scope="row">NFC</th>`;
            for( key in product)
            if( product[key].nfc)
            out+=`<td>${ product[key].nfc }</td>`;
            out+=`</tr>`;
            }
            if(data[0].networkLte4G||data[1].networkLte4G){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">4G LTE Network</th>`;
            for( key in product)
            if( product[key].networkLte4G)
            out+=`<td>${ product[key].networkLte4G }</td>`;
            out+=`</tr>`;
            }
            if(data[0].charingConnectorType||data[0].talkTime||data[0].batteryType||data[0].batteryCapacity||data[1].charingConnectorType||data[1].talkTime||data[1].batteryType||data[1].batteryCapacity){
            out+=`<tr class="thead-dark">`;
             
               out+=`<th scope="col" colspan="2" >Power</th>`;
            out+=`</tr>`;
             }
            if(data[0].charingConnectorType||data[1].charingConnectorType){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Charing Connector Type</th>`;
            for( key in product)
            if( product[key].charingConnectorType)
                out+=`<td>${ product[key].charingConnectorType }</td>`;
                out+=`</tr>`;
            }
                if(data[0].talkTime||data[1].talkTime){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Talk Time</th>`;
            for( key in product)
            if( product[key].talkTime)
            out+=`<td>${ product[key].talkTime }</td>`;
            out+=`</tr>`
                }
            if(data[0].batteryType||data[1].batteryType){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Battery Type</th>`;
            for( key in product)
            if( product[key].batteryType)
            out+=`<td>${ product[key].batteryType }</td>`;
            out+=`</tr>`;
            }
            if(data[0].batteryCapacity||data[1].batteryCapacity){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Battery Capacity</th>`;
            for( key in product)
            if( product[key].batteryCapacity)
            out+=`<td>${ product[key].batteryCapacity }</td>`;
            out+=`</tr>`;
            }
            if(data[0].weight||data[0].thickness||data[0].height||data[0].width||data[0].audio||data[0].simproductQuantity||data[1].weight||data[1].thickness||data[1].height||data[1].width||data[1].audio||data[1].simproductQuantity){
            out+=`<tr class="thead-dark">`;
             
                out+=`<th scope="col" colspan="2" >Other</th>`;
            out+=`</tr>`;
             }
            if(data[0].weight||data[1].weight){
                
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Weight</th>`;
            for( key in product)
            if( product[key].weight)
                out+=`<td>${ product[key].weight }</td>`;
                out+=`</tr>`;
            }
                if(data[0].thickness||data[1].thickness){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Thickness</th>`;
            for( key in product)
            if(  product[key].thickness)
            out+=`<td>${ product[key].thickness }</td>`;
                out+=`</tr> `;
                }
                if(data[0].height||data[1].height){
                out+=`<tr class="parent" >`;
                out+=`<th scope="row">Height</th>`;
                for( key in product)
                if(product[key].height)
                out+=`<td>${ product[key].height }</td>`;
                out+=`</tr>`;
                }
                if(data[0].width||data[1].width){
                out+=`<tr class="parent" >`;
                out+=`<th scope="row">Width</th>`;
                for( key in product)
                if(product[key].width)
                out+=`<td>${ product[key].width }</td>`;
                out+=`</tr>`;
                }
                if(data[0].audio||data[1].audio){
                out+=`<tr class="parent" >`;
                out+=`<th scope="row">Audio</th>`;
                for( key in product)
                if(  product[key].audio)
                out+=`<td>${ product[key].audio }</td>`;
                out+=`</tr>`;
                }
                if(data[0].simCardQuantity||data[1].simCardQuantity){
                out+=`<tr class="parent" >`;
                out+=`<th scope="row">SIM product Quanitity</th>`;
                for( key in product)
                if(product[key].simCardQuantity)
                out+=`<td>${ product[key].simCardQuantity}</td>`;
                out+=`</tr>`;
                }
                out+=`</tbody>`;
                out+=`</table>`;
    

                out+=`</div>`;
                out+=`</div>`;





            // }
















                        $('.compare_card .compare_card_2').html(out);


                        // var photo=document.getElementById("photoId");


                        // photo.style.backgroundImage =  'url(../'+product[key].img+')';
                       
}


































})();