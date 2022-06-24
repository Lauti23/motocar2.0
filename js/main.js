let alCarrito = document.getElementsByTagName("button");
console.log(alCarrito);






















// class Moto {
//     constructor (marca, modelo, precio) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.precio = Number(precio);
//     }
// }

// const motos = [];
// motos.push(new Moto ("Honda", "CRF 300L", 659375));
// motos.push(new Moto ("Honda", "CRF 250R", 1102960));
// motos.push(new Moto ("Honda", "CRF 450R", 1162900));
// motos.push(new Moto ("Kawasaki", "KLX 250L", 548482));
// motos.push(new Moto ("Kawasaki", "KX 250F", 1060990));
// motos.push(new Moto ("Kawasaki", "KX 450F", 1126936));
// motos.push(new Moto ("KTM", "EXC - F350", 1192380));
// motos.push(new Moto ("KTM", "SX 125", 1039420));
// motos.push(new Moto ("KTM", "SX 450", 1322352));
// motos.push(new Moto ("Suzuki", "RM-Z 250", 1001055));
// motos.push(new Moto ("Suzuki", "RM-Z 450", 1018670));
// motos.push(new Moto ("Suzuki", "RM-Z 450 2017", 959095));
// motos.push(new Moto ("Yamaha", "WR 450", 1198870));
// motos.push(new Moto ("Yamaha", "YZ 250", 995060));
// motos.push(new Moto ("Yamaha", "YZ 450", 1155095));

// comprarMoto.addEventListener('click', enviarCarrito);
// function enviarCarrito() {

// }



















// let precio;
// let total = 0;
// let repetir = false;
// let nombre = prompt("Hola, bienvenido a Motocar Repuestos. ¿Cómo es tu nombre?");
// const compraDeMoto = () => {
//     let motocross;
//     precio = 0;
//     do {
//         motocross = parseInt(prompt(`¿Qué moto desea comprar ${nombre}? Coloque el número que corresponda a la marca\n1- Honda\n2- Kawasaki\n3- KTM\n4- Suzuki\n5- Yamaha`)); 
        
//         switch (motocross) {
            
//             case 1:
//                 motocross = prompt("¿Qué modelo quéres?\n1- CRF 300L\n2- CRF 250R\n3-CRF 450R");
//                 if (motocross == 1) {
//                     motocross = motos[0].modelo;
//                     precio = motos[0].precio;
                    
//                 } else if (motocross == 2) {
//                     motocross = motos[1].modelo;
//                     precio = motos[1].precio;
                    
//                 } else if (motocross == 3) {
//                     motocross = motos[2].modelo;
//                     precio = motos[2].precio;
                    
//                 }
//                 break;
//             case 2:
//                 motocross = prompt("¿Qué modelo quéres?\n1- KLX 250L\n2- KX 250F\n3-KX 450F");
//                 if (motocross == 1) {
//                     motocross = motos[3].modelo;
//                     precio = motos[3].precio;
                    
//                 } else if (motocross == 2) {
//                     motocross = motos[4].modelo;
//                     precio = motos[4].precio;
                    
//                 } else if (motocross == 3) {
//                     motocross = motos[5].modelo;
//                     precio = motos[5].precio;
                    
//                 }
//                 break;
//             case 3:
//                 motocross = prompt("¿Qué modelo quéres?\n1- EXC - F350 $\n2- SX 125\n3-SX 450");
//                 if (motocross == 1) {
//                     motocross = motos[6].modelo;
//                     precio = motos[6].precio;
                    
//                 } else if (motocross == 2) {
//                     motocross = motos[7].modelo;
//                     precio = motos[7].precio;
                    
//                 } else if (motocross == 3) {
//                     motocross = motos[8].modelo;
//                     precio = motos[8].precio;
                    
//                 }
//                 break;
//             case 4:
//                 motocross = prompt("¿Qué modelo quéres?\n1- RM-Z 250 $\n2- RM-Z 450\n3-RM-Z 450 2017");
//                 if (motocross == 1) {
//                     motocross = motos[9].modelo;
//                     precio = motos[9].precio;
                    
//                 } else if (motocross == 2) {
//                     motocross = motos[10].modelo;
//                     precio = motos[10].precio;
                    
//                 } else if (motocross == 3) {
//                     motocross = motos[11].modelo;
//                     precio = motos[11].precio;
                    
//                 }
//                 break;
//             case 5: 
//                 motocross = prompt("¿Qué modelo quéres?\n1- WR 450 $\n2- YZ 250\n3- YZ 450");
//                 if (motocross == 1) {
//                     motocross = motos[12].modelo;
//                     precio = motos[12].precio;
                    
//                 } else if (motocross == 2) {
//                     motocross = motos[13].modelo;
//                     precio = motos[13].precio;
                    
//                 } else if (motocross == 3) {
//                     motocross = motos[14].modelo;
//                     precio = motos[14].precio;
                    
//                 }
//                 break;
//             default:
//                 alert("Alguno de los datos no es correcto")
//         }
        
//         confirm(`Presiona "Aceptar" para confirmar tu compra\nMoto: ${motocross}\nPrecio: $${precio}`)
//     } while (repetir);
// }

// let cuotas = 0;
// let precioDeCuota = 0;
// const cuantasCuotas = () => {
//     let quiereCuotas = confirm("¿Desea pagar su moto en cuotas?")
//     if (quiereCuotas) {
//         while (cuotas == "" || cuotas > 18 || cuotas <= 0) {
//             cuotas = parseInt(prompt("¿En cuantas cuotas desea pagar? El maximo es de 18 cuotas (Todas las cuotas tienen un interes)"))
//             precioDeCuota = precio/cuotas;
//             console.log(cuotas);
//             console.log(precioDeCuota);
//         }
//     }
// }
// let interes;
// const intereses = (cuotas) => {
//     if (cuotas == 1){
//     return 0;
//     } else {
//         interes = 0.10*precio;
//         precioDeCuota = interes+precioDeCuota;
//         console.log(precioDeCuota);
//         console.log(interes);
//     }
// }
// const precioFinal = () => {
//     total = ((precio+interes)/cuotas);
//     console.log(total);
//     alert(`El precio final es de $${precio} a abonar en ${cuotas} cuotas de $${precioDeCuota}`);


// }

// compraDeMoto();
// cuantasCuotas();
// intereses();
// precioFinal();
