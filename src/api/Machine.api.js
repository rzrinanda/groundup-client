import { api } from "../utils/axios";

export const getMachines = async () => {
  return await api.get("/machine").then((resp) => resp.data);
};
