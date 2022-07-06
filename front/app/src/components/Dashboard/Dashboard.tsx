import axios from 'axios';
import { createReadStream } from 'fs';
import React, { useEffect, useState } from 'react'

interface Card {
    title: string
    body: string
}

interface List {
    title: string
    cards: Card[]
}

interface CardProps {
    title: string
    body: string
}

function Card(props: CardProps) {

    return (
        <li>
            <div>{props.title}</div>
            <div>{props.body}</div>
        </li>
    )
}

function Dashboard() {

    const [title, setTitle] = useState("")
    const [lists, setLists] = useState<Array<List>>([])

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleAddListClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const copyed = [...lists]
        copyed.push({ title: title, cards: [] })
        setLists(copyed)
    }

    const removeList = (i: number) => {
        const filtered = lists.filter((l, index) => { return i != index })
        setLists(filtered)
    }

    const addCards = (i: number) => {
        const copyed = [...lists]
        copyed[i].cards.push({ "title": "title", "body": "body" })
        setLists(copyed)
    }

    const cardTitleChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(i)
        //setTitle(e.target.value)
    }

    const cardBodyChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(i)
        //setTitle(e.target.value)
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
                            {list.cards.map((card, i) => {
                                return <Card title={card.title} body={card.body} />
                            })}
                            <div>
                                <div>
                                    <div>
                                        <label>title</label>
                                        <input onChange={(e) => { cardTitleChange(i, e) }}></input>
                                    </div>
                                    <div>
                                        <label>body</label>
                                        <input onChange={(e) => { cardBodyChange(i, e) }}></input>
                                    </div>
                                </div>
                                <button onClick={() => addCards(i)} >Add Cards</button>
                                <button onClick={() => removeList(i)}>Remove List</button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>);
}

export default Dashboard;