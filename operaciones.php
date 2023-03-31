<?php
    $value1 = $_POST['v1']; 
    $value2 = $_POST['v2']; 
    $value3 = $_POST['v3']; 

    $Resultado = 0;
    switch ($value3) {
        case 0:
            $Resultado = $value1 + $value2;
            break;
        
        case 1:
            $Resultado = $value1 - $value2;
            break;
                
        case 2:
            $Resultado = $value1 * $value2;
            break;

        case 3:
            $Resultado = $value1 / $value2;
            break;

        case 4:
            $Resultado = $value1 % $value2;
            break;

        case 5:
            $Resultado = $value1 ** $value2;
            break; 
    }
    session_start();
    $_SESSION['Resultado']=$Resultado;
    include("./result.php");
?>