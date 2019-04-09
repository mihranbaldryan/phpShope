<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="buy.css">
    <link rel="stylesheet" href="../header/nav/nav.css">
    
    <link rel="stylesheet" href="../footer/footer.css">
</head>
<body>

<?php require_once('../header/nav/nav.php'); ?>
<div class="content_buy">

  <div class="buy_pay">
     <div class="buy_pay_1">
     <h2></h2>
    
    </div>







    <form method="post"  action="" >
     <input class="input" type="text" name="name"  placeholder=" Name:" value="">
   
    
    <input class="input" type="email" name="email"  placeholder=" E-mail:" value="">
    
   
   <input  class="input" type="text" name="phone" placeholder=" Phone number:" value="">
    
    
     <textarea  class="input" name="comment" rows="5" cols="40"   placeholder="Address: "></textarea>
     
     <input class="submit" type="submit" name="submit" value="Pay">
     
    </form>






  </div>

  <div class="buy_card">

  </div>

</div>
<?php require_once('../footer/footer.php'); ?>



<script src="../js/jquery-3.3.1.min.js"></script>
<script src="buy.js"></script>
<script src="../header/nav/nav.js"></script>

<script src="../footer/footer.js"></script>

    
</body>
</html>