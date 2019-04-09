<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
  
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="header/slider/slider.css">
    <link rel="stylesheet" href="header/nav/nav.css">
    <link rel="stylesheet" href="header/section/section.css">
    <link rel="stylesheet" href="productcard/productcard.css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="footer/footer.css">

</head>
<body>
<?php require_once('header/nav/nav.php'); ?>

<?php require_once('header/slider/slider.php'); ?>
<?php require_once('header/section/section.php'); ?>
<div class="content_index">
<?php require_once('productcard/productcard.php'); ?>
</div>
<?php require_once('footer/footer.php'); ?>


<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/js.js"></script>
<script src="header/nav/nav.js"></script>
<script src="header/slider/slider.js"></script>
<script src="productcard/productcard.js"></script>
<script src="footer/footer.js"></script>
</body>
</html>