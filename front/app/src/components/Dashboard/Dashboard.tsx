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
    body: string
    title: string
    onBodyChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
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
                <input onChange={props.onTitleChange}></input>
                <input onChange={props.onBodyChange}></input>
            </div>
        </div>
    )
}

function Dashboard() {

    const [title, setTitle] = useState("")
    const [lists, setLists] = useState<Array<List>>([])
    const [card, setCard] = useState<Card>({ title: "", body: "", })

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

    const handleCardTitleChange = (value: string, i: number, j: number) => {
        const copyed = [...lists]
        copyed[i].cards[j] = { title: value, body: copyed[i].cards[j].body }
        setLists(copyed)
    }

    const handleCardBodyChange = (value: string, i: number, j: number) => {
        const copyed = [...lists]
        copyed[i].cards[j] = { title: copyed[i].cards[j].title, body: value }
        setLists(copyed)
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
                                        <Card
                                            onBodyChange={(e) => handleCardBodyChange(e.target.value, i, j)}
                                            onTitleChange={(e) => handleCardTitleChange(e.target.value, i, j)}
                                            body={card.body}
                                            title={card.title} />
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