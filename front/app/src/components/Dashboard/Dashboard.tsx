import axios from 'axios';
import { createReadStream } from 'fs';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface List {
    title: string
}

function Dashboard() {

    const [title, setTitle] = useState("")
    const [lists, setLists] = useState<Array<List>>([])

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleAddListClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const copyed = [...lists]
        copyed.push({ title: title })
        setLists(copyed)
        console.log(title)
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
                        return <li>
                            <label>{list.title}</label>
                            <div>
                                <button>Add Cards</button>
                                <button>Remove List</button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>);
}

export default Dashboard;