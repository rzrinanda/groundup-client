import { api } from "../utils/axios";

export const getAlerts = () => {
  api
    .get("/machine", (req, res) => {
      console.log("RESULT API", res);
    })
    .then((resp) => resp.data);
};
