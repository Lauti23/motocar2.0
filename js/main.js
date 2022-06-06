// //Multiplicación del número ingresado

// let numero = parseInt(prompt("Coloca un número"));

// for (let i = 0; i<=10; i+=2) {

// let resultado = numero * i;

// alert(numero+" x "+i+" = "+resultado);
// }

// //Valores concatenados 

// let textoIngresado = prompt("Ingrese un texto, para salir coloque 'ESC'");

// while (textoIngresado != "ESC") {
//     alert ("El texto que ingresaste fue: "+textoIngresado);
//     textoIngresado = prompt("Ingresa otro texto");

// }

// //Número de holas

// let cantidadHolas = parseInt(prompt("Coloca la cantidad de 'Hola' que quieras ver"))

// for (let i = 0; i < cantidadHolas; i++) {
//     alert("Hola")
// }

// class Producto {
//     constructor(nombre, marca, precio) {
//         this.nombre = nombre.toUpperCase();
//         this.marca = marca;
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumarIva() {
//         this.precio = this.precio * 1.21;
//     }
//     vender() {
//         this.vendido = true;
//     }
// };

// const producto1 = new Producto("Harina", "Favorita", 200);
// const producto2 = new Producto("Aceite", "Cocinero", 500);

// console.log(producto1)
// console.log(producto2)
// console.log(producto1.sumarIva())
// console.log(producto2.sumarIva())
// console.log(producto1.vender())
// console.log(producto2.vender())
let nombre;
let necesidad;

class Compra {
    constructor (nombre, marca, precio) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.envio = 10000;
        this.subTotal = 0;
        this.total = 0;
    }
    calcularSubTotal(){
        this.subTotal = this.precio + this.envio;
    }
    calcularIva(){
        return this.subTotal * 0.21;
    }
    calcularTotal(){
        this.total = this.subTotal + this.calcularIva();
    }

}



const pedidoMoto = () => {
    let marca;
    let precio = 0;
    let necesidad;

    nombre = prompt("Bienvenido a Motocar Repuestos, ingresa tu nombre.");
    
    
    
    while (necesidad == 0 || necesidad > 2 || !necesidad) {
        necesidad = parseInt(prompt("Hola "+ nombre +", en que te podemos ayudar?\nColoca '1' para ver las motocross o '2' para solicitar un turno en el taller"));
    }
    if (necesidad == 1){
        marca = parseInt(prompt("¿En qué marca estas interesado?\nColoca el número de la marca que quieras ver\n1 - Honda\n2 - Kawasaki\n3 - KTM\n4 - Suzuki\n5 - Yamaha"));
        switch (marca) {
            case 1:
                marca = "CRF 250R";
                precio = 1102960;
                break;
            case 2:
                marca = "KX 450F";
                precio = 1126936;
                break;
            case 3:
                marca = "EXC - F350";
                precio = 1292380;
                break;
            case 4:
                marca = "RM-Z250"
                precio = 1001055;
                break;
            case 5:
                marca = "WR 450"
                precio = 1198870
                break;
        }
    } else if (necesidad == 2) {
        for (let turno = 1; turno <= 10; turno++) {
        
            alert(nombre +" se le ha asignado el turno N° "+turno);
            
            if (turno == 1) {
                break;
            } 
        }
    }
    const pedido = new Compra(nombre, marca, precio);
    return pedido;
}
const compra = pedidoMoto();
compra.calcularIva();
compra.calcularSubTotal();
compra.calcularTotal();
alert ("Detalle de la compra:\n- "+compra.marca+": $"+compra.precio+"\n- IVA 21%: $"+compra.calcularIva()+"\n- Costo de envio: $"+compra.envio+"\n\nTOTAL: $"+ compra.total);