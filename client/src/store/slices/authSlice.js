import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        createAt: '',
        email: '',
        id: '',
        name: '',
        password: '',
        token: ''
    },
    isAuth: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    redusers: {
        getProfile: (state, action) => {
            state.user === action.payload
            state.isAuth = true
        }
    }
})

export const { getProfile } = authSlice.actions
export default authSlice.reducer