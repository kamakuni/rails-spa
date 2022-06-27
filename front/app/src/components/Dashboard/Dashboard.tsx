import axios from 'axios';
import { createReadStream } from 'fs';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const navigate = useNavigate();
    // TODO
    axios.get('http://localhost:3000/api/v1/login', {
        withCredentials: true
    }).then((res) => {
        console.log(res)
        setIsLoggedIn(true)
    }).catch((e) => {
        console.log(e)
        setIsLoggedIn(false)
    })

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    })

    if (isLoggedIn) {
        return (<h2>Dashboard</h2>);
    } else {
        return (<h2>Access forbidden.</h2>);
    }

}

export default Dashboard;