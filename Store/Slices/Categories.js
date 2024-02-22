import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../src/Constant/Api";

const initialState = {
    AllCategories: { pending: false, data: [], error: null }
}

export const GetAllCatetgories = createAsyncThunk('getCategories', async () => {
    try {
        const response = await Api.get('/category')
        return response.msg === 'got the categories' ? { data: response } : { error: response }
    } catch (error) {
        return { error: error.response.data }
    }
})

export const CreateCatgeories = createAsyncThunk('createCtg',async(data)=>{
    try {
        const response = await Api.post('/category/create',data)
        console.log(response)
    } catch (error) {
        return {error:error.response.data}
    }
})

const Categories = createSlice({

    name: 'Category',

    initialState,

    reducers: {
        // add
    },

    extraReducers: (builder) => {
        builder
            .addCase(GetAllCatetgories.pending, (state, action) => {
                state.AllCategories.pending = true
            })
            .addCase(GetAllCatetgories.fulfilled, (state, action) => {
                state.AllCategories.pending = false
                if (action.payload.data) {
                    state.AllCategories.data = action.payload.data
                }
                else {
                    state.AllCategories.error = action.payload.error
                }
            })
            .addCase(GetAllCatetgories.rejected, (state, action) => {
                state.AllCategories.pending = false
                state.AllCategories.error = action.payload
            })
    }
})

export default Categories.reducer