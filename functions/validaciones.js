const validacionId = async ({carrito, obj}) => {
    const res = await carrito.getAll()
    let id
    let newobj
    if ("abrigoId" in obj){
        let existe = false
        for (let i of res){
            if (i.abrigoId === obj["abrigoId"]){
                existe = true
                id = i.id
                newobj = i
                break;
            }
        }
        if (existe) {
            newobj.cantidad += 1
            carrito.putOne({id: id, obj: newobj})
        } else {
            carrito.post(obj)
        }
    }
    if ("pantalonId" in obj){
        let existe = false
        for (let i of res){
            if (i.pantalonId === obj["pantalonId"]){
                existe = true
                id = i.id
                newobj = i
                break;
            }
        }
        if (existe) {
            newobj.cantidad += 1
            carrito.putOne({id: id, obj: newobj})
        } else {
            carrito.post(obj)
        }
    }
    if ("camisetaId" in obj){
        let existe = false
        for (let i of res){
            if (i.camisetaId === obj["camisetaId"]){
                existe = true
                id = i.id
                newobj = i
                break;
            }
        }
        if (existe) {
            newobj.cantidad += 1
            carrito.putOne({id: id, obj: newobj})
        } else {
            carrito.post(obj)
        }
    }
}

export default {
    validacionId
}