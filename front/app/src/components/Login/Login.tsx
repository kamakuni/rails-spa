import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../../features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../../store'

const Login: React.FC = () => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const dispatch = useAppDispatch()
    const { isLoading, isSuccess, isAuthenticated } = useAppSelector((state) => state.auth)

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        dispatch(login({ email: email, password: password }))

    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(reset())
        }
    }, [isSuccess])

    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div>
            {isAuthenticated
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