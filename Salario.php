<?php
    $sueldo = $_POST['sueldo'];
    $hsExtras = $_POST['HorasExtra'];


    $Resultado = 0;

    $descObraSocial = 0.07;
    $increSueldoBruto = 0.05;
    $multExtras = 0.0005;
    $aportes = 0.14;
    

    $Resultado = $sueldo - $sueldo * $descObraSocial 
               + $sueldo * $increSueldoBruto
               + $sueldo * $aportes
               + $sueldo * ($hsExtras * $multExtras);


    session_start();
    $_SESSION['Resultado'] = $Resultado;
    include("./result.php");
?>