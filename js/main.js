//Multiplicación del número ingresado

let numero = parseInt(prompt("Coloca un número"));

for (let i = 0; i<=10; i+=2) {

let resultado = numero * i;

alert(numero+" x "+i+" = "+resultado);
}

//Valores concatenados 

let textoIngresado = prompt("Ingrese un texto, para salir coloque 'ESC'");

while (textoIngresado != "ESC") {
    alert ("El texto que ingresaste fue: "+textoIngresado);
    textoIngresado = prompt("Ingresa otro texto");

}

//Número de holas

let cantidadHolas = parseInt(prompt("Coloca la cantidad de 'Hola' que quieras ver"))

for (let i = 0; i < cantidadHolas; i++) {
    alert("Hola")
}