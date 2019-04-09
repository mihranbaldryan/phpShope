<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin</title>
    <link rel="stylesheet" href="update.css">
    <link rel="stylesheet" href="../../header/nav/nav.css">
    
    <link rel="stylesheet" href="../../footer/footer.css">
</head>
<body>

<?php require_once('../../header/nav/nav.php'); ?>











<div class="update_card">

<h2>Update</h2>
<form method="post" name="addForm" action="../../db/dbupdate.php"   enctype="multipart/form-data"  onsubmit="return validateForm()">
<div class="admininput">
<input type="file" name="fileup" id="file" class="inputfile" />
<label for="file">Choose a image</label>

<select class="input" value=""  name="typeProduct" >
<option value="">typeProduct</option>
  <option value="mobile">mobile</option>
  <option value="tablet">tablet</option>
  <option value="accessori">accessori</option>
</select>

     
    <input class="input" type="text" name="company"   placeholder="company:"  value="">
   <input  class="input" type="text" name="model" placeholder="model: " value="">
   <input  class="input" type="text" name="price" placeholder="price: " value="">
   <input  class="input" type="text" name="version" placeholder="version: " value="">
   <input  class="input" type="text" name="year" placeholder="year: " value="">
   <input  class="input" type="text" name="os" placeholder="os: " value="">
   
</div>


<div class="admininput">

     <input class="input" type="text" name="screenType: "  placeholder="screenType: " value="">
    <input class="input" type="text" name="screenResolution"  placeholder="screenResolution: " value="">
   <input  class="input" type="text" name="screenSize" placeholder="screenSize: " value="">
   <input  class="input" type="text" name="frontCamera" placeholder="frontCamera: " value="">
   <input  class="input" type="text" name="mainCamera" placeholder="mainCamera: " value="">
   <input  class="input" type="text" name="numberOfProcessorCores" placeholder="numberOfProcessorCores: " value="">
   <input  class="input" type="text" name="cpu" placeholder="cpu; " value="">
   <input  class="input" type="text" name="ram" placeholder="ram; " value="">
</div>


<div class="admininput">

     <input class="input" type="text" name="memoryCardSlot"  placeholder="memoryCardSlot; " value="">
    <input class="input" type="text" name="memory"  placeholder="memory; " value="">
   <input  class="input" type="text" name="standartNetwork" placeholder="standartNetwork: " value="">
   <input  class="input" type="text" name="accessToTheInternet" placeholder="accessToTheInternet: " value="">
   <input  class="input" type="text" name="networkRangeLte4G" placeholder="networkRangeLte4G: " value="">
   <input  class="input" type="text" name="gps" placeholder="gps: " value="">
   <input  class="input" type="text" name="bluetooth" placeholder="bluetooth: " value="">
   <input  class="input" type="text" name="wifiNetwork" placeholder="wifiNetwork: " value="">
</div>






   <div class="admininput">
   
   <input  class="input" type="text" name="network3G" placeholder="network3G: " value="">
   <input  class="input" type="text" name="nfc" placeholder="nfc: " value="">
   <input  class="input" type="text" name="networkLte4G" placeholder="networkLte4G: " value="">
   <input  class="input" type="text" name="charingConnectorType" placeholder="charingConnectorType: " value="">
   <input  class="input" type="text" name="talkTime" placeholder="talkTime: " value="">
   <input  class="input" type="text" name="batteryType" placeholder="batteryType: " value="">
   <input  class="input" type="text" name="batteryCapacity" placeholder="batteryCapacity: " value="">
   <input  class="input" type="text" name="weight" placeholder="weight: " value="">
     </div>




     <div class="admininput">
     
     <input class="input" type="text" name="thickness"  placeholder="thickness: " value="">
    <input class="input" type="text" name="height"  placeholder="height: " value="">
   <input  class="input" type="text" name="width" placeholder="width: " value="">
   <input  class="input" type="text" name="audio" placeholder="audio: " value="">
   <input  class="input" type="text" name="simCardQuantity" placeholder="simCardQuantity: " value="">
   <select class="input" id="selectid" name="typeid" >
   
   </select>

   <input class="submit" type="submit" name="submit" value="Update">
</div>





    </form>






   






</div>

<div class="del"><input class="submit2" type="submit"  name="submit2" value="X"></div>

<div class="update_card_1">

    
    
    </div>
<?php require_once('../../footer/footer.php'); ?>



<script src="../../js/jquery-3.3.1.min.js"></script>
<script src="update.js"></script>
<script src="../../header/nav/nav.js"></script>

<script src="../../footer/footer.js"></script>

    
</body>
</html>