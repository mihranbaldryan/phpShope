

(function(){  
var sliderTime;
   var i=0;
   
 
   
 
   
 
   
   var  sliderPicsUrl = [
     '../../images/slider/slide1.jpg',
     '../../images/slider/slide2.jpg',    
     '../../images/slider/slide3.jpg',    
     '../../images/slider/slide4.jpg',    
   ]

   var slider=document.getElementById("slider");

   slider.style.backgroundImage =  'url('+sliderPicsUrl[0]+')';

   
 
  function slideTime(){
    
     sliderTime=setInterval(()=>{
     if(i==sliderPicsUrl.length-1){
       i=0;
     }
       else {
         i++;
       }
       slider.style.backgroundImage =  'url('+sliderPicsUrl[i]+')';

     }
     ,3000);


    
   }
 
  



   slideTime();

})();