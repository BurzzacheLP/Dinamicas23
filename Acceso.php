<?php
    $vEdad = $_POST["vEdad"];

    $Resultado = "xd";
    
    if($vEdad >= 18)  {
        $Resultado = "Wachin't";
    }
    else 
    {
        $Resultado = "Bloqueado";
    }

    session_start();
    $_SESSION['Resultado'] = $Resultado;
    include("./result.php");
?>