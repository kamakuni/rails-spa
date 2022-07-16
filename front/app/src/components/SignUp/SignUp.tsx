import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { register, reset } from '../../features/auth/authSlice'

const SignUp: React.FC = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useAppDispatch()
    const { isLoading, isSuccess, isAuthenticated } = useAppSelector((state) => state.auth)

    useEffect(() => {
        if (isSuccess) {
            dispatch(reset())
        }
    }, [isSuccess])

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(register({ email: email, password: password }))
        console.log(email);
        console.log(password);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>);
    }

    return (
        <div>
            {isAuthenticated
                ? <p>Your registration is completed.</p>
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
                </form >
            }
        </div>
    );
}

export default SignUp;