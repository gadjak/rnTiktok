import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice'
import videoSlice from './reducers/videoSlice'

export const store = configureStore({
    reducer: {
        userSlice,
        videoSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch