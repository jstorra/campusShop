export const loadCars = ({carritos, abrigo, camiseta, pantalon}) => {
    let cardsCarritos = []
    let total = 0
    let productos = {
        abrigo,
        camiseta,
        pantalon
    }
    carritos.forEach(carrito => {
        for (let key in carrito){
            let encontrado_key;
            if (key.includes("Id")){
                encontrado_key = true;
                for (let i of productos[key.split("Id")[0]]){
                    let encontrado_producto;
                    if (i.id === carrito[key]){
                        encontrado_producto = true
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
                            <button class="btnEliminar" data-tipo="${key.split("Id")[0]}" data-id="${i.id}" data-car="${carrito.id}">Eliminar</button>
                        </div>`)
                        total += i.precio * carrito.cantidad
                        break;
                    }
                    if (encontrado_producto) break;
                }
            }
            if (encontrado_key) break;
        }
    })
    cardsCarritos = cardsCarritos.join("")
    return {total, cardsCarritos}
}

