import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../src/Constant/Api";

export const SignUp = createAsyncThunk('signup',async(form)=>{
    try {
        const response = await Api.post('/auth/signup',form)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
})

const initialState = {}

const AuthenticationSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{
        // add
    }
})


export const {} = AuthenticationSlice.actions
export default AuthenticationSlice.reducer