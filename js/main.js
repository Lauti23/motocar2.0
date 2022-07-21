const carrito = [];

//Contenedores
const contenedorMotos = document.getElementById('contenedorMotos');
const contenedorItem = document.getElementById('contenedorItem');
//Botones
const botonEnviarAlCarrito = document.getElementsByClassName('botonComprar');
const comprar = document.getElementById('comprarCarrito');

//Carrito
const itemCarrito = document.getElementById('carritoItem');


document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})


const fetchData = async () => {
    const resp = await fetch('../data/data.json')
    const data = await resp.json()
    // console.log(data);
    pintarMotos(data);
}

const pintarMotos = data => {
    data.forEach(moto => {
        const div = document.createElement('div');
        div.classList.add('productoMoto');
        div.innerHTML = `
                        <img class="itemImagen" src="${moto.imagen}" alt="">
                        <h2 class="itemTitulo">${moto.marca}</h2>
                        <h3 class="itemModelo">${moto.modelo}</h3>
                        <p class="itemPrecio">$${moto.precio}</p>
                        <div class="contenedorBoton">
                            <button class="itemBoton">COMPRAR</button>
                        </div>`

        contenedorItem.appendChild(div);
    })
}




