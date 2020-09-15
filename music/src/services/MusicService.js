import http from '../http-common'

const getAll = () => {
    return http.get('/musicdatas')
}

const create = data => {
    return http.post("/musicdatas", data);
}

export default {
    getAll,
    create
}