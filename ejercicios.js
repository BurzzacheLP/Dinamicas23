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

let button2 = document.getElementById("boton2");
button2.addEventListener("click",() => {
    let val1 = document.getElementById("n1").value;
    let val2 = document.getElementById("n2").value;
    let op = document.getElementById("operacion").value;
    
    console.log(val1, val2)
    calculadora(val1, val2, op)
})


function calculadora(a, b, ope) {
    
    
    let resultado = 0;
    
    let intA = parseInt(a)
    let intB = parseInt(b)
    
    console.log(intA)
    console.log(intB)
    console.log(ope)
    
    switch (ope) {
        case "sum":
            resultado = intA + intB;
            break;
            
        case "rest":
            resultado = intA - intB;
        break;
        
        case "multi":
            resultado = intA * intB;
            break;
            
        case "div":
            resultado = intA / intB;    
        break;
            
        case "pot":
            resultado = intA ** intB;
            break;
        default:
            break;
    }
    console.log(`Resultado: ${resultado}`);
    
    document.getElementById("pRespuesta").innerHTML = "Resultado: " + resultado;
    

    
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

// 4)



let button4 = document.getElementById("boton4");
button4.addEventListener("click", () => {
    let varTerritorio = document.getElementById("inputTerritorio").value;
    let varPoblacion = document.getElementById("inputPoblacion").value;
   
    poblacion(varTerritorio, varPoblacion)
});

function poblacion (nTerritorio, nPoblacion){
    var resultado;


    let intPoblacion = parseInt(nPoblacion)

    console.log("Territorio: " + nTerritorio)
    console.log("Poblacion: " + intPoblacion)

    switch (true) {
        case (intPoblacion <= 500):
            // Baja densidad

            console.log("Poblacion baja")
            resultado = "Poblacion baja";
            break;
            
        case (intPoblacion <= 1500):
            // Densidad aceptable   
            
            console.log("Poblacion aceptable")
            resultado = "Poblacion aceptable";
            break;
                
        case (intPoblacion <= 3000):
            // Densidad elevada

            console.log("Poblacion elevada")
            resultado = "Poblacion elevada";
            break;
                    
        case (intPoblacion <= 6000):
            // Densidad excesiva

            console.log("Poblacion excesiva")
            resultado = "Poblacion excesiva";
            break;
    
        default:
            console.log("No esta tomando nada")
            break;
    }
    document.getElementById("rPoblacion").innerHTML = nTerritorio + " tiene " + resultado;

}

// 5)

let button5 = document.getElementById("boton5");
button5.addEventListener("click", () => {
    let varActual = document.getElementById("inputActual").value;
    let varLimite = document.getElementById("inputLimite").value;
    
    numerosPrimos(varLimite, varActual);
    
});

function numerosPrimos(varLimite, varNumActual){
    // Quiero hacer que muestre los numeros primos (numActual)
    // hasta el numero Limite que de el usuario
    console.clear()
    // Hacer que el si el limite no esta establecido
    // Tome por default un valor de 100

    // Usando el Algoritmo de Sieve of Eratosthenes
    let esPrimo = Array.from({ length: intLimite + 1});


    let intLimite = parseInt(varLimite);
    console.log("Limite:" + intLimite);
    console.log(typeof(intLimite))
    

    let intNumActual = parseInt(varNumActual);
    console.log("Actual: " + intNumActual);
    console.log(typeof(intNumActual))

    if (intNumActual == 1) {
        console.log("1 no es ni primo ni compuesto")
    }

    else if (intNumActual > 1) {
        if(esPrimo[intNumActual] == true) console.log("${intNumeroActual} es primo")
        else console.log("${intNumeroActual}No es primo")
    }

    SieveOfEratosthenes(esPrimo, limite);

       
}

function SieveOfEratosthenes(esPrimo, limite){
    for (let i = 0; i <=limite; i++) esPrimo[i] = true;

    for (let i = 2; i <= Math.sqrt(limite); i++){
        if ((esPrimo[i] = true)) {
            for (let j = i * i; j <= limite; j += i) esPrimo[j] = false;
        }
    }
}


// 9) Conversor Farenheit a Celsius
// Convertir Farenheit a Celisus por medio de kelvin

let buttonKelvin = document.getElementById("Kelvinator");
buttonKelvin.addEventListener("click", () => {
    let varFareneit = document.getElementById("inputTemperatura").value;
    
    FaKaC(varFareneit);
})

// Farenhait a Kelvin a Celsius
function FaKaC(Farenheit){
    console.clear()
    // Convertir Farenheit a Kelvin
    let resultKelvin = 5/9 * (Farenheit - 32) + 273.15;
    console.log(resultKelvin + " °K");

    // Convertir Kelvin a Celsius
    let resultCelsius = resultKelvin - 273.15;
    console.log(resultCelsius + " °C")
    
    document.getElementById("rCelsius").innerHTML = resultCelsius + " °C";
}


// 10
// Calcular el perimetro, area y volumen de tres formas geometricas

let buttonPerimetro = document.getElementById("botonPerimetro")
buttonPerimetro.addEventListener("click", () => {
    cambiarElementos()
})

let varSelec = document.getElementById("selecForma").value;

console.log(varSelec)
// Hacer que los elementos del documento cambien dependiendo del switch
function cambiarElementos(selec){
    let varVal1 = document.getElementById("inputVal1").value;
    let varVal2 = document.getElementById("inputVal2").value;
    let varVal3 = document.getElementById("inputVal3").value;

    switch (selec) {
    case "triangulo":
        console.log("triangulo")
        document.getElementById("pValor2").style.display = "block";
        document.getElementById("pValor3").style.display = "block";
        calcularTriangulo()

        break;
        
    case "circulo":
        console.log("circulo")
        document.getElementById("pValor2").style.display = "block";
        document.getElementById("pValor3").style.display = "block";
        calcularCirculo();

        break;
        

    case "cubo":
        console.log("cubo")
        document.getElementById("pValor2").style.display = "none";
        document.getElementById("pValor3").style.display = "none";
        calcularCubo(varVal1)

        break;


    default:
        console.log("Nada");
        break;
    }
}

function calcularTriangulo(val1, val2, val3) {
    //console.clear();
    let valResultado = 0;
    let valArea;
    let valPerimetro;

    document.getElementById("rPerimetro").innerHTML = "Resultado: " + valResultado;
}

function calcularCirculo(val1, val2, val3) {
    //console.clear();
    let valResultado = 0;
    let valArea;
    let valPerimetro;

    document.getElementById("rPerimetro").innerHTML = "Resultado: " + valResultado;
}

function calcularCubo(val1) {
    //console.clear();
    let valArea = val1 * Math.pow(val1, 2);
    let valPerimetro = 12 * val1;
    let valVolumen = Math.pow(val1, 3);
    
    
    document.getElementById("rPerimetro").innerHTML = valArea;
}

// 11
// Validar
// apellido (no mas de 30 caracteres)
// nombre (no mas de 15)
// DNI (no mas de 8)
// mail (valido, @, 8 caracteres antes del @)
// distrito (listado de 15 opciones)




let btnEjerc11 = document.getElementById("btnEjerc11")
btnEjerc11.addEventListener("click", () => {
    let varNombre = document.getElementById("txtNombre");
    let varApellido = document.getElementById("txtApellido");
    let varDNI = document.getElementById("txtDNI");
    let varMail = document.getElementById("txtMail").value;
    let varSelecDistrito = document.getElementById("selecDistrito");

    validaDatos(varNombre, varApellido, varDNI, varMail, varSelecDistrito);
})


function validaDatos(nombre, apellido, dni, mail) {
    console.clear()
    let validar;
    
    
    if (nombre.value.length >= 15){
        // EL nombre excede el limite
        validar = false;
        console.log(validar);
        console.log(nombre.value.length);
    }
    else
    {
        // EL nombre excede el limite
        validar = true;
        console.log(validar);
        console.log(nombre.value.length);
    }

    if (apellido.value.length >= 15){
        // EL Apellido excede el limite
        validar = false;
        console.log(validar);
        console.log(apellido.value.length);
    }
    else
    {
        // EL Apellido excede el limite
        validar = true;
        console.log(validar);
        console.log(apellido.value.length);
    }

    if (dni.value.length >= 15){
        // EL nombre excede el limite
        validar = false;
        console.log(validar);
        console.log(dni.value.length);
    }
    else
    {
        // EL nombre excede el limite
        validar = true;
        console.log(validar);
        console.log(dni.value.length);
    }

    if (validarEmail(mail)){
        validar = true
        console.log("El correo electrónico es válido.");
    } 
    else 
    {
        validar = false;
        console.log("El correo electrónico no es válido.");
    }

    if (validar) {
        document.getElementById("pEjerc11").innerHTML = "Todo en orden";
    }
}

// codiguillo rapido de regEx de chatgpt adjgj
function validarEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Verificar si el correo electrónico cumple con la expresión regular
    return regex.test(email) && email.length >= 8;
}

// 12
/*  


*/