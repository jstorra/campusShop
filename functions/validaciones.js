const validacionId = async ({ carrito, obj }) => {
    const res = await carrito.getAll();
    let id;
    let newobj;
    let existe;
    for (let key in obj) {
        for (let i of res) {
            if (key.includes("Id") && obj[key] === i[key]) {
                existe = true;
                id = i.id;
                newobj = i;
                break;
            }
        }
        if (existe) break;
    }
    if (existe) {
        newobj.cantidad += 1;
        carrito.putOne({ id, obj: newobj });
    } else {
        carrito.post(obj);
    }
};

export default {
    validacionId,
};
