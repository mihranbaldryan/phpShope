<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="like.css">
    <link rel="stylesheet" href="../header/nav/nav.css">
    <link rel="stylesheet" href="../productcard/productcard.css">
    <link rel="stylesheet" href="../footer/footer.css">
</head>
<body>

<?php require_once('../header/nav/nav.php'); ?>
<div class="like_card">
<h2  class="like_card_h2"></h2>
<?php require_once('../productcard/productcard.php'); ?>
</div>
<?php require_once('../footer/footer.php'); ?>



<script src="../js/jquery-3.3.1.min.js"></script>
<script src="like.js"></script>
<script src="../header/nav/nav.js"></script>
<script src="../productcard/productcard.js"></script>
<script src="../footer/footer.js"></script>

    
</body>
</html>