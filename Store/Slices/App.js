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
        if(action.payload === state.ActiveModal){
            state.ActiveModal = ''
        }
        else{
            state.ActiveModal = action.payload
        }
    }
    },
})

export const {ActiveModalToggle} = AppStatesSlice.actions
export default AppStatesSlice.reducer