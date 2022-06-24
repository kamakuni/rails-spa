import React, { FC } from 'react'

/*interface SignUpProps {
    email: string;
    password: string;
}*/

const SignUp: FC = props => {
    //const { email, password } = props;
    return (
        <form>
            <label>
                Email:
                <input type="text" />
            </label>
            <label>
                Password:
                <input type="text" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default SignUp;