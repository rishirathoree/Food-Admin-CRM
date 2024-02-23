import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../src/Constant/Api";

const initialState = {
    AllCategories: { pending: false, data: [], error: null },
    CreateCategory: { pending: false, data: null, error: null }
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
        return response.msg === 'successfully created categories' ? {data:response} : {error:response}
    } catch (error) {
        return {error:error.response.data}
    }
})

const Categories = createSlice({

    name: 'Category',

    initialState,

    reducers: {
        // add
        ClearCreateCategoryContext : (state,action) => {
            state.CreateCategory.pending = false
            state.CreateCategory.error = null
            state.CreateCategory.data = null
        },
        AddCategoriesToContext : (state,action) => {
            state.AllCategories.data = [...state.AllCategories.data,action.payload]
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(GetAllCatetgories.pending, (state, action) => {
                state.AllCategories.pending = true
            })
            .addCase(GetAllCatetgories.fulfilled, (state, action) => {
                state.AllCategories.pending = false
                if (action.payload.data) {
                    state.AllCategories.data = action.payload.data.categories
                }
                else {
                    state.AllCategories.error = action.payload.error
                }
            })
            .addCase(GetAllCatetgories.rejected, (state, action) => {
                state.AllCategories.pending = false
                state.AllCategories.error = action.payload
            })

            .addCase(CreateCatgeories.pending, (state, action) => {
                state.CreateCategory.pending = true
            })
            .addCase(CreateCatgeories.fulfilled, (state, action) => {
                state.CreateCategory.pending = false
                if (action.payload.data) {
                    state.CreateCategory.data = action.payload.data.CreatedCategory
                }
                else {
                    state.CreateCategory.error = action.payload.error
                }
            })
            .addCase(CreateCatgeories.rejected, (state, action) => {
                state.CreateCategory.pending = false
                state.CreateCategory.data = false
                state.CreateCategory.error = action.payload.error
            })
    }
})
export const {ClearCreateCategoryContext,AddCategoriesToContext} = Categories.actions
export default Categories.reducer