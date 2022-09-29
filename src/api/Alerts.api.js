import { api } from "../utils/axios";

export const getAlerts = () => { 
    api.get('/getAlerts', (req, res) => {

    }).then((resp) => resp.data);
}