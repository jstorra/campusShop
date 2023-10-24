import { loadCars } from "./loadCarritos.js"
import button from "./btnAction.js"
import abrigo from "../storage/abrigos.js"
import camiseta from "../storage/camisetas.js"
import pantalon from "../storage/pantalones.js"
import carrito from "../storage/carrito.js"

const todosMain = async (content) => {
    const abrigos = await abrigo.getAll()
    const camisetas = await camiseta.getAll()
    const pantalones = await pantalon.getAll()

    const cardsAbrigos = abrigos.map(abrigo => `
        <div class="card">
            <img src="${abrigo.imagen}">
            <div class="info">
                <p>${abrigo.nombre}</p>
                <p>$${abrigo.precio}</p>
                <button class="btnAgregar" data-tipo="abrigo" data-id="${abrigo.id}"->Agregar</button>
            </div>
        </div>
    `).join("")

    const cardsCamisetas = camisetas.map(camiseta => `
        <div class="card">
            <img src="${camiseta.imagen}">
            <div class="info">
                <p>${camiseta.nombre}</p>
                <p>$${camiseta.precio}</p>
                <button class="btnAgregar" data-tipo="camiseta" data-id="${camiseta.id}">Agregar</button>
            </div>
        </div>
    `).join("")

    const cardsPantalones = pantalones.map(pantalon => `
        <div class="card">
            <img src="${pantalon.imagen}">
            <div class="info">
                <p>${pantalon.nombre}</p>
                <p>$${pantalon.precio}</p>
                <button class="btnAgregar" data-tipo="pantalon" data-id="${pantalon.id}">Agregar</button>
            </div>
        </div>
    `).join("")
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Todos los productos</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Todos los productos</a></li>
        </ul>
        <div class="info-data">
            ${cardsAbrigos}
            ${cardsCamisetas}
            ${cardsPantalones}
        </div>
    </main>
    `)
    button.btnGuardar(carrito)
}

const abrigosMain = async (content) => {
    const abrigos = await abrigo.getAll()
    const cardsAbrigos = abrigos.map(abrigo => `
        <div class="card">
            <img src="${abrigo.imagen}">
            <div class="info">
                <p>${abrigo.nombre}</p>
                <p>$${abrigo.precio}</p>
                <button class="btnAgregar" data-tipo="abrigo" data-id="${abrigo.id}"->Agregar</button>
            </div>
        </div>
    `).join("")
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Abrigos</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Abrigos</a></li>
        </ul>
        <div class="info-data">
            ${cardsAbrigos}
        </div>
    </main>
    `)
    button.btnGuardar(carrito)
}

const camisetasMain = async (content) => {
    const camisetas = await camiseta.getAll()
    const cardsCamisetas = camisetas.map(camiseta => `
        <div class="card">
            <img src="${camiseta.imagen}">
            <div class="info">
                <p>${camiseta.nombre}</p>
                <p>$${camiseta.precio}</p>
                <button class="btnAgregar" data-tipo="camiseta" data-id="${camiseta.id}">Agregar</button>
            </div>
        </div>
    `).join("")
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Camisetas</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Camisetas</a></li>
        </ul>
        <div class="info-data">
            ${cardsCamisetas}
        </div>
    </main>
    `)
    button.btnGuardar(carrito)
}

const pantalonesMain = async (content) => {
    const pantalones = await pantalon.getAll()
    const cardsPantalones = pantalones.map(pantalon => `
        <div class="card">
            <img src="${pantalon.imagen}">
            <div class="info">
                <p>${pantalon.nombre}</p>
                <p>$${pantalon.precio}</p>
                <button class="btnAgregar" data-tipo="pantalon" data-id="${pantalon.id}">Agregar</button>
            </div>
        </div>
    `).join("")
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Pantalones</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Pantalones</a></li>
        </ul>
        <div class="info-data">
            ${cardsPantalones}
        </div>
    </main>
    `)
    button.btnGuardar(carrito)
}

const carritosMain = async (content) => {
    const abrigos = await abrigo.getAll()
    const camisetas = await camiseta.getAll()
    const pantalones = await pantalon.getAll()
    const carritos = await carrito.getAll()
    let {total, cardsCarritos} = loadCars({ carritos, abrigo: abrigos, camiseta: camisetas, pantalon: pantalones })

    if (carritos.length > 0){
        content.insertAdjacentHTML("beforeend", `
        <main>
            <h1 class="title">Carritos</h1>
            <ul class="breadcrumbs">
                <li><a href="">Home</a></li>
                <li class="divider">/</li>
                <li><a href="#" class="active">Dashboard</a></li>
                <li class="divider">/</li>
                <li><a href="#" class="active">Carritos</a></li>
            </ul>
            <div class="info-data info-data-carritos">
                ${cardsCarritos}
            </div>
            <div class="acciones-carritos">
                <button class="btnEliminarAll">Vaciar Carrito</button>
                <div class="info-total">
                    <div>
                        <p>Total</p>
                        <p class="total">$${total}</p>
                    </div>
                    <button class="buynow">Comprar Ahora</button>
                </div>
            </div>
        </main>
        `)
        button.btnEliminar(carrito)
        button.btnEliminarAll({carrito, carritos})
        button.btnGuardar(carrito)
    } else {
        content.insertAdjacentHTML("beforeend", `
        <main>
            <h1 class="title">Carritos</h1>
            <ul class="breadcrumbs">
                <li><a href="">Home</a></li>
                <li class="divider">/</li>
                <li><a href="#" class="active">Dashboard</a></li>
                <li class="divider">/</li>
                <li><a href="#" class="active">Carritos</a></li>
            </ul>
            <div class="info-data info-data-carritos">
                <p>Tu carrito esta vacio :(</p>
            </div>
        </main>
        `)
    }
    
}

export default {
    todosMain,
    abrigosMain,
    camisetasMain,
    pantalonesMain,
    carritosMain
}