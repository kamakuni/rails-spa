import axios from 'axios'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router-dom'
import Login from '../components/Login/Login'

// https://v5.reactrouter.com/web/example/auth-workflow

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

//const ProtectedRoutes = () => {
//    const auth = useAuth()
//    return auth && auth.loggedIn ? <Outlet /> : <Navigate to="/login" replace />
//}

const ProtectedRoutes = () => {
    const [auth, setAuth] = React.useState(false);
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/login', { withCredentials: true });
                if (!auth && response.status == 200) {
                    setAuth(true)
                }
                console.log(response)
            } catch (e) {
                setAuth(false)
                console.log(e);
            }
        }
        fetch();
    });
    return auth ? <Outlet /> : <div>Users is unauthorized.</div>
}

export default ProtectedRoutes;