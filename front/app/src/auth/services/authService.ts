//const register = async ():
const register = async (newUser: any): Promise<any> => {
    const response = await axios.post(``)
}

const authService = {
    register,
    // login,
    // logout,
}

export default authService