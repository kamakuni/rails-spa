import axios from "axios";
import NewList from "../models/NewList";

const create = async (list: NewList): Promise<any> => {
    const response = await axios.post('http://localhost:3000/api/v1/list', list, { withCredentials: true });
    return response.data;
}

const listService = {
    create,
}

export default listService;