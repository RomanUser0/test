import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: '',
        email: '',
        password: ''
    },
    isAuth: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    redusers: {
        getProfile: (state, action) => {
            state.user === action
            state.isAuth = true
        }
    }
})

export const { getProfile } = authSlice.actions
export default authSlice.reducer