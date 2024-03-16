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
    reducers: {
        getProfile: (state, action) => {
            state.user = action.payload
            state.isAuth = true
        },
        logout: (state) => {
            state.user = {},
            state.isAuth = false

        }
    }
})

export const { getProfile, logout } = authSlice.actions
export default authSlice.reducer