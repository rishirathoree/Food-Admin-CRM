import { configureStore } from "@reduxjs/toolkit";
import { AppStatesSlice, AuthenticationSlice, CategoriesSlice, DashboardSlice } from "./Slices/Index";
const store = configureStore({
    reducer:{
        Auth:AuthenticationSlice,
        App : AppStatesSlice,
        Dashboard:DashboardSlice,
        Categories : CategoriesSlice
    }
})
export default store;