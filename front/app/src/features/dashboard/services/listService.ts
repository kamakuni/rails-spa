import { AssertionError } from "assert";
import axios from "axios";
import { isAsteriskToken } from "typescript";
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

    const lists = listsResponse.data.map((list: any) => ({ ...list, cards: cardsResponse.flat().filter(card => card.list_id == list.id) }))
    return lists;
}

const removeList = async (list_id: string): Promise<any> => {
    await axios.delete(`http://localhost:3000/api/v1/lists/${list_id}`, { withCredentials: true })
    return { "list_id": list_id }
}

const updateList = async (list_id: string): Promise<any> => {
    const response = await axios.delete(`http://localhost:3000/api/v1/lists/${list_id}`, { withCredentials: true })
    return response
}

const getCards = async (list_id: string): Promise<any> => {
    const response = await axios.get(`http://localhost:3000/api/v1/cards?list_id=${list_id}`, { withCredentials: true })
    console.log(response);
    return response.data;
}

const updateCard = async (card_id: string): Promise<any> => {
    const response = await axios.put(`http://localhost:3000/api/v1/cards`, { withCredentials: true })
    return response.data;
}

const removeCard = async (list_id: string, card_id: string): Promise<any> => {
    await axios.delete(`http://localhost:3000/api/v1/cards/${card_id}`, { withCredentials: true })
    return { "list_id": list_id, "card_id": card_id };
}

const listService = {
    create,
    createCard,
    getAllLists,
    removeList,
    updateList,
    getCards,
    updateCard,
    removeCard,
}

export default listService;