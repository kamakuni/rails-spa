import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/v1/login', {
            email: email,
            password: password
        }, {
            withCredentials: true
        }).then((res) => {
            console.log(res)
            setIsLoggedIn(true)
        }).catch((e) => {
            console.log(e.response.status)
            setIsLoggedIn(false)
        })
    }

    return (
        <div>
            {isLoggedIn
                ? <p>You're already logged in.</p>
                : <form>
                    <label>
                        Email:
                        <input type="text" onChange={handleEmailChange} />
                    </label>
                    <label>
                        Password:
                        <input type="text" onChange={handlePasswordChange} />
                    </label>
                    <button type="submit" onClick={handleClick} >Submit</button>
                </form>
            }
        </div>
    );

}

export default Login;