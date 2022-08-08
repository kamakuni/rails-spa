import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AsyncState from "../models/AsyncState"
import List from "./models/List"
import NewCard from "./models/NewCard"
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

export const getAllLists = createAsyncThunk(
    'dashboard/getAlllists',
    async (_, thunkAPI) => {
        try {
            return await listService.getAllLists();
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)

export const removeList = createAsyncThunk(
    'dashboard/removeList',
    async (list_id: string, thunkAPI) => {
        try {
            return await listService.removeList(list_id)
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)

export const getCards = createAsyncThunk(
    'dashboard/getCards',
    async (list_id: string, thunkAPI) => {
        try {
            return await listService.getCards(list_id)
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)
/*
export const createCard = createAsyncThunk(
    'dashboard/createCard',
    async (card: NewCard, thunkAPI) => {
        try {
            return await listService.createCard(card);
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)
*/
export const removeCard = createAsyncThunk(
    'dashboard/removeCard',
    async (card_id: string, thunkAPI) => {
        try {
            return await listService.removeCard(card_id)
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        reset: (state: DashboardState) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
        },
        createCard: (state: any, action: any) => {
            const copyed = [...state.lists]
            const index = state.lists.findIndex((list: any) => list.id === 14)
            copyed[index].cards.push(action.payload)
            state.lists = copyed
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createList.fulfilled, (state, action) => {
                const copyed = [...state.lists]
                copyed.push({ id: action.payload.id, title: action.payload.title, cards: [] })
                state.lists = copyed
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(createList.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
        builder
            .addCase(getAllLists.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllLists.fulfilled, (state, action) => {
                state.lists = action.payload.map((list: any) => { return { id: list.id, title: list.title, cards: [] } })
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(getAllLists.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
        builder
            .addCase(removeList.pending, (state) => {
                state.isLoading = true
            })
            .addCase(removeList.fulfilled, (state, action) => {
                const filtered = state.lists.filter((list) => { return list.id !== action.payload.list_id })
                state.lists = filtered
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(removeList.rejected, (state) => {
                state.isError = true
                state.isLoading = false
            })
        builder
            .addCase(getCards.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCards.fulfilled, (state, action) => {
                console.log(action.payload);
                //state.lists = action.payload.map((card: any) => { return { id: ca.id, title: list.title, cards: [] } })
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(getCards.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
        /*
    builder
        .addCase(createCard.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createCard.fulfilled, (state, action) => {
            console.log(state.lists)
            state.isLoading = false;
            state.isSuccess = true;
        })
        .addCase(createCard.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        })
        */
        builder
            .addCase(removeCard.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(removeCard.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(removeCard.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export const { reset, createCard } = dashboardSlice.actions
export default dashboardSlice.reducer;