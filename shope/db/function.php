<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "shope";

function connect(){
    $conn = mysqli_connect("localhost", "id5422062_mihran", "095644301m", "id5422062_shope");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    return $conn;
}


function all(){
    //вывожу список товаров
    $conn = connect();
    $sql = "SELECT * FROM products";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
         
    } else {
        echo "0";
    }
    mysqli_close($conn);
}



function mobile(){
    //вывожу список товаров
    $conn = connect();
    $sql = "SELECT * FROM products WHERE typeProduct='mobile'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
         
    } else {
        echo "0";
    }
    mysqli_close($conn);
}




function tablet(){
    //вывожу список товаров
    $conn = connect();
    $sql = "SELECT * FROM products WHERE typeProduct='tablet'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
         
    } else {
        echo "0";
    }
    mysqli_close($conn);

    
}




function accessori(){
    //вывожу список товаров
    $conn = connect();
    $sql = "SELECT * FROM products WHERE typeProduct='accessori'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
         
    } else {
        echo "0";
    }
    mysqli_close($conn);

    
}






function more(){
    $id = $_POST['id'];
    //вывожу список товаров
    $conn = connect();
    $sql = "SELECT * FROM products WHERE id='$id'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
       
        $row = mysqli_fetch_assoc($result);
          
        echo json_encode($row);
         
    } else {
        echo "0";
    }
    mysqli_close($conn);

    
}





function del(){
    $id = $_POST['iddel'];
    //вывожу список товаров
    $conn = connect();
    $sql = "DELETE FROM products WHERE id=$id";

if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

    mysqli_close($conn);

    
}



?>