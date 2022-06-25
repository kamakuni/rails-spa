import React, { FC, useState } from 'react'

interface SignUpProps {
    email: string;
    password: string;
}

const SignUp: FC<SignUpProps> = props => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(e);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Email")
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Email")
    }

    return (
        <form>
            <label>
                Email:
                <input type="text" onChange={handleEmailChange} />
            </label>
            <label>
                Password:
                <input type="text" onChange={handlePasswordChange} />
            </label>
            <button type="submit" value="Submit" onClick={handleClick} />
        </form>
    );
}

export default SignUp;