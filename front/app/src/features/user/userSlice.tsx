import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    name: string
    isAuthenticated: boolean
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: { name: "", isAuthenticated: false }
    },
    reducers: {
        login: (state: UserState) => {
            state.isAuthenticated = true
        },
        logout: (state: UserState) => {
            state.isAuthenticated = false
        }
    }
})