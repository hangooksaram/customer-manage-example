import axios from "axios";
const EXP_URL = "http://localhost:5000";

const getAll = async () => {
  const result = await axios.get(`${EXP_URL}/musicdatas`);
  const data = await result.data;
  return data;
};

const getOne = async (id) => {
  const result = await axios.get(`${EXP_URL}/musicdatas/${id}`);
  const data = await result.data;
  console.log(data);
  return data;
};

const create = async (music) => {
  const result = await axios.post(`${EXP_URL}/musicdatas`, music);
  const data = await result.data;
  return data;
};

const remove = async (id) => {
  const result = await axios.delete(`${EXP_URL}/musicdatas/${id}`);
  const data = await result.data;
  return data;
};

const update = async (id, music) => {
  const result = await axios.put(`${EXP_URL}/musicdatas/${id}`, music);
  const data = await result.data;
  return data;
};

export { getAll, create, remove, update, getOne };
