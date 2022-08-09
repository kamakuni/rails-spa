import { stringify } from 'querystring'
import React, { useEffect, useState } from 'react'
import { createList, getAllLists, removeList, createCard, reset } from '../../features/dashboard/dashboardSlice'
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
                <div>
                    <label>title:</label>
                    {props.title}
                </div>
                <div>
                    <label>body:</label>
                    {props.body}
                </div>
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
        const copyed = [...lists]
        //    copyed[i].cards = copyed[i].cards.filter((c, index) => { return j != index })
        //    setLists(copyed)
    }

    const handleAddCards = (i: number) => {
        dispatch(createCard({ title: card.title, body: card.body, list_id: lists[i].id }))
    }

    const handleCardTitleChange = (value: string) => {
        const copyed = { ...card }
        copyed.title = value
        setCard(copyed)
        console.log(copyed)
    }

    const handleCardBodyChange = (value: string) => {
        const copyed = { ...card }
        copyed.body = value
        setCard(copyed)
        console.log(copyed)
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
                            <label>{list.title}</label>
                            <div>
                                <label>title:</label>
                                <input onChange={(e) => handleCardTitleChange(e.target.value)}></input>
                            </div>
                            <div>
                                <label>body:</label>
                                <input onChange={(e) => handleCardBodyChange(e.target.value)}></input>
                            </div>
                            {list.cards.map((card, j) => {
                                return (
                                    <div>
                                        <Card
                                            body={card.body}
                                            title={card.title} />
                                        <button onClick={() => handleSaveCards(i, j)} >Save Cards</button>
                                        <button onClick={() => handleRemoveCards(i, j)} >Delete Cards</button>
                                    </div>
                                )
                            })}
                            <div>
                                <button onClick={() => handleAddCards(i)} >Add Cards</button>
                                <button onClick={() => handleRemoveList(i)}>Remove List</button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>);
}

export default Dashboard;