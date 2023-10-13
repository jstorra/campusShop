import s from "./solicitudes.js"
const crud = (endpoint) => ({
    getAll: async () => await s.getAll(endpoint),
    post: async (obj = {}) => await s.post({obj, endpoint}),
    putOne: async ({id, obj = {}}) => await s.putOne({ id, obj, endpoint }),
    deleteOne: async (id) => await s.deleteOne({ id, endpoint }),
});
export default crud;