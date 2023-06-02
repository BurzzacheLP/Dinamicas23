<?php
    $v1 = $_POST["v1"];

    $Columnas = 4;
    $filas = 3;

    print "<table border=\"1\">\n";
    print "<tbody>\n";

    print "<tr>\n";
    print "<th></th>\n";

    for ($j=1; $j <= $Columnas; $j++) { 
        print "<th>$j</th>\n";
    }

    print "</tr>\n";

    for ($i=1; $j <= $filas; $i++) {
        print "<tr>\n";
        print "<th>$j</th>\n";
        for ($j=1; $j <= $Columnas; $j++) { 
            print "<td>$i - $j</td>\n";
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