import validacion from "../functions/validaciones.js"

const btnGuardar = (carrito) => {
    const botones = document.querySelectorAll(".btnAgregar")
    botones.forEach(btn => {
        if (btn.dataset.tipo === "abrigo"){
            btn.addEventListener("click", () => {
                const obj = {
                    abrigoId: Number(btn.dataset.id),
                    cantidad: 1
                }
                validacion.validacionId({ carrito, obj })
                alert("!! El abrigo se ha añadido al carrito !!")
            })
        } else if (btn.dataset.tipo === "camiseta"){
            btn.addEventListener("click", () => {
                const obj = {
                    camisetaId: Number(btn.dataset.id),
                    cantidad: 1
                }
                validacion.validacionId({ carrito, obj })
                alert("!! La camiseta se ha añadido al carrito !!")
            })
        } else if (btn.dataset.tipo === "pantalon"){
            btn.addEventListener("click", () => {
                const obj = {
                    pantalonId: Number(btn.dataset.id),
                    cantidad: 1
                }
                validacion.validacionId({ carrito, obj })
                alert("!! El pantalon se ha añadido al carrito !!")
            })
        }
    })
}

const btnEliminar = (carrito) => {
    const botones = document.querySelectorAll(".btnEliminar")
    botones.forEach(btn => {
        if (btn.dataset.tipo === "abrigo"){
            btn.addEventListener("click", () => {
                carrito.deleteOne(Number(btn.dataset.car))
                alert("!! Se ha eliminado el abrigo !!")
            })
        } else if (btn.dataset.tipo === "camiseta"){
            btn.addEventListener("click", () => {
                carrito.deleteOne(Number(btn.dataset.car))
                alert("!! Se ha eliminado la camiseta !!")
            })
        } else if (btn.dataset.tipo === "pantalon"){
            btn.addEventListener("click", () => {
                carrito.deleteOne(Number(btn.dataset.car))
                alert("!! Se ha eliminado el pantalon !!")
            })
        }
    })
}

const btnEliminarAll = ({ carrito, carritos }) => {
    const boton = document.querySelector(".btnEliminarAll")
    boton.addEventListener("click", () => {
        carritos.forEach(car => {
            carrito.deleteOne(car.id)
        })
        alert("!! Se ha vaciado el carrito !!")
    })
}

export default {
    btnGuardar,
    btnEliminar,
    btnEliminarAll
}