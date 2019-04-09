<?php    


if(basename($_FILES["fileup"]["name"]))
{

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







 $typeid=test_input($_POST["typeid"]);

  $typeProduct = test_input($_POST["typeProduct"]);
  $img='images/upload/'.$namedir;
  $company = test_input($_POST["company"]);
  $model = test_input($_POST["model"]);
  $price = (test_input($_POST["price"]));
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


  
 
if($typeid){
    $typeid=(int)$typeid;

    if($typeProduct){

  $sql = "UPDATE products SET typeProduct='$typeProduct' WHERE id=$typeid";

  if ($conn->query($sql) === TRUE) {
      echo " typeProduct Record updated successfully <br>";
  } else {
      echo "Error updating record: " . $conn->error;
  }
    }





    if($namedir){

$sql = "UPDATE products SET img='$img' WHERE id=$typeid";
      
 if ($conn->query($sql) === TRUE) {
   echo "img Record updated successfully<br>";
 } else {
   echo "Error updating record: " . $conn->error;
    }
      }



          if($company){

            $sql = "UPDATE products SET company='$company' WHERE id=$typeid";
          
            if ($conn->query($sql) === TRUE) {
                echo "company Record updated successfully <br>";
            } else {
                echo "Error updating record: " . $conn->error;
            }
              }


              if($model){

                $sql = "UPDATE products SET model='$model' WHERE id=$typeid";
              
                if ($conn->query($sql) === TRUE) {
                    echo "model Record updated successfully <br>";
                } else {
                    echo "Error updating record: " . $conn->error;
                }
                  }


                  if($price){
                    $price = (double)$price;
                    
                    $sql = "UPDATE products SET price='$price' WHERE id=$typeid";
                  
                    if ($conn->query($sql) === TRUE) {
                        echo "price Record updated successfully <br>";
                    } else {
                        echo "Error updating record: " . $conn->error;
                    }
                      }


                      if($version){

                        $sql = "UPDATE products SET version='$version' WHERE id=$typeid";
                      
                        if ($conn->query($sql) === TRUE) {
                            echo "version Record updated successfully <br>";
                        } else {
                            echo "Error updating record: " . $conn->error;
                        }
                          }



                          if($year){

                            $sql = "UPDATE products SET year='$year' WHERE id=$typeid";
                          
                            if ($conn->query($sql) === TRUE) {
                                echo "year Record updated successfully <br>";
                            } else {
                                echo "Error updating record: " . $conn->error;
                            }
                              }


                              if($os){

                                $sql = "UPDATE products SET os='$os' WHERE id=$typeid";
                              
                                if ($conn->query($sql) === TRUE) {
                                    echo "os Record updated successfully <br>";
                                } else {
                                    echo "Error updating record: " . $conn->error;
                                }
                                  }


                                  if($screenType){

                                    $sql = "UPDATE products SET screenType='$screenType' WHERE id=$typeid";
                                  
                                    if ($conn->query($sql) === TRUE) {
                                        echo "screenType Record updated successfully <br>";
                                    } else {
                                        echo "Error updating record: " . $conn->error;
                                    }
                                      }

                                      if($screenResolution){

                                        $sql = "UPDATE products SET screenResolution='$screenResolution' WHERE id=$typeid";
                                      
                                        if ($conn->query($sql) === TRUE) {
                                            echo "screenResolution Record updated successfully <br>";
                                        } else {
                                            echo "Error updating record: " . $conn->error;
                                        }
                                          }





                                        if($screenSize){

                                            $sql = "UPDATE products SET screenSize='$screenSize' WHERE id=$typeid";
                                          
                                            if ($conn->query($sql) === TRUE) {
                                                echo "screenSize Record updated successfully <br>";
                                            } else {
                                                echo "Error updating record: " . $conn->error;
                                            }
                                              }







   if($frontCamera){

  $sql = "UPDATE products SET frontCamera='$frontCamera' WHERE id=$typeid";
                                              
 if ($conn->query($sql) === TRUE) {
  echo "frontCamera Record updated successfully <br>";
     } else {
   echo "Error updating record: " . $conn->error;
    }
     }



     if($mainCamera){

        $sql = "UPDATE products SET mainCamera='$mainCamera' WHERE id=$typeid";
      
        if ($conn->query($sql) === TRUE) {
            echo "mainCamera Record updated successfully <br>";
        } else {
            echo "Error updating record: " . $conn->error;
        }
          }


          if($numberOfProcessorCores){

            $sql = "UPDATE products SET numberOfProcessorCores='$numberOfProcessorCores' WHERE id=$typeid";
          
            if ($conn->query($sql) === TRUE) {
                echo " numberOfProcessorCores Record updated successfully <br>";
            } else {
                echo "Error updating record: " . $conn->error;
            }
              }


              if($cpu){

                $sql = "UPDATE products SET cpu='$cpu' WHERE id=$typeid";
              
                if ($conn->query($sql) === TRUE) {
                    echo "cpu Record updated successfully<br>";
                } else {
                    echo "Error updating record: " . $conn->error;
                }
                  }



                  if($ram){

                    $sql = "UPDATE products SET ram='$ram' WHERE id=$typeid";
                  
                    if ($conn->query($sql) === TRUE) {
                        echo "ram Record updated successfully<br>";
                    } else {
                        echo "Error updating record: " . $conn->error;
                    }
                      }




                      if($memoryCardSlot){

                        $sql = "UPDATE products SET memoryCardSlot='$memoryCardSlot' WHERE id=$typeid";
                      
                        if ($conn->query($sql) === TRUE) {
                            echo "memoryCardSlot Record updated successfully <br>";
                        } else {
                            echo "Error updating record: " . $conn->error;
                        }
                          }






                          if($memory){

                            $sql = "UPDATE products SET memory='$memory' WHERE id=$typeid";
                          
                            if ($conn->query($sql) === TRUE) {
                                echo "memory Record updated successfully <br>";
                            } else {
                                echo "Error updating record: " . $conn->error;
                            }
                              }





                              if($standartNetwork){

                                $sql = "UPDATE products SET standartNetwork='$standartNetwork' WHERE id=$typeid";
                              
                                if ($conn->query($sql) === TRUE) {
                                    echo "standartNetwork Record updated successfully <br>";
                                } else {
                                    echo "Error updating record: " . $conn->error;
                                }
                                  }




   if($accessToTheInternet){

   $sql = "UPDATE products SET accessToTheInternet='$accessToTheInternet' WHERE id=$typeid";
                                  
       if ($conn->query($sql) === TRUE) {
         echo "accessToTheInternet Record updated successfully <br>";
        } else {
         echo "Error updating record: " . $conn->error;
      }
       }



       if($networkRangeLte4G){

        $sql = "UPDATE products SET networkRangeLte4G='$networkRangeLte4G' WHERE id=$typeid";
      
        if ($conn->query($sql) === TRUE) {
            echo "networkRangeLte4G Record updated successfully <br>";
        } else {
            echo "Error updating record: " . $conn->error;
        }
          }
          
          

          if($gps){

            $sql = "UPDATE products SET gps='$gps' WHERE id=$typeid";
          
            if ($conn->query($sql) === TRUE) {
                echo "gps Record updated successfully <br>";
            } else {
                echo "Error updating record: " . $conn->error;
            }
              }



              if($bluetooth){

                $sql = "UPDATE products SET bluetooth='$bluetooth' WHERE id=$typeid";
              
                if ($conn->query($sql) === TRUE) {
                    echo "bluetooth Record updated successfully <br>";
                } else {
                    echo "Error updating record: " . $conn->error;
                }
                  }




                  if($wifiNetwork){

                    $sql = "UPDATE products SET wifiNetwork='$wifiNetwork' WHERE id=$typeid";
                  
                    if ($conn->query($sql) === TRUE) {
                        echo "wifiNetwork Record updated successfully <br>";
                    } else {
                        echo "Error updating record: " . $conn->error;
                    }
                      }






    if($network3G){

  $sql = "UPDATE products SET network3G='$network3G' WHERE id=$typeid";
                      
   if ($conn->query($sql) === TRUE) {
   echo "network3G Record updated successfully";
    } else {
    echo "Error updating record: " . $conn->error;
       }
      }



      if($nfc){

        $sql = "UPDATE products SET nfc='$nfc' WHERE id=$typeid";
      
        if ($conn->query($sql) === TRUE) {
            echo "nfc Record updated successfully <br>";
        } else {
            echo "Error updating record: " . $conn->error;
        }
          }



          if($networkLte4G){

            $sql = "UPDATE products SET networkLte4G='$networkLte4G' WHERE id=$typeid";
          
            if ($conn->query($sql) === TRUE) {
                echo "networkLte4G Record updated successfully <br>";
            } else {
                echo "Error updating record: " . $conn->error;
            }
              }





              if($charingConnectorType){

                $sql = "UPDATE products SET charingConnectorType='$charingConnectorType' WHERE id=$typeid";
              
                if ($conn->query($sql) === TRUE) {
                    echo "charingConnectorType Record updated successfully <br>";
                } else {
                    echo " Error updating record: " . $conn->error;
                }
                  }


 if($talkTime){
  $sql = "UPDATE products SET talkTime='$talkTime' WHERE id=$typeid";
                  
  if ($conn->query($sql) === TRUE) {
     echo "talkTime Record updated successfully <br>";
 } else {
     echo "Error updating record: " . $conn->error;
      }
      }


      if($batteryType){

        $sql = "UPDATE products SET batteryType='$batteryType' WHERE id=$typeid";
      
        if ($conn->query($sql) === TRUE) {
            echo "batteryType Record updated successfully <br>";
        } else {
            echo "Error updating record: " . $conn->error;
        }
          }
          if($batteryCapacity){

            $sql = "UPDATE products SET batteryCapacity='$batteryCapacity' WHERE id=$typeid";
          
            if ($conn->query($sql) === TRUE) {
                echo "batteryCapacity Record updated successfully <br>";
            } else {
                echo "Error updating record: " . $conn->error;
            }
              }


              if($weight){

                $sql = "UPDATE products SET weight='$weight' WHERE id=$typeid";
              
                if ($conn->query($sql) === TRUE) {
                    echo "weight Record updated successfully <br>";
                } else {
                    echo "Error updating record: " . $conn->error;
                }
                  }


                  if($thickness){

                    $sql = "UPDATE products SET typeProduct='$typeProduct' WHERE id=$typeid";
                  
                    if ($conn->query($sql) === TRUE) {
                        echo "typeProduct Record updated successfully <br>";
                    } else {
                        echo "Error updating record: " . $conn->error;
                    }
                      }





                      if($height){

                        $sql = "UPDATE products SET height='$height' WHERE id=$typeid";
                      
                        if ($conn->query($sql) === TRUE) {
                            echo "height Record updated successfully <br>";
                        } else {
                            echo "Error updating record: " . $conn->error;
                        }
                          }


                          if($width){

                            $sql = "UPDATE products SET width='$width' WHERE id=$typeid";
                          
                            if ($conn->query($sql) === TRUE) {
                                echo "width Record updated successfully <br>";
                            } else {
                                echo "Error updating record: " . $conn->error;
                            }
                              }


  if($audio){

     $sql = "UPDATE products SET audio='$audio' WHERE id=$typeid";
                              
    if ($conn->query($sql) === TRUE) {
         echo "audio Record updated successfully <br>";
       } else {
       echo "Error updating record: " . $conn->error;
}
}

if($simCardQuantity){

$sql = "UPDATE products SET simCardQuantity='$simCardQuantity' WHERE id=$typeid";
                                  
if ($conn->query($sql) === TRUE) {
echo "simCardQuantity Record updated successfully <br>";
} else {
   echo "Error updating record: " . $conn->error;
}
  }








}
  
  $conn->close();








 
}

function test_input($data) {
 $data = trim($data);
  $data = htmlspecialchars($data);
  return $data;
}











?>