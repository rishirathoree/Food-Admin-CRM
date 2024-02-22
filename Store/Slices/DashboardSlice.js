import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../src/Constant/Api";

const initialState = {
    GetDashboardValues:{pending:false,data:null,error:null}
}

export const GetDashboard = createAsyncThunk('/dashboarddata',async()=>{
    const token = localStorage.getItem('token')
    try {
        const response = await Api.get('/dashboard',null,token)
        return response.msg === 'Successfully got the data' ? {data:response.dashboardData} : {error:response}
    } catch (error) {
        throw error
    }
})

const DashboardSlice=createSlice({
    name:'Dashboard',
    initialState,
    reducers:{
        // add reducers
    },
    extraReducers:(builder)=>{
        builder
        .addCase(GetDashboard.pending,(state,action)=>{
            state.GetDashboardValues.pending = true
        })
        .addCase(GetDashboard.fulfilled,(state,action)=>{
            state.GetDashboardValues.pending = false
            if(action.payload.data){
                state.GetDashboardValues.data = action.payload.data
            }
            else{
                state.GetDashboardValues.error = action.payload.error
            }
        })
        .addCase(GetDashboard.rejected,(state,action)=>{
            state.GetDashboardValues.pending = false
            state.GetDashboardValues.error = action.payload
        })
    }
})

export default DashboardSlice.reducer