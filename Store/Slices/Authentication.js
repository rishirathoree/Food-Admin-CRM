import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../src/Constant/Api";

export const SignUp = createAsyncThunk('signup', async (form) => {
    try {
        const response = await Api.post('/auth/signup', form)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
})

export const login = createAsyncThunk('login', async (form) => {
    try {
        const response = await Api.post('/auth/login', form)
        console.log(response)
        return response.msg === 'Successfully logged in' ? { data: response } : { error: response }
    } catch (error) {
        return {error:error.response.data}
    }
})


const initialState = {
    Auth: { pending: false, data: JSON.parse(localStorage.getItem('user')) || null , error: null }
}

const AuthenticationSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        // add
        ClearAuthContext : (state,action) => {
            state.Auth.pending = false
            state.Auth.error = null
            state.Auth.data = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.Auth.pending = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.Auth.pending = false
                console.log(action.payload)
                if (action.payload.data) {
                    state.Auth.data = action.payload.data
                    localStorage.setItem('user',JSON.stringify(action.payload.data.user))
                    localStorage.setItem('token',action.payload.data.token)
                }
                else {
                    state.Auth.error = action.payload.error
                }
            })
            .addCase(login.rejected, (state, action) => {
                state.Auth.pending = false
                state.Auth.error = action.payload
            })
    }
})

// export const selectIsAuthenticated = createSelector(
//     selectAuthState,
//     (auth) => !!auth.data // Check if user data exists, indicating authentication
//   );

export const {ClearAuthContext } = AuthenticationSlice.actions
export default AuthenticationSlice.reducer