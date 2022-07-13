import axios from "axios"
import LoginUser from "../models/LoginUser"
import NewUser from "../models/NewUser"

//const register = async ():
const register = async (user: NewUser): Promise<any> => {
    const response = await axios.post('http://localhost:3000/api/v1/signup', user)
    return response.data
}

const login = async (user: LoginUser): Promise<any> => {
    const response = await axios.post('http://localhost:3000/api/v1/login', user, {
        withCredentials: true
    })
    return response.data
}

const logout = async (): Promise<any> => {
    const response = await axios.delete('http://localhost:3000/api/v1/logout', {
        withCredentials: true
    })
    return response.data
}

const authService = {
    register,
    login,
    logout,
}

export default authService