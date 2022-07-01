const stockMotos = [{id:1 ,producto: "CRF 300L", precio: 659375, imagen: 'motocar2.0/assets/motos/honda/CRF250R.jpg', stock: 1},
                {id:2 ,producto: "CRF 250R", precio: 1102960, imagen:'motocar2.0/assets/motos/honda/crf300l.jpg', stock: 1},
                {id:3 ,producto: "CRF 450R", precio: 1162900, imagen: 'motocar2.0/assets/motos/honda/CRF450R.jpg', stock: 1},
                {id:4 ,producto: "KLX 250L", precio: 548482, imagen: 'motocar2.0/assets/motos/kawasaki/klx250l.jpg', stock: 1},
                {id:5 ,producto: "KX 250F", precio: 1060990, imagen: 'motocar2.0/assets/motos/kawasaki/kx250f.jpg', stock: 1},
                {id:6 ,producto: "KX 450F", precio: 1126936, imagen: 'motocar2.0/assets/motos/kawasaki/kx450f.jpg', stock: 1},                   
                {id:7 ,producto: "EXC - F350", precio: 1192380, imagen: 'motocar2.0/assets/motos/ktm/exc-f350.jpg', stock: 1},
                {id:8 ,producto: "SX 125", precio: 1039420, imagen: 'motocar2.0/assets/motos/ktm/sx125.jpg', stock: 1},
                {id:9 ,producto: "SX 450", precio: 1322352, imagen: 'motocar2.0/assets/motos/ktm/sx450.jpg', stock: 1},
                {id:10 ,producto: "RM-Z 250", precio: 1001055, imagen: 'motocar2.0/assets/motos/suzuki/rm-z250.jpg', stock: 1},
                {id:11 ,producto: "RM-Z 450", precio: 1018670, imagen: 'motocar2.0/assets/motos/suzuki/rm-z450.jpg', stock: 1},
                {id:12 ,producto: "RM-Z 450 2017", precio: 959095, imagen: 'motocar2.0/assets/motos/suzuki/rm-z4502017.jpg', stock: 1},
                {id:13 ,producto: "WR 450", precio: 1198870, imagen: 'motocar2.0/assets/motos/yamaha/wr450f.jpg', stock: 1},
                {id:14 ,producto: "YZ 250", precio: 995060, imagen: 'motocar2.0/assets/motos/yamaha/yz250.jpg', stock: 1},
                {id:15 ,producto: "YZ 450", precio: 1155095, imagen: 'motocar2.0/assets/motos/yamaha/yz450f.jpg', stock: 1},];                 

const carrito = [];

const enviarAlCarrito = document.querySelectorAll('#botonComprar');

// console.log(enviarAlCarrito);

enviarAlCarrito.forEach((enviadoAlCarrito) => {
    enviadoAlCarrito.addEventListener('click', alCarritoClick);
    })

//FUNCION CON HTML
function alCarritoClick (event) {
const boton = event.target;
const item = boton.closest('.section__tarjeta');
const itemImg = item.querySelector('.section__tarjeta-imagen').src;
const itemTitulo = item.querySelector('.section__tarjeta-titulo').textContent;
const itemPrecio = item.querySelector('.section__tarjeta-precio').textContent;
listoEnCarrito(itemImg, itemTitulo, itemPrecio);
}


function listoEnCarrito (itemImg, itemTitulo, itemPrecio) {
    const filaCarrito = document.createElement('div');
    const carritoCont = document.querySelector('#carrito__item');
    const carritoContenido =    `<div class="carrito__elemento">
                                    <div id="carritoImg" class="carrito__imagen">
                                        <img class="carrito__imagen-foto" src=${itemImg} alt="">
                                    </div>
                                    <div id="carritoProducto" class="carrito__producto">
                                        <p class="carrito__modelo">${itemTitulo}</p>
                                    </div>
                                    <div class="carrito__precio">
                                        <p id="carritoPrecio">${itemPrecio}</p>
                                    </div> 
                                    <div class="carrito__eliminar">
                                        <button type="button">X</button>
                                    </div>
                                </div>`
    filaCarrito.innerHTML = carritoContenido;
    carritoCont.append(filaCarrito);

    filaCarrito.querySelector('.carrito__eliminar').addEventListener('click', borrarMoto)

precioFinal();
}

function precioFinal () {
    let total = 0;

    const precioFinalCarrito = document.querySelector('#total');

    const motosEnCarrito = document.querySelectorAll('.carrito__elemento');

    motosEnCarrito.forEach((carritoMoto) => {
        const motosEnCarritoPrecio = carritoMoto.querySelector('carrito__precio');

        const motosPrecios = Number(motosEnCarritoPrecio.textContent.replace('$', ''));
        total = total + motosPrecios;
    })
    precioFinalCarrito.innerHTML = `$${total}`
}

function borrarMoto(event) {
    const botonBorrar = event.target;
    botonBorrar.closest ('.carrito__elemento').remove();
    precioFinal();
}

function comprarAuto() {
    carritoCont.innerHTML = '';
    alert("Gracias por su compra");
    precioFinal();
}

