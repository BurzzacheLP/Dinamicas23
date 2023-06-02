<?php
    $v1 = $_POST["v1"];
    $v2 = $_POST["v2"];
    
    $Columnas = 10;
    $filas = 10;
    
    print "<table border=\"1\">\n";
    print "<tbody>\n";
    
    print "<tr>\n";
    print "<th></th>\n";
    
    for ($j=1; $j <= $Columnas; $j++) { 
        print "<th>$j</th>\n";
    }
    
    print "</tr>\n";
    
    for ($i=1; $i <= $filas; $i++) {
        print "<tr>\n";
        print "<th>$i</th>\n";
        for ($j=1; $j <= $Columnas; $j++) { 
            $v3 = $i * $j;
            
            print "<td>$v3</td>\n";
        } 
        print "</tr>\n";
    }

    print "</tbody>\n";
    print "</table>\n";

    /*
    for ($i=0; $i < 100; $i++) {
        for ($j=0; $j < 2; $j++) { 
            echo "<br>";
        }
        echo "<span>sex</span>";
    }
    */
    $Resultado = 0;


    session_start();
    $_SESSION['Resultado'] = $Resultado;
    include("./result.php");
?>