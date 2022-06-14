let nombre 

class Compra {
    constructor (moto, precio) {
        this.moto = moto,
        this.precio = precio, 
        this.envio = 6000,
        this.subTotal = 0,
        this.total = 0
    }
    calcularSubTotal() {
        this.subTotal = this.precio * 1.21;
    }
    calcularTotal() {
        this.total = this.subTotal + this.envio;
    }
}

//Array de motos en stock
const motosHonda = [{modelo: "CRF 300L", precio: 659375},
                    {modelo: "CRF 250R", precio: 1102960},
                    {modelo: "CRF 450R", precio: 1162900}];

const motosKawasaki =  [{modelo: "KLX 250L", precio: 548842},
                        {modelo: "KX 250F", precio: 1060990},
                        {modelo: "KX 450F", precio: 1126936}];

const motosKtm = [{modelo: "EXC - F350", precio: 1292380},
                {modelo: "SX 125", precio: 1039420},
                {modelo: "SX 450", precio: 1322352}];

const motosSuzuki = [{modelo: "RM-Z250", precio: 1001055},
                    {modelo: "RM-Z450", precio: 1018670},
                    {modelo: "RM-Z 450 2017", precio: 959095}];

const motosYamaha = [{modelo: "WR 450", precio: 1198870},
                    {modelo: "YZ 250", precio: 995060},
                    {modelo: "YZ 450F", precio: 1155095}];

//Función para el pedido
const pedidoMoto = () => {
    let moto = "";
    let precio = 0;
    let necesidad = 0;
    nombre = prompt("Hola, bienvenido a Motocar Repuestos. Cómo es tu nombre?")
    while (necesidad == 0 || necesidad > 2 || !necesidad) {
    necesidad = (parseInt(prompt("¿En qué te podemos ayudar? Coloca '1' o '2' según lo que necesites\n1- Comprar una moto.\n2- Sacar un turno.")));
    

    if (necesidad == 1) {
        
        while (moto == 0 || moto > 5 || !moto) {
            moto = parseInt(prompt("¿En qué marca esta interesado?\n1- Honda\n2- Kawasaki\n3-KTM\n4-Suzuki\n5-Yamaha"));
        
        
            

    const pedido = new Compra(moto, precio);
    return pedido;
}
const compra = pedidoMoto();
compra.calcularSubTotal();
compra.calcularTotal();








