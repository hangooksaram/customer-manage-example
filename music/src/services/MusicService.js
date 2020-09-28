import http from "../http-common";

const getAll = () => {
  return http.get("/musicdatas");
};

const getOne = (id) => {
  return http.get(`/musicdatas/${id}`);
};

const create = (data) => {
  return http.post("/musicdatas", data);
};

const remove = (id) => {
  return http.delete(`/musicdatas/${id}`);
};

const update = (id, data) => {
  return http.put(`/musicdatas/${id}`, data);
};

export default {
  getAll,
  create,
  remove,
  update,
  getOne,
};
