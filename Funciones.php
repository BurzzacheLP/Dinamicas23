<?php
    $v1 = $_POST['v1'];    
    $v2 = $_POST['v2'];    
    $selec = $_POST['selec'];    
   
    function sumar ($v1, $v2){
        return $v1 + $v2;
    }

    function restar ($v1, $v2){
        return $v1 - $v2;
    }

    function multiplicar ($v1, $v2){
        return $v1 * $v2;
    }

    function dividir ($v1, $v2){
        return $v1 / $v2; 
    }

    switch ($selec) {
        case 0:
            $Resultado = sumar($v1, $v2);
            break;
        
        case 1:
            $Resultado = restar($v1, $v2);
            break;

        case 2:
            $Resultado = multiplicar($v1, $v2);
            break;
        
        case 3:
            $Resultado = dividir($v1, $v2);
            break;
                
        default:
            echo("Elija una operaciom");
            break;
    }

    

    session_start();
    $_SESSION['Resultado'] = $Resultado;
    include("./result.php");
?>