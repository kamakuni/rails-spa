import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const navigate = useNavigate();

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
        }).then((res) => {
            console.log(res)
            navigate("/dashboard")
        }).catch((e) => {
            console.log(e.response.status)
            // TODO: error handling
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