export const loadCars = ({carritos, abrigos, camisetas, pantalones}) => {
    let cardsCarritos = []
    let total = 0
    carritos.forEach(carrito => {
        if ("abrigoId" in carrito){
            for (let i of abrigos){
                if (i.id === carrito.abrigoId){
                    cardsCarritos.push(`
                    <div class="card card-carrito">
                        <img src="${i.imagen}">
                        <div>
                            <p>${i.nombre}</p>
                            <p>$${i.precio}</p>
                        </div>
                        <div>
                            <p>Cantidad</p>
                            <p>${carrito.cantidad}</p>
                        </div>
                        <div>
                            <p>Precio</p>
                            <p>${i.precio}</p>
                        </div>
                        <div>
                            <p>Subtotal</p>
                            <p class="precio">$${i.precio * carrito.cantidad}</p>
                        </div>
                        <button class="btnEliminar" data-tipo="abrigo" data-id="${i.id}" data-car="${carrito.id}">Eliminar</button>
                    </div>`)
                    total += i.precio * carrito.cantidad
                    break;
                }
            }
        } else if ("camisetaId" in carrito){
            for (let i of camisetas){
                if (i.id === carrito.camisetaId){
                    cardsCarritos.push(`
                    <div class="card card-carrito">
                        <img src="${i.imagen}">
                        <div>
                            <p>${i.nombre}</p>
                            <p>$${i.precio}</p>
                        </div>
                        <div>
                            <p>Cantidad</p>
                            <p>${carrito.cantidad}</p>
                        </div>
                        <div>
                            <p>Precio</p>
                            <p>${i.precio}</p>
                        </div>
                        <div>
                            <p>Subtotal</p>
                            <p class="precio">$${i.precio * carrito.cantidad}</p>
                        </div>
                        <button class="btnEliminar" data-tipo="camiseta" data-id="${i.id}" data-car="${carrito.id}">Eliminar</button>
                    </div>`)
                    total += i.precio * carrito.cantidad
                    break;
                }
            }
        } else if ("pantalonId" in carrito){
            for (let i of pantalones){
                if (i.id === carrito.pantalonId){
                    cardsCarritos.push(`
                    <div class="card card-carrito">
                        <img src="${i.imagen}">
                        <div>
                            <p>${i.nombre}</p>
                            <p>$${i.precio}</p>
                        </div>
                        <div>
                            <p>Cantidad</p>
                            <p>${carrito.cantidad}</p>
                        </div>
                        <div>
                            <p>Precio</p>
                            <p>${i.precio}</p>
                        </div>
                        <div>
                            <p>Subtotal</p>
                            <p class="precio">$${i.precio * carrito.cantidad}</p>
                        </div>
                        <button class="btnEliminar" data-tipo="pantalon" data-id="${i.id}" data-car="${carrito.id}">Eliminar</button>
                    </div>`)
                    total += i.precio * carrito.cantidad
                    break;
                }
            }
        }
    })
    cardsCarritos = cardsCarritos.join("")
    return {total, cardsCarritos}
}

