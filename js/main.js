// const stockMotos = [{id:1, marca: "Honda", producto: "CRF 300L", precio: 659375, imagen: '../assets/motos/honda/crf300l.jpg', stock: 1},
//                 {id:2, marca: "Honda", producto: "CRF 250R", precio: 1102960, imagen:'../assets/motos/honda/CRF250R.jpg', stock: 1},
//                 {id:3, marca: "Honda", producto: "CRF 450R", precio: 1162900, imagen: '../assets/motos/honda/CRF450R.jpg', stock: 1},
//                 {id:4, marca: "Kawasaki", producto: "KLX 250L", precio: 548482, imagen: '../assets/motos/kawasaki/klx250l.jpg', stock: 1},
//                 {id:5, marca: "Kawasaki", producto: "KX 250F", precio: 1060990, imagen: '../assets/motos/kawasaki/kx250f.jpg', stock: 1},
//                 {id:6, marca: "Kawasaki", producto: "KX 450F", precio: 1126936, imagen: '../assets/motos/kawasaki/kx450f.jpg', stock: 1},
//                 {id:7, marca: "KTM", producto: "EXC - F350", precio: 1192380, imagen: '../assets/motos/ktm/exc-f350.jpg', stock: 1},
//                 {id:8, marca: "KTM", producto: "SX 125", precio: 1039420, imagen: '../assets/motos/ktm/sx125.jpg', stock: 1},
//                 {id:9, marca: "KTM", producto: "SX 450", precio: 1322352, imagen: '../assets/motos/ktm/sx450.jpg', stock: 1},
//                 {id:10, marca: "Suzuki", producto: "RM-Z 250", precio: 1001055, imagen: '../assets/motos/suzuki/rm-z250.jpg', stock: 1},
//                 {id:11, marca: "Suzuki", producto: "RM-Z 450", precio: 1018670, imagen: '../assets/motos/suzuki/rm-z450.jpg', stock: 1},
//                 {id:12, marca: "Suzuki", producto: "RM-Z 450 2017", precio: 959095, imagen: '../assets/motos/suzuki/rm-z4502017.jpg', stock: 1},
//                 {id:13, marca: "Yamaha", producto: "WR 450", precio: 1198870, imagen: '../assets/motos/yamaha/wr450f.jpg', stock: 1},
//                 {id:14, marca: "Yamaha", producto: "YZ 250", precio: 995060, imagen: '../assets/motos/yamaha/yz250.jpg', stock: 1},
//                 {id:15, marca: "Yamaha", producto: "YZ 450", precio: 1155095, imagen: '../assets/motos/yamaha/yz450f.jpg', stock: 1},];


document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    const resp = await fetch('../data/data.json')
    const data = await resp.json()
    console.log(data)
}
const carrito = [];

//Dividiendo el array
const motosHonda = stockMotos.slice(0, 3);
const motosKawasaki = stockMotos.slice(3, 6);
const motosKTM = stockMotos.slice(6, 9);
const motosSuzuki = stockMotos.slice(9, 12);
const motosYamaha = stockMotos.slice(12, 15);

//Contenedores
const contenedorHonda = document.getElementById('contenedorHonda');
const contenedorKawasaki = document.getElementById('contenedorKawasaki');
const contenedorKTM = document.getElementById('contenedorKTM');
const contenedorSuzuki = document.getElementById('contenedorSuzuki');
const contenedorYamaha = document.getElementById('contenedorYamaha');

//Botones
const botonEnviarAlCarrito = document.getElementsByClassName('botonComprar');
const comprar = document.getElementById('comprarCarrito');

//Carrito
const itemCarrito = document.getElementById('carritoItem');

//Imprimiendo las motos en DOM
const mostrarHonda = (motosHonda) => {
    contenedorHonda.innerHTML = ``;

    motosHonda.forEach ((motosHonda) => {
        const div = document.createElement('div');
        div.classList.add('productoMoto');
        div.innerHTML = `
                        <img class="imagenMoto" src="${motosHonda.imagen}" alt="">
                        <h3 class="productoMoto">${motosHonda.producto}</h3>
                        <p class="precioMoto">$${motosHonda.precio}</p>
                        <div class="contenedorBoton">
                            <button class="botonComprar">COMPRAR</button>
                        </div>`

        contenedorHonda.appendChild(div);
    })
}
const mostrarKawasaki = (motosKawasaki) => {
    contenedorKawasaki.innerHTML = ``;

    motosKawasaki.forEach((motosKawasaki) => {
        const div = document.createElement('div');
        div.classList.add('productoMoto');
        div.innerHTML = `<img class="imagenMoto" src="${motosKawasaki.imagen}" alt="">
                        <h3 class="productoMoto">${motosKawasaki.producto}</h3>
                        <p class="precioMoto">$${motosKawasaki.precio}</p>
                        <div class="contenedorBoton">
                            <button class="botonComprar">COMPRAR</button>
                        </div>`
        contenedorKawasaki.appendChild(div);
    })
}
const mostrarKTM = (motosKTM) => {
    contenedorKTM.innerHTML = ``;

    motosKTM.forEach((motosKTM) => {
        const div = document.createElement('div');
        div.classList.add('productoMoto');
        div.innerHTML = `<img class="imagenMoto" src="${motosKTM.imagen}" alt="">
                        <h3 class="productoMoto">${motosKTM.producto}</h3>
                        <p class="precioMoto">$${motosKTM.precio}</p>
                        <div class="contenedorBoton">
                            <button class="botonComprar">COMPRAR</button>
                        </div>`
        contenedorKTM.appendChild(div);
    })
}
const mostrarSuzuki = (motosSuzuki) => {
    contenedorSuzuki.innerHTML = ``;

    motosSuzuki.forEach((motosSuzuki) => {
        const div = document.createElement('div');
        div.classList.add('productoMoto');
        div.innerHTML = `<img class="imagenMoto" src="${motosSuzuki.imagen}" alt="">
                        <h3 class="productoMoto">${motosSuzuki.producto}</h3>
                        <p class="precioMoto">$${motosSuzuki.precio}</p>
                        <div class="contenedorBoton">
                            <button class="botonComprar">COMPRAR</button>
                        </div>`
        contenedorSuzuki.appendChild(div);
    })
}
const mostrarYamaha = (motosYamaha) => {
    contenedorYamaha.innerHTML = ``;

    motosYamaha.forEach((motosYamaha) => {
        const div = document.createElement('div');
        div.classList.add('productoMoto');
        div.innerHTML = `<img class="imagenMoto" src="${motosYamaha.imagen}" alt="">
                        <h3 class="productoMoto">${motosYamaha.producto}</h3>
                        <p class="precioMoto">$${motosYamaha.precio}</p>
                        <div class="contenedorBoton">
                            <button class="botonComprar">COMPRAR</button>
                        </div>`
        contenedorYamaha.appendChild(div);
    })
}


mostrarHonda(motosHonda);
mostrarKawasaki(motosKawasaki);
mostrarKTM(motosKTM);
mostrarSuzuki(motosSuzuki);
mostrarYamaha(motosYamaha);


