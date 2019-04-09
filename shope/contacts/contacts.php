<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <link rel="stylesheet" href="contacts.css">
    <link rel="stylesheet" href="../header/nav/nav.css">
    <link rel="stylesheet" href="../footer/footer.css">
</head>
<body>

<?php require_once('../header/nav/nav.php'); ?>

<div class="component_contacts">
    <div class="pSection">
        <div class="pPhoto">
            <iframe id="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.8455441799733!2d44.51998801541696!3d40.19025067939211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcdf8e5524c5%3A0x7d6e02506a8e68e7!2zMTA1IFRlcnlhbiBTdCwgWWVyZXZhbiwg0JDRgNC80LXQvdC40Y8!5e0!3m2!1sru!2s!4v1530175788725" frameborder="0" style="border:0" allowfullscreen></iframe>  </div>
        <div class="pInfo">
                <h2 style="font-weight: bold;" >Contacts</h2>

            <table class="table">
            <thead class="thead-light">
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Adress</th>
                    <td>105/1 Teryan str, SEUA #10, 6-th floor</td>
                </tr>
                <tr>
                    <th scope="row">E-mail</th>
                    <td><a href="mailto:mihran.baldryan@gmail.com">mihran.baldryan@gmail.com</a></td>
                </tr>
                <tr>
                    <th scope="row">Mobile</th>
                    <td><a href="tell:+37495644301">+374 95 64 43 01</a></td>
                </tr>
                <tr>
                    <th scope="row">Soc Media</th>
                    <td>
                        <a class="socA" href="#"><img class="soc" src="../images/facebook.png" alt=""></a>
                        <a class="socA" href="#"><img class="soc" src="../images/instagram.png" alt=""></a>
                        <a class="socA" href="#"><img class="soc" src="../images/youtube.png" alt=""></a>
                        <script src="../footer/footer.js"></script>
                    </td>
                </tr>
            </tbody>
            </table>

        </div>
    </div>
</div>


<?php require_once('../footer/footer.php'); ?>


<script src="../js/jquery-3.3.1.min.js"></script>
<script src="contacts.js"></script>
<script src="../header/nav/nav.js"></script>
<script src="../footer/footer.js"></script>
</body>
</html>