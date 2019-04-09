<?php    



if(basename($_FILES["fileup"]["name"])){

$target_dir = "../images/upload/";
$target_file = $target_dir . basename($_FILES["fileup"]["name"]);
$namedir= basename($_FILES["fileup"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileup"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}

$i=0;
while(file_exists($target_file)){
   
    $target_dir = "../images/upload/".$i;
    $target_file = $target_dir . basename($_FILES["fileup"]["name"]);
    $i+=1;
}


// Check file size
if ($_FILES["fileup"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileup"]["tmp_name"], $target_file)) {
        echo "The file". basename( $_FILES["fileup"]["name"]). "has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}

}else{
    echo "Sorry we don't chose images";
}



























function connect(){
    $conn = mysqli_connect("localhost", "id5422062_mihran", "095644301m", "id5422062_shope");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    return $conn;
}




if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $conn=connect();









  $typeProduct = test_input($_POST["typeProduct"]);
  $img='images/upload/'.$namedir;
  $company = test_input($_POST["company"]);
  $model = test_input($_POST["model"]);
  $price = (double)(test_input($_POST["price"]));
  $version = test_input($_POST["version"]);
  $year = (test_input($_POST["year"]));
  $os = test_input($_POST["os"]);
  $screenType = test_input($_POST["screenType"]);
  $screenResolution = test_input($_POST["screenResolution"]);
  $screenSize = test_input($_POST["screenSize"]);
  $frontCamera = test_input($_POST["frontCamera"]);
  $mainCamera = test_input($_POST["mainCamera"]);
  $numberOfProcessorCores = test_input($_POST["numberOfProcessorCores"]);
  $cpu = test_input($_POST["cpu"]);
  $ram = test_input($_POST["ram"]);
  $memoryCardSlot = test_input($_POST["memoryCardSlot"]);
  $memory = test_input($_POST["memory"]);
  $standartNetwork = test_input($_POST["standartNetwork"]);
  $accessToTheInternet = test_input($_POST["accessToTheInternet"]);
  $networkRangeLte4G = test_input($_POST["networkRangeLte4G"]);
  $gps = test_input($_POST["gps"]);
  $bluetooth = test_input($_POST["bluetooth"]);
  $wifiNetwork = test_input($_POST["wifiNetwork"]);
  $network3G = test_input($_POST["network3G"]);
  $nfc = test_input($_POST["nfc"]);
  $networkLte4G = test_input($_POST["networkLte4G"]);
  $charingConnectorType = test_input($_POST["charingConnectorType"]);
  $talkTime = test_input($_POST["talkTime"]);
  $batteryType = test_input($_POST["batteryType"]);

  $batteryCapacity = test_input($_POST["batteryCapacity"]);
  $weight = test_input($_POST["weight"]);
  $thickness = test_input($_POST["thickness"]);
  $height = test_input($_POST["height"]);
  $width = test_input($_POST["width"]);
  $audio = test_input($_POST["audio"]);
  $simCardQuantity = test_input($_POST["simCardQuantity"]);


  
 



  $sql = "INSERT INTO products (typeProduct, img, company, model  , price ,version, year  , os  ,  screenType , screenResolution ,screenSize ,frontCamera , mainCamera ,numberOfProcessorCores ,cpu ,ram ,memoryCardSlot,memory,standartNetwork , accessToTheInternet,networkRangeLte4G ,gps , bluetooth ,wifiNetwork , network3G, nfc,networkLte4G ,charingConnectorType,talkTime ,batteryType ,batteryCapacity ,weight  , thickness,height , width, audio , simCardQuantity)
  VALUES ('$typeProduct', '$img', '$company','$model'  , '$price' ,'$version', '$year'  , '$os'  ,  '$screenType' , '$screenResolution' ,'$screenSize', '$frontCamera' , '$mainCamera' ,'$numberOfProcessorCores' ,'$cpu' ,'$ram' ,'$memoryCardSlot','$memory','$standartNetwork' , '$accessToTheInternet','$networkRangeLte4G' ,'$gps' , '$bluetooth' ,'$wifiNetwork' , '$network3G', '$nfc','$networkLte4G' ,'$charingConnectorType','$talkTime' ,'$batteryType' ,'$batteryCapacity' ,'$weight'  , '$thickness','$height' , '$width','$audio' , '$simCardQuantity')";
  
  if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
  
  mysqli_close($conn);








 
}

function test_input($data) {
 $data = trim($data);
  $data = htmlspecialchars($data);
  return $data;
}











?>