import axios from "axios"
import NewUser from "../models/NewUser"

//const register = async ():
const register = async (newUser: NewUser): Promise<any> => {
    const response = await axios.post('http://localhost:3000/api/v1/signup', newUser)
    return response.data
}

const authService = {
    register,
    // login,
    // logout,
}

export default authService