<?php
    $v1 = $_POST['v1'];
    $selec = $_POST['selec'];

    $Resultado = 0;

    $multEfectivo = 0.25;
    $mulTransferencia = 1.08;
    $multCredito = 1.15;
    $multCuotas = 1.25;


    switch ($selec) {
        case 0:
            $Resultado = $v1 - $v1 * $multEfectivo;
            break;
        
        case 1:
            $Resultado = $v1 * $mulTransferencia;
            break;
        
        case 2:
            $Resultado = $v1 * $multCredito;
            break;
        
        case 3:
            $Resultado = $v1 * $multCuotas;
            break;
                    
        default:
            echo('Error');
            break;

        
    }

    session_start();
    $_SESSION['Resultado']=$Resultado;
    include("./result.php");
?>