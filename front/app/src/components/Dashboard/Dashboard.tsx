import React, { useEffect, useState } from 'react'
import { createList, getAllLists, removeList, createCard, removeCard, reset } from '../../features/dashboard/dashboardSlice'
import { List } from '../../features/dashboard/models/DashboardModels'
import { useAppDispatch, useAppSelector } from '../../store'

interface Card {
    title: string
    body: string
}

interface CardProps {
    body: string
    title: string
}

function Card(props: CardProps) {

    return (
        <div>
            <div>
                <label>title:</label>
                {props.title}
            </div>
            <div>
                <label>body:</label>
                {props.body}
            </div>
        </div>
    )
}

interface ListItemPros {
    list: List,
}

function ListItem(props: ListItemPros) {

    const [card, setCard] = useState({ title: "", body: "" })

    const dispatch = useAppDispatch();

    const handleCardTitleChange = (value: string) => {
        const copyed = { ...card }
        copyed.title = value
        setCard(copyed)
    }

    const handleCardBodyChange = (value: string) => {
        const copyed = { ...card }
        copyed.body = value
        setCard(copyed)
    }

    const handleAddCards = () => {
        dispatch(createCard({ title: card.title, body: card.body, list_id: props.list.id }))
        setCard({ title: "", body: "" })
    }

    const handleRemoveCards = (index: number) => {
        dispatch(removeCard({ list_id: props.list.id, card_id: props.list.cards[index].id }))
    }

    const handleRemoveList = () => {
        dispatch(removeList(props.list.id))
    }

    return (
        <div>
            <label>{props.list.title}</label>
            <div>
                <label>title:</label>
                <input onChange={(e) => handleCardTitleChange(e.target.value)}></input>
            </div>
            <div>
                <label>body:</label>
                <input onChange={(e) => handleCardBodyChange(e.target.value)}></input>
            </div>
            <div>
                <button onClick={handleAddCards} >Add Cards</button>
            </div>
            <div>
                <ul>
                    {props.list.cards.map((card, index) => {
                        return (
                            <div>
                                <li key={index}>
                                    <Card
                                        body={card.body}
                                        title={card.title} />
                                </li>
                                <button onClick={() => handleRemoveCards(index)} >Remove Cards</button>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <div>
                <button onClick={handleRemoveList}>Remove List</button>
            </div>
        </div>
    )
}

function Dashboard() {

    const [title, setTitle] = useState("")
    const [card, setCard] = useState({ title: "", body: "" })
    //    const [lists, setLists] = useState<Array<List>>([])

    const { isLoading, isSuccess, lists } = useAppSelector((state) => state.dashboard)
    const dispatch = useAppDispatch();

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleAddListClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(createList({ title: title }))
        setTitle("")
    }


    const handleRemoveList = (i: number) => {
        const filtered = lists.filter((l, index) => { return i != index })
        dispatch(removeList(lists[i].id))
    }

    const handleSaveCards = (i: number, j: number) => {
        const copyed = [...lists]
        //    copyed[i].cards = copyed[i].cards.filter((c, index) => { return j != index })
        //    setLists(copyed)
    }

    const handleRemoveCards = (i: number, j: number) => {
        dispatch(removeCard({ list_id: lists[i].id, card_id: lists[i].cards[j].id }))
    }

    const handleAddCards = (i: number) => {
        dispatch(createCard({ title: card.title, body: card.body, list_id: lists[i].id }))
        setCard({ title: "", body: "" })
    }

    const handleCardTitleChange = (value: string) => {
        const copyed = { ...card }
        copyed.title = value
        setCard(copyed)
    }

    const handleCardBodyChange = (value: string) => {
        const copyed = { ...card }
        copyed.body = value
        setCard(copyed)
    }

    useEffect(() => {
        dispatch(getAllLists())
        if (isSuccess) {
            dispatch(reset())
        }
    }, [])

    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <div>
                <div>
                    <label>title</label>
                    <input onChange={handleTitleChange}></input>
                </div>
                <button onClick={handleAddListClick}>Add Lists</button>
            </div>
            <h3>List</h3>
            <div>
                <ul>
                    {lists.map((list, i) => {
                        return <li key={i}>
                            <ListItem list={list} ></ListItem>
                        </li>
                    })}
                </ul>
            </div>
            <div>
                <ul>
                    {lists.map((list, i) => {
                        return <li key={i}>
                            <label>{list.title}</label>
                            <div>
                                <label>title:</label>
                                <input onChange={(e) => handleCardTitleChange(e.target.value)}></input>
                            </div>
                            <div>
                                <label>body:</label>
                                <input onChange={(e) => handleCardBodyChange(e.target.value)}></input>
                            </div>
                            <div>
                                <button onClick={() => handleAddCards(i)} >Add Cards</button>
                            </div>
                            <div>
                                <ul>
                                    {list.cards.map((card, j) => {
                                        return (
                                            <li key={j}>
                                                <Card
                                                    body={card.body}
                                                    title={card.title} />
                                                <button onClick={() => handleRemoveCards(i, j)} >Delete Cards</button>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div>
                                <button onClick={() => handleRemoveList(i)}>Remove List</button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>);
}

export default Dashboard;