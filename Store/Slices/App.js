import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    ActiveModal:''
}
const AppStatesSlice = createSlice({
    name:'App',
    initialState,
    reducers:{
    //add
    ActiveModalToggle : (state,action)=>{
        state.ActiveModal = action.payload
    }
    },
})

export const {ActiveModalToggle} = AppStatesSlice.actions
export default AppStatesSlice.reducer