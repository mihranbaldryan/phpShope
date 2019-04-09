<?php

$action = $_POST['action'];

require_once 'function.php';

switch ($action) {
    case 'all':
        all();
        break;
   case 'mobile':
        mobile();
       break;

       case 'tablet':
        tablet();
       break;
       case 'accessori':
       accessori();
       break;


       case 'more':
       more();
       break;

       case 'del':
       del();
       break;
//    case 2:
//        echo "i равно 2";
//        break;
}

?>