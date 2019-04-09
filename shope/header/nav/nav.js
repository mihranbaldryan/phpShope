
  (function(){  
$(document).ready(function(){

///menu icon

    $('#nav-icon').click(function(){
      $(this).toggleClass('open');
    });
    $('#sabMenuId').click(function(){
      $('#nav-icon').toggleClass('open');
      
    });



// menu open
var flag=true;
    $("#nav-icon").click(function(){
        $("#close").toggle();
        $("#sabmenuP").toggle();
        if(flag){
        $("#close").animate({
            right: '0px',
      }, 800);
      $("#sabmenuP").animate({
        right: '0px',
   
  }, 800);}
else
    {
        $("#close").animate({
            display: 'none',
            right: '-100vw',
      }, 500);
      $("#sabmenuP").animate({
        display: 'none',
        right: '-100vw',
   
  }, 500);
    }
flag=!flag;
      });
      $("#sabmenuP").click(function(){
        $("#close").toggle();
        $(this).toggle();
        if(flag){
            $("#close").animate({
                right: '0px',
          }, 800);
          $("#sabmenuP").animate({
            right: '0px',
       
      }, 800);  }   
    else
        {
            $("#close").animate({
                display: 'none',
                right: '-100vw',
          }, 500);
          $("#sabmenuP").animate({
            display: 'none',
            right: '-100vw',
       
      }, 500); }
    flag=!flag; });



//search
   var flag2=true;


      $("#logosearch").click(function(){
        $("#site_search").toggle();
        if(flag2){
        $("#site_search").animate({
            top: '0px',
            height: '6vh'
       
      }, 800);}
    else 
    {
        $("#site_search").animate({
            display: 'none',
            top: '-7vh',
      },800); 
    }
     
      flag2=!flag2;
   });


  });


  })();
 

  