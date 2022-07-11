import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findAllByTestId } from "@testing-library/react";

interface AsyncState {
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean,
}

/*interface DisplayUser {
    name: string,
    email: string,
}*/

interface AuthState extends AsyncState {
    isAuthenticated: boolean,
}

const initialState: AuthState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    isAuthenticated: false,
}

export const regisert = createAsyncThunk(
    'auth/',
    async (user: any, thunkAPI) => {
        try {

        } catch (error) {
            return thunkAPI.rejectWithValue("Unabled to register!")
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
})