import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findAllByTestId } from "@testing-library/react";
import NewUser from "./models/NewUser";
import authService from "./services/authService";

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

export const register = createAsyncThunk(
    'auth/register',
    async (user: NewUser, thunkAPI) => {
        try {
            return await authService.register(user);
        } catch (error) {
            return thunkAPI.rejectWithValue("Unabled to register!")
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state: AuthState) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(register.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export default authSlice.reducer;