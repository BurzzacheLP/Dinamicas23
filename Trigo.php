<?php
    $v1 = $_POST["v1"];
    $v2 = $_POST["v2"];
    
    $ResultRand = rand($v1, $v2);

    echo("Numero generado:" . $ResultRand);
    echo("<br>");
    echo("Seno: " . sin($ResultRand));
    echo("<br>");
    echo("Tangente: " . tan($ResultRand));
    echo("<br>");
    echo("Coseno: " . cos($ResultRand));

    $Resultado = 0;

    session_start();
    $_SESSION['Resultado'] = $Resultado;
    include("./result.php");
?>