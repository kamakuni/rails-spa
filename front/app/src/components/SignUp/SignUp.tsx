import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { register, reset } from '../../features/auth/authSlice'

const SignUp: React.FC = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const dispatch = useAppDispatch()
    const { isLoading, isSuccess, isAuthenticated } = useAppSelector((state) => state.auth)

    useEffect(() => {
        if (isSuccess) {
            setIsSubmitted(true)
            dispatch(reset())
        }
    }, [isSuccess])

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(register({ email: email, password: password }))
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>);
    }

    if (isSubmitted) {
        return (
            <div>
                <p>Your registration is completed.</p>
            </div>
        );
    }

    return (
        <div>
            <form>
                <div>
                    <label>
                        Email:
                        <input type="text" onChange={handleEmailChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="text" onChange={handlePasswordChange} />
                    </label>
                </div>
                <div>
                    <button type="submit" onClick={handleClick} >Submit</button>
                </div>
            </form >
        </div>
    );
}

export default SignUp;