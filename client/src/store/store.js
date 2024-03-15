import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import { usersApi } from './query/usersApi'

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(usersApi.middleware) 
})