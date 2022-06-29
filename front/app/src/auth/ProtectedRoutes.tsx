import axios from 'axios'
import React from 'react'
import { Outlet } from 'react-router'
import Login from '../components/Login/Login'

interface User {
    loggedIn: boolean
}

const useAuth = (): User => {
    let loggedIn = false
    axios.get('http://localhost:3000/api/v1/login', { withCredentials: true })
        .then((res) => {
            loggedIn = true
        })
        .catch((e) => {
            loggedIn = false
        })
    return { loggedIn: loggedIn }
}

const ProtectedRoutes = () => {
    const auth = useAuth()
    return auth && auth.loggedIn ? <Outlet /> : <Login />
}

export default ProtectedRoutes;