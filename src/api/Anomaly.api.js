import { api } from "../utils/axios";

export const getAnomalyByMachine = async (machineId) => {
  return await api
    .get("/anomaly/machine", { params: { m: machineId } })
    .then((resp) => resp.data);
};
