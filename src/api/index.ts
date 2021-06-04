import axios from "axios";
export const getInfo = (id: string) => {
  return axios.get(`/agents/${id}`);
};
