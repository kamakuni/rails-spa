import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { flattenDiagnosticMessageText } from "typescript"
import AsyncState from "../models/AsyncState"
import List from "./models/List"
import NewList from "./models/NewList"
import listService from "./services/listService"

interface DashboardState extends AsyncState {
    lists: List[]
}

const initialState: DashboardState = {
    lists: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
}

export const createList = createAsyncThunk(
    'dashboard/createList',
    async (list: NewList, thunkAPI) => {
        try {
            return await listService.create(list);
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createList.fulfilled, (state, action) => {
                const copyed = [...state.lists]
                copyed.push(action.payload)
                state.lists = copyed
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(createList.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })

    }
})

export default dashboardSlice.reducer;