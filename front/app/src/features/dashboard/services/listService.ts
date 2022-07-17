import axios from "axios";
import NewList from "../models/NewList";

const create = async (list: NewList): Promise<any> => {
    const response = await axios.post('http://localhost:3000/api/v1/lists', list, { withCredentials: true });
    return response.data;
}

const getAllLists = async (): Promise<any> => {
    const response = await axios.get('http://localhost:3000/api/v1/lists', { withCredentials: true })
    return response.data;
}

const listService = {
    create,
    getAllLists,
}

export default listService;