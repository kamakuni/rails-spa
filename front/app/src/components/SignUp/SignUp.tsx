import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { register, reset } from '../../features/auth/authSlice'
import Message from '../Message/Message'
import styles from '../../styles/components/Login.module.scss'

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
                <Message body="Your registration is completed." level="info"></Message>
            </div>
        );
    }

    return (
        <div>
            <form>
                <div>
                    <div>
                        <label className={styles.label} >Email</label>
                    </div>
                    <div>
                        <input type="text" placeholder="email" onChange={handleEmailChange} />
                    </div>
                </div>
                <div>
                    <div>
                        <label className={styles.label}>Password</label>
                    </div>
                    <div>
                        <input type="text" placeholder="password" onChange={handlePasswordChange} />
                    </div>
                </div>
                <div>
                    <button className={styles.button} type="submit" onClick={handleClick} >Submit</button>
                </div>
            </form >
        </div>
    );
}

export default SignUp;