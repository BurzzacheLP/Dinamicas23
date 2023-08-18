/*
1) Nombre y edad, mostrar si puede o no manejar

2) usar todos los operadores aritmeticos binarios

3) punto de partida, destino, modo de viaje indicar:
    - sin recargo       / vehiculo propio
    - 5% recargo       / micro
    - 10% recargo     / avion
    - 15% descuento  / destino @interior del pais
    - 25% recargo   / destino @exterior

4) A partir de inputs (Territorio y Poblacion) indicar:
    - baja densidad poblacional
    - densidad aceptable
    - densidad elevada
    - densidad excesiva

    5) Mostrar los primeros numeros primos entre 1 y 100
*/

// 1)
console.log("hola");

let varName = document.getElementById("nombre");
let varAge = document.getElementById("edad"); 

let button = document.getElementById("boton");
button.addEventListener("click", manejar);

function manejar(nombre, edad) {
    console.log(varName.value);
    console.log(varAge.value);

    if (varAge.value >= 18){
        console.log(varName.value + ", Podes manejar");
        alert(varName + ", Podes manejar");
    }
    else {
        console.log(varName.value     + ", Te falta todavia pibe");
        alert(varName + ", Te falta todavia pibe");
    }
}

// 2) 

let a = document.getElementById("n1.value")
let b = document.getElementById("n2.value")
let op = document.getElementById("operacion.value");
let resultado = 0;

let button2 = document.getElementById("boton2");
button2.addEventListener("click", calculadora)

function calculadora(a, b, op) {
   console.log(operacion.value)
    switch (operacion.value) {
        case "+":
            console.log("suma");
            resultado = a + b;
            break;
            
        case "-":
            
            break;
            
        case "*":
            
            break;
                
        case "/":
                    
            break;
            
        case "^":
            
            break;
                
        case "√":

            break;
        default:
            break;
    }
    console.log(`Resultado: ${resultado}`);
}





// 3)
let varPartida = document.getElementById("PPartida");
let varDestino = document.getElementById("PDestino");
let varMTransporte = document.getElementById("MTransporte");

let varRecargoFinal = "";



let button3 = document.getElementById("boton3");
button3.addEventListener("click", gmaps)


function gmaps (PPartida, PDestino, MTransporte) {
    console.log(varPartida.value);
    console.log(varDestino.value);
    console.log(varMTransporte.value);

    // Verificar que las opciones no sean las mismas
    if (varPartida.value != varDestino.value){
        // Verificar si es exterior
        
        if (varDestino.value >= 6) {
            // 25% Recargo
            varRecargoFinal = varRecargoFinal + "\n - 25% de Recargo Viaje al exterior del pais"
        } 
        else {
            varRecargoFinal = varRecargoFinal + "\n - 15% de Descuento Viaje al Interior del pais"
        }
        
        switch (varMTransporte.value) {
            case "Micro":
                console.log("dea")   
                // 5% Recargo
                varRecargoFinal = varRecargoFinal + "\n - 5% de Recargo Viaje en Micro";
                break;
                
                case "Avion":
                // 10% Recargo
                varRecargoFinal = varRecargoFinal + "\n - 10% de Recargo Viaje en Avion";
                break;
                
                case "VPropio":
                    // 0% Recargo
                    varRecargoFinal = varRecargoFinal + "\n - 0% de Recargo, Viaje en Vehiculo Propio";
                    break;
                    
                    default:
                        console.log("ahre");
                        break;
                    }
                    // 25% Recargo 
            alert("El recargo total seria " + varRecargoFinal)
        }
    else {
        // si son iguales
        alert("Anda caminando, salchicha");
    }
    varRecargoFinal = "";
}






