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

    const handleCardTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("handleCardTitleChange")
        //setTitle(e.target.value)
    }

    const handleCardBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("handleCardBodyChange")
        //setTitle(e.target.value)
    }

    return (
        <li>
            <div>
                <div>
                    <label>title</label>
                    <input onChange={handleCardTitleChange}></input>
                </div>
                <div>
                    <label>body</label>
                    <input onChange={handleCardBodyChange}></input>
                </div>
            </div>
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
                                <button>Add Cards</button>
                                <button onClick={() => removeList(i)}>Remove List</button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>);
}

export default Dashboard;