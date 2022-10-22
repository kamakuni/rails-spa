import axios from "axios"
import { LoginUser, NewUser, ResponseLogin, ResponseLogout, ResponseSignup } from "../models/AuthModels"

const register = async (user: NewUser): Promise<ResponseSignup> => {
    const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/signup`, user)
    return response.data
}

const login = async (user: LoginUser): Promise<ResponseLogin> => {
    const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/login`, user, {
        withCredentials: true
    })
    return response.data
}

const isAlive = async (): Promise<ResponseLogin> => {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/login`, {
        withCredentials: true
    })
    return response.data
}

const logout = async (): Promise<ResponseLogout> => {
    const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/v1/logout`, {
        withCredentials: true
    })
    return response.data
}

const authService = {
    register,
    login,
    isAlive,
    logout,
}

export default authService