import React, { useState } from 'react'
import axios from 'axios'

const SignUp: React.FC = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSignedUp, setIsSignedUp] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/v1/signup', { email: email, password: password })
            .then((res) => {
                setIsSignedUp(true)
                console.log(res)
            })
            .catch((e) => {
                console.log(e.response.status)

                // TODO: error handling
                // if (e.response.status == 400)
            })
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

    return (
        <div>
            {isSignedUp
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