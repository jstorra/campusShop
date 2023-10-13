import uri from "../config.js";
const config = { headers: { "content-type": "application/json" } };

const getAll = async (endpoint) => {
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.' }
    const res = await (await fetch(`${uri}${endpoint}`)).json()
    const data = res.map((e) => Object.keys(e).length > 0 ? e: { message: 'No hay datos para mostrar.' })
    return data
}

const post = async ({ obj, endpoint } = {}) => {
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.'}
    if (obj.constructor.name.toLowerCase() !== "object" || Object.keys(obj).length === 0) return { status: 400, message: 'Usuario envie datos por favor.' }
    config.method = "POST";
    config.body = JSON.stringify(obj);
    let res = await fetch(`${uri}${endpoint}`, config);
    if (res.status === 201 || res.status === 404) return { status: res.status, message: res.statusText }
}

const putOne = async ({id, obj, endpoint } = {}) => {
    if (!id) return { status: 400, message: 'Envía el Id por favor.'}
    if (typeof id !== 'number') return { status: 400, message: 'El Id tiene un formato inválido.'}
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.' }
    config.method = "PUT";
    config.body = JSON.stringify(obj);
    let res = await fetch(`${uri}${endpoint}/${id}`, config);
    if (res.status === 200 || res.status === 404) return { status: res.status, message: res.statusText }
}

const deleteOne = async ({ id, endpoint } = {}) => {
    if (!id) return { status: 400, message: 'Envía el Id por favor.'}
    if (typeof id !== 'number') return { status: 400, message: 'El Id tiene un formato inválido.'}
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.'}
    config.method = "DELETE";
    let res = await fetch(`${uri}${endpoint}/${id}`, config);
    if (res.status === 200 || res.status === 404) return { status: res.status, message: res.statusText }
}

export default { getAll, post, putOne, deleteOne }