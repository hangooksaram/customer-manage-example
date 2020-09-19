import http from '../http-common'

const getAll = () => {
    return http.get('/musicdatas')
}

const create = (data) => {
    return http.post("/musicdatas", data);
}

const remove = (id) => {
    return http.delete(`/musicdatas/${id}`);
}

export default {
    getAll,
    create,
    remove
}