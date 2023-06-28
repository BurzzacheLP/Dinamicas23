<?php
    $v1 = $_POST["v1"];
    $v2 = $_POST["v2"];


    $ResultRand = rand($v1, $v2);

    function EscribirResultados  ($v3){
        echo("Numero generado:" . $v3);
        echo("<br>");
        echo("Seno: " . sin($v3));
        echo("<br>");
        echo("Tangente: " . tan($v3));
        echo("<br>");
        echo("Coseno: " . cos($v3));
    }

    EscribirResultados($ResultRand);

    $Resultado = 0;

    session_start();
    $_SESSION['Resultado'] = $Resultado;
    include("./result.php");
?>