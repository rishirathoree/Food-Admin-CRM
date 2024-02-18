import { configureStore } from "@reduxjs/toolkit";
import { AppStatesSlice, AuthenticationSlice } from "./Slices/Index";
const store = configureStore({
    reducer:{
        Auth:AuthenticationSlice,
        App : AppStatesSlice
        // add
    }
})
export default store;