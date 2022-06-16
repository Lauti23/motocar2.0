let nombre;

class Moto {
    constructor (marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = Number(precio);
    }
}

const motos = [];
motos.push(new Moto ("Honda", "CRF 300L", 659375));
motos.push(new Moto ("Honda", "CRF 250R", 1102960));
motos.push(new Moto ("Honda", "CRF 450R", 1162900));
motos.push(new Moto ("Kawasaki", "KLX 250L", 548482));
motos.push(new Moto ("Kawasaki", "KX 250F", 1060990));
motos.push(new Moto ("Kawasaki", "KX 450F", 1126936));
motos.push(new Moto ("KTM", "EXC - F350", 1192380));
motos.push(new Moto ("KTM", "SX 125", 1039420));
motos.push(new Moto ("KTM", "SX 450", 1322352));
motos.push(new Moto ("Suzuki", "RM-Z 250", 1001055));
motos.push(new Moto ("Suzuki", "RM-Z 450", 1018670));
motos.push(new Moto ("Suzuki", "RM-Z 450 2017", 959095));
motos.push(new Moto ("Yamaha", "WR 450", 1198870));
motos.push(new Moto ("Yamaha", "YZ 250", 995060));
motos.push(new Moto ("Yamaha", "YZ 450", 1.155095));

let total = 0;
let precio = 0;
const compraDeMoto = () => {
    let motocross;
    
    let otraMoto;
        
    do {
        nombre = prompt("Hola, bienvenido a Motocar Repuestos. ¿Cómo es tu nombre?");
        motocross = parseInt(prompt(`¿Qué moto desea comprar ${nombre}? Coloque el número que corresponda a la marca\n1- Honda\n2- Kawasaki\n3- KTM\n4- Suzuki\n5- Yamaha`)); 

        switch (motocross) {
            
            case 1:
                motocross = prompt("¿Qué modelo quéres?\n1- CRF 300L\n2- CRF 250R\n3-CRF 450R");
                if (motocross == 1) {
                    precio = motos[0].precio;
                    alert (`Elegiste ${motos[0].marca}, ${motos[0].modelo}\nPrecio: $${motos[0].precio}`);
                } else if (motocross == 2) {
                    precio = motos[1].precio;
                    alert (`Elegiste ${motos[1].marca}, ${motos[1].modelo}\nPrecio: $${motos[1].precio}`);
                } else if (motocross == 3) {
                    precio = motos[2].precio;
                    alert (`Elegiste ${motos[2].marca}, ${motos[2].modelo}\nPrecio: $${motos[2].precio}`);
                }
                break;
            case 2:
                motocross = prompt("¿Qué modelo quéres?\n1- KLX 250L\n2- KX 250F\n3-KX 450F");
                if (motocross == 1) {
                    precio = motos[3].precio;
                    alert (`Elegiste ${motos[3].marca}, ${motos[3].modelo}\nPrecio: $${motos[3].precio}`);
                } else if (motocross == 2) {
                    precio = motos[4].precio;
                    alert (`Elegiste ${motos[4].marca}, ${motos[4].modelo}\nPrecio: $${motos[4].precio}`);
                } else if (motocross == 3) {
                    precio = motos[5].precio;
                    alert (`Elegiste ${motos[5].marca}, ${motos[5].modelo}\nPrecio: $${motos[5].precio}`);
                }
                break;
            case 3:
                motocross = prompt("¿Qué modelo quéres?\n1- EXC - F350 $\n2- SX 125\n3-SX 450");
                if (motocross == 1) {
                    precio = motos[6].precio;
                    alert (`Elegiste ${motos[6].marca}, ${motos[6].modelo}\nPrecio: $${motos[6].precio}`);
                } else if (motocross == 2) {
                    precio = motos[7].precio;
                    alert (`Elegiste ${motos[7].marca}, ${motos[7].modelo}\nPrecio: $${motos[7].precio}`);
                } else if (motocross == 3) {
                    precio = motos[8].precio;
                    alert (`Elegiste ${motos[8].marca}, ${motos[8].modelo}\nPrecio: $${motos[8].precio}`);
                }
                break;
            case 4:
                motocross = prompt("¿Qué modelo quéres?\n1- RM-Z 250 $\n2- RM-Z 450\n3-RM-Z 450 2017");
                if (motocross == 1) {
                    precio = motos[9].precio;
                    alert (`Elegiste ${motos[9].marca}, ${motos[9].modelo}\nPrecio: $${motos[9].precio}`);
                } else if (motocross == 2) {
                    precio = motos[10].precio;
                    alert (`Elegiste ${motos[10].marca}, ${motos[10].modelo}\nPrecio: $${motos[10].precio}`);
                } else if (motocross == 3) {
                    precio = motos[11].precio;
                    alert (`Elegiste ${motos[11].marca}, ${motos[11].modelo}\nPrecio: $${motos[11].precio}`);
                }
                break;
            case 5: 
                motocross = prompt("¿Qué modelo quéres?\n1- WR 450 $\n2- YZ 250\n3- YZ 450");
                if (motocross == 1) {
                    precio = motos[12].precio;
                    alert (`Elegiste ${motos[12].marca}, ${motos[12].modelo}\nPrecio: $${motos[12].precio}`);
                } else if (motocross == 2) {
                    precio = motos[13].precio;
                    alert (`Elegiste ${motos[13].marca}, ${motos[13].modelo}\nPrecio: $${motos[13].precio}`);
                } else if (motocross == 3) {
                    precio = motos[14].precio;
                    alert (`Elegiste ${motos[14].marca}, ${motos[14].modelo}\nPrecio: $${motos[14].precio}`);
                }
                break;
            default:
                alert("Alguno de los datos no es correcto")
        }
        confirm ("¿Queres otra moto?");
    } while (otraMoto);
}

compraDeMoto();








