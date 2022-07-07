import axios from 'axios';
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
    const [lists, setLists] = useState<Array<List>>([])
    const [card, setCard] = useState<CardProps>({ title: "", body: "" })

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleAddListClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const copyed = [...lists]
        copyed.push({ title: title, cards: [] })
        setLists(copyed)
    }

    const handleRemoveList = (i: number) => {
        const filtered = lists.filter((l, index) => { return i != index })
        setLists(filtered)
    }

    const handleUpdateCards = (i: number, j: number) => {
        const copyed = [...lists]
        copyed[i].cards[j].title = card.title
        copyed[i].cards[j].body = card.body
        setLists(copyed)
    }

    const handleRemoveCards = (i: number, j: number) => {
        const copyed = [...lists]
        copyed[i].cards = copyed[i].cards.filter((c, index) => { return j != index })
        setLists(copyed)
    }

    const handleAddCards = (i: number) => {
        const copyed = [...lists]
        copyed[i].cards.push({ "title": "", "body": "" })
        setLists(copyed)
    }

    const handleCardTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCard({ title: e.target.value, body: card.body })
    }

    const handleCardBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        //setTitle(e.target.value)
        setCard({ title: card.title, body: e.target.value })
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
                            {list.cards.map((card, j) => {
                                return (
                                    <div>
                                        <Card title={card.title} body={card.body} />
                                        <input onChange={handleCardTitleChange}></input>
                                        <input onChange={handleCardBodyChange}></input>
                                        <button onClick={() => handleUpdateCards(i, j)} >Update Cards</button>
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