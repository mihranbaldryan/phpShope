

///////////////////////////////////////
(function(){

    var product;
    var cart={};
    var cartlike={};
    var cartcompare={};
    var price=0;





    function buy() {


        $.post(
            "../db/core.php",
            {
                "action" : "all"
            },
            buyGood
        );
    }


   



function buyGood(data){

    var data1=JSON.parse(data);
 
    if(data1){



        var data2={};
        var cart2={};
        if (localStorage.getItem('cart')){
           
            cart2 = JSON.parse(localStorage.getItem('cart'));
    
       for(var key in cart2){
    
    data2[key]=data1[key];
    
       }
    
    
    getPrice(data2);
       showcard(data2);
    
      
        }


        }
        else
        {
            alert("not found");
        }

   
}




function getPrice(a){

    if (localStorage.getItem('cart')){
        cart=JSON.parse(localStorage.getItem('cart'));}


price=0;
    for(var key in a ){

price+=(cart[key]*(+a[key].price));

    }
    var pricetext="Դուք ոչինչ  չեք ընտրել";
    
    if(price){
        pricetext=`Ամբողջ  գումարը  կազմում է  ${price} $`
        $('.buy_pay_1 h2').html(pricetext);

    }
    else
    {
        $('.buy_pay_1 h2').html(pricetext);
    }



    
};






 

    $(document).ready(function () {


       
                 buy();
                 

       
     });

















function showcard(product){
   
    if (localStorage.getItem('cart')){
        cart=JSON.parse(localStorage.getItem('cart'));}


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


                        out+=`<div class="add_P">`;
                        out+=`<button  getid="${key}" class="button1">-</button>`;
                        out+=`<span>${cart[key]}</span>`;
                        out+=`<button getid="${key}" class="button2">+</button>`;
                         out+=`</div>`;


                        out+=`</div>`;
                        out+=`</div>`;









                        




                      




                        




}




                        $('.buy_card').html(out);

                       

                        $('.add_cart1').on('click', addToCart1); 
                        $('.add_cart2').on('click', addToCart2);   
                        $('.add_cart3').on('click', addToCart3);   






                        $('.button1').on('click', addbutton1);   
                        $('.button2').on('click', addbutton2);   


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
        
            buy();
        
    }

    
    
    
    saveCart('cart',cart);
}





function addToCart2() {
    
var i=0;
    //добавляем товар в корзину
    var id = $(this).attr('getid');

    if (localStorage.getItem('cartcompare')){
        cartcompare=JSON.parse(localStorage.getItem('cartcompare'));}
    
    // console.log(id);
    if (cartcompare[id]==undefined) {

        for(var key in cartcompare){
            key;
            i++;
            
        }

        if(i<2){
        cartcompare[id] = 1; //если в корзине нет товара - делаем равным 1
        $(this).css("background-color", "#475498");}
    }
    else {
        $(this).css("background-color", "");
        delete cartcompare[id];
       
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












function addbutton1() {

    //добавляем товар в корзину
    var id = $(this).attr('getid');

    if (localStorage.getItem('cart')){
cart=JSON.parse(localStorage.getItem('cart'));}
    
    if (cart[id]==1) {
        cart[id] = 1; //если в корзине нет товара - делаем равным 1
        delete cart[id];
        buy();}

    else {
        
         cart[id]--;
        
            buy();
        
    }


    saveCart('cart',cart);
}








function addbutton2() {

    //добавляем товар в корзину
    var id = $(this).attr('getid');

    if (localStorage.getItem('cart')){
cart=JSON.parse(localStorage.getItem('cart'));}
   
        
         cart[id]++;
        
            buy();
        
    


    saveCart('cart',cart);
}










function saveCart(a,b) {
    //сохраняю корзину в localStorage
    localStorage.setItem(a , JSON.stringify(b)); //корзину в строку
}








})();