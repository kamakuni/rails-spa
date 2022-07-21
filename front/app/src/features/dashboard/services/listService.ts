import axios from "axios";
import NewCard from "../models/NewCard";
import NewList from "../models/NewList";

const create = async (list: NewList): Promise<any> => {
    const response = await axios.post('http://localhost:3000/api/v1/lists', list, { withCredentials: true });
    return response.data;
}

const createCard = async (card: NewCard): Promise<any> => {
    const response = await axios.post('http://localhost:3000/api/v1/cards', card, { withCredentials: true });
    return response.data;
}

const getAllLists = async (): Promise<any> => {
    const listsResponse = await axios.get('http://localhost:3000/api/v1/lists', { withCredentials: true })
    const cardsResponse = await Promise.all(listsResponse.data.map(async (list: any) => {
        return getCards(list.id)
    }))
    console.log(cardsResponse);
    return listsResponse.data;
}

const getCards = async (list_id: string): Promise<any> => {
    const response = await axios.get(`http://localhost:3000/api/v1/cards?list_id=${list_id}`, { withCredentials: true })
    console.log(response);
    return response.data;
}

const listService = {
    create,
    getAllLists,
    getCards,
}

export default listService;