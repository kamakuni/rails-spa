import axios from 'axios';
import { createReadStream } from 'fs';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { convertCompilerOptionsFromJson } from 'typescript';

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