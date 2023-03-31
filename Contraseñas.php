<?php
    $v1 = $_POST['v1'];

    $Resultado = "xd2";

    if ($v1 == "cerati") {
        $Resultado = "Aguante Cerati";
    }
    elseif ($v1 == "falopa") {
        $Resultado = "n0 FALOPA NO";
    }
    else {
        $Resultado = "Error";
    }

    session_start();
    $_SESSION['Resultado'] = $Resultado;
    include("./result.php");
?>