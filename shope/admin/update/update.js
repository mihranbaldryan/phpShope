// var product;

   

var hash = window.location.hash.substring(1);

function update() {
    $.post(
        "../../db/core.php",
        {
            "action" : "more",
            "id": hash
        },
        showGood
    );
}



// function del(){



//     $.post(
//         "../../db/core.php",
//         {
//             "action" : "del",
//             "iddel": hash
//         },
//         delGood
//     );
// }




function delGood(data){
    if(data){
        alert("delete")
        update();
    }
    else{
        alert("don't delet")
    }
}


function showGood(data){
 

product=JSON.parse(data);

if(data){
setcard(product);
}
else
{
    alert("not found");
}
}






function SelectElement(id, valueToSelect)
{    
    var element = document.getElementById(id);
    var opt = document.createElement('option');
    opt.value = valueToSelect;
    opt.innerHTML = 'id :'+valueToSelect;
    element.appendChild(opt);


    
    
    element.value = valueToSelect;



}
SelectElement("selectid", hash);

$(document).ready(function () {

    
    

    update();


    

   
 });



 function setcard(product){
    



    var out='';
        

    if(product){
    out+=`<div class="component_more">`;
    out+=`<div class="pSection1">`;
    out+=`<div class="pPhoto" id="photoId" > </div>`;
        out+=`<div class="pInfo">`;
            out+=`<table>`;
            out+=`<tr>`;
            out+=`<td><h2 style="font-weight: bold;" >${ product.company } ${ product.model }</h2></td>`;
            out+=`<td class="pPrice">${ product.price }$</td>`;
            out+=`</tr>`;
            out+=`</table>`;
                

            out+=`<table class="table "  style="margin-top: 50px;">`;
            out+=`<thead class="thead-light">`;
            out+=`</thead>`;
            out+=`<tbody id="tbody1">`;
            if(product.ram){
            out+=`<tr>`;
                out+=`<th scope="row">RAM</th>`;
                out+=`<td>${ product.ram }</td>`;
                out+=`</tr>`;
            }
                if(product.year){
                out+=`<tr >`;
                out+=`<th scope="row">Announcement Year</th>`;
                out+=`<td>${ product.year }</td>`;
                out+=`</tr>`;
                }
                if(product.screenResolution){
                out+=`<tr >`;
                out+=`<th scope="row">Screen Resolution</th>`;
                out+=`<td>${ product.screenResolution }</td>`;
                out+=`</tr>`;
                }
                if(product.screenSize){
                out+=`<tr >`;
                out+=`<th scope="row">Screen Size</th>`;
                out+=`<td>${ product.screenSize }</td>`;
                out+=`</tr>`;
                }
            //     if(product.colors){
            //     out+=`<tr >`;
            //     out+=`<th scope="row">Colors</th>`;
            //     out+=`<td>`;
            //     out+=`<i style="color:#000000" class="material-icons">lens</i>`;
            //     out+=`<i style="color:#808080" class="material-icons">lens</i>`;
            //     out+=`<i style="color:#551ABB" class="material-icons">lens</i>`;
            //     out+=`<i style="color:#ffd700" class="material-icons">lens</i>`;
            //     out+=`</td>`;
            //     out+=`</tr>`;
            // }
            out+=`</tbody>`;
            out+=`</table>`;

            out+=`</div>`;
            out+=`</div>`;
            out+=`<div class="pSection2">`;

out+=`<table class="table">`;
out+=`<thead class="thead-dark">`;
if(product.year||product.version||product.os){

out+=`<tr class="thead-dark">`;


out+=`<th scope="col" colspan="2" >General</th>`;
            out+=`</tr>`;
        }
            out+=`</thead>`;
            out+=`<tbody>`;
            if(product.version){
            out+=`<tr class="parent">`;
            out+=`<th scope="row">Model</th>`;
               out+=`<td>${ product.version }</td>`;
               out+=`</tr>`;
               }
               if(product.year){
               out+=`<tr class="parent" >`;
                out+=`<th scope="row">Announcement Year</th>`;
                out+=`<td>${ product.year }</td>`;
                out+=`</tr>`;
                }
                if(product.os){
                out+=`<tr class="parent" >`;
                out+=`<th scope="row">Operation System</th>`;
               out+=`<td>${ product.os }</td>`;
               out+=`</tr>`;
                }
                ;
                if(product.screenType||product.screenResolution||product.screenSize){
               out+=`<tr class="thead-dark">`;

            
               out+=`<th scope="col" colspan="2" >Display</th>`;
            out+=`</tr>`;
                }
            if(product.screenType){
            out+=`<tr class="parent">`;
            out+=`<th scope="row">Screen Type</th>`;
                out+=`<td>${ product.screenType } </td>`;
                out+=`</tr>`
            }
                if(product.screenResolution){
                out+=`<tr class="parent" >`;
                out+=`<th scope="row">Screen Resolution</th>`;
                out+=`<td>${ product.screenResolution }</td>`;
                out+=`</tr>`;
                }
                if(product.screenSize){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Screen Size</th>`;
            out+=`<td>${ product.screenSize }</td>`;
            out+=`</tr>`;
                }
                if(product.frontCamera||product.mainCamera){
            out+=`<tr class="thead-dark">`;
             
                out+=`<th scope="col" colspan="2" >Camera</th>`;
            out+=`</tr>`;
             }
            if(product.frontCamera){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Front Camera</th>`;
                out+=`<td>${ product.frontCamera }</td>`;
                out+=`</tr>`
            }
                if(product.mainCamera){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Main Camera</th>`;
            out+=`<td>${ product.mainCamera }</td>`;
            out+=`</tr>`;
                }
                 if(product.numberOfProcessorCores||product.cpu||product.ram||product.memoryproductSlot||product.memory){
            out+=`<tr class="thead-dark">`;
            
                out+=`<th scope="col" colspan="2" >Memory & CPU</th>`;
            out+=`</tr>`;
             }
            if(product.numberOfProcessorCores){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Number of processor cores</th>`;
                out+=`<td>${ product.numberOfProcessorCores } </td>`;
                out+=`</tr>`;
            }
                if(product.cpu){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">CPU</th>`;
            out+=`<td>${ product.cpu }</td>`;
            out+=`</tr>`;
                }
            if(product.ram){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">RAM</th>`;
            out+=`<td>${ product.ram }</td>`;
            out+=`</tr>`;
            }
            if(product.memoryproductSlot){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Memory product Slot</th>`;
            out+=`<td>${ product.memoryproductSlot }</td>`;
            out+=`</tr>`;
            }
             if(product.memory){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Memory</th>`;
            out+=`<td>${ product.memory }</td>`;
            out+=`</tr>`;
            }
            if(product.standartNetwork||product.accessToTheInternet||product.networkRangeLte4G||product.gps||product.bluetooth||product.wifiNetwork||product.network3G||product.nfc){
            out+=`<tr class="thead-dark">`;
             
                out+=`<th scope="col" colspan="2" >Network</th>`;
            out+=`</tr>`;
             }
            if(product.standartNetwork){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Standart Network</th>`;
            out+=`<td>${ product.standartNetwork }</td>`;
                out+=`</tr>`;
            }
                if(product.accessToTheInternet){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Access to the Internet</th>`;
            out+=`<td>${ product.accessToTheInternet }</td>`;
            out+=`</tr>`;
                }
             if(product.networkRangeLte4G){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">4G LTE Network range</th>`;
            out+=`<td>${ product.networkRangeLte4G }</td>`;
            out+=`</tr>`;
             }
            if(product.gps){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">GPS</th>`;
            out+=`<td>${ product.gps }</td>`;
            out+=`</tr>`;
            }
            if(product.bluetooth){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Bluetooth</th>`;
            out+=`<td>${ product.bluetooth }</td>`;
            out+=`</tr>`;
            }
            if(product.wifiNetwork){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">WiFi Network</th>`;
            out+=`<td>${ product.wifiNetwork }</td>`;
            out+=`</tr>`;
            }
            if(product.network3G){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">3G Network</th>`;
            out+=`<td>${ product.network3G }</td>`;
            out+=`</tr>`;
            }
            if(product.nfc){
            out+=`<tr class="parent">`;
            out+=`<th scope="row">NFC</th>`;
            out+=`<td>${ product.nfc }</td>`;
            out+=`</tr>`;
            }
            if(product.networkLte4G){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">4G LTE Network</th>`;
            out+=`<td>${ product.networkLte4G }</td>`;
            out+=`</tr>`;
            }
            if(product.charingConnectorType||product.talkTime||product.batteryType||product.batteryCapacity){
            out+=`<tr class="thead-dark">`;
             
               out+=`<th scope="col" colspan="2" >Power</th>`;
            out+=`</tr>`;
             }
            if(product.charingConnectorType){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Charing Connector Type</th>`;
                out+=`<td>${ product.charingConnectorType }</td>`;
                out+=`</tr>`;
            }
                if(product.talkTime){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Talk Time</th>`;
            out+=`<td>${ product.talkTime }</td>`;
            out+=`</tr>`
                }
            if(product.batteryType){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Battery Type</th>`;
            out+=`<td>${ product.batteryType }</td>`;
            out+=`</tr>`;
            }
            if(product.batteryCapacity){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Battery Capacity</th>`;
            out+=`<td>${ product.batteryCapacity }</td>`;
            out+=`</tr>`;
            }
            if(product.weight||product.thickness||product.height||product.width||product.audio||product.simproductQuantity){
            out+=`<tr class="thead-dark">`;
             
                out+=`<th scope="col" colspan="2" >Other</th>`;
            out+=`</tr>`;
             }
            if(product.weight){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Weight</th>`;
                out+=`<td>${ product.weight }</td>`;
                out+=`</tr>`;
            }
                if(product.thickness){
            out+=`<tr class="parent" >`;
            out+=`<th scope="row">Thickness</th>`;
            out+=`<td>${ product.thickness }</td>`;
                out+=`</tr> `;
                }
                if(product.height){
                out+=`<tr class="parent" >`;
                out+=`<th scope="row">Height</th>`;
                out+=`<td>${ product.height }</td>`;
                out+=`</tr>`;
                }
                if(product.width){
                out+=`<tr class="parent" >`;
                out+=`<th scope="row">Width</th>`;
                out+=`<td>${ product.width }</td>`;
                out+=`</tr>`;
                }
                if(product.audio){
                out+=`<tr class="parent" >`;
                out+=`<th scope="row">Audio</th>`;
                out+=`<td>${ product.audio }</td>`;
                out+=`</tr>`;
                }
                if(product.simproductQuantity){
                out+=`<tr class="parent" >`;
                out+=`<th scope="row">SIM product Quanitity</th>`;
                out+=`<td>${ product.simproductQuantity }</td>`;
                out+=`</tr>`;
                }
                out+=`</tbody>`;
                out+=`</table>`;
    

                out+=`</div>`;
                out+=`</div>`;




               


            }











                        $('.update_card_1').html(out);
                        if(product){
                        var photo=document.getElementById("photoId");
                        }


                        photo.style.backgroundImage =  'url(../../'+product.img+')';
                       
}










function validateForm() {


    
    // var company=document.forms["addForm"]["company"];
    // var model=document.forms["addForm"]["model"];
    var price=document.forms["addForm"]["price"];
    var year=document.forms["addForm"]["year"]; 


    // img.style="border:2px solid #475498"; 
    // company.style="border:2px solid #475498";
    // model.style="border:2px solid #475498";
    price.style="border:2px solid #475498";
    year.style="border:2px solid #475498";

   
    




//   if (!(/[^\s]+/i.test(company.value)))
// {
//     company.style="border:3px solid red";
   
//   }


//   if (!(/[^\s]+/i.test(model.value)))
//   {
//       model.style="border:3px solid red";
     
//     }



    if (!/^(([1-9]\d*(\.{1}\d*[1-9]+)?)|(0(\.\d*[1-9]+)?))?$/.test(price.value))
    {
        price.style="border:3px solid red";
       
      }




  if (!/^([1-9]\d{3})?$/.test(year.value))
{
    year.style="border:3px solid red";
   
  }


  if((!/^(([1-9]\d*(\.{1}\d*[1-9]+)?)|(0(\.\d*[1-9]+)?))?$/.test(price.value))||!(/^([1-9]\d{3})?$/.test(year.value)))
    {
      return false;
    }
    
        }







      