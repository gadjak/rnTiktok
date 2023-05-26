import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { fetchVideos } from '../../api/fetchVideos'
import { InitialState, Video } from '../../types'

export const initialState: InitialState = {
    videos: [],
    isLoading: true,
}

export const videoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //Functions for Likes, Coments and so on 
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.fulfilled, (state, action: PayloadAction<Video[]>) => {
                state.videos = action.payload;
                state.isLoading = false
            })
            .addCase(fetchVideos.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchVideos.rejected, (state) => {
                state.isLoading = false;
                console.error("Video loading error")
            })
    }
})

export default videoSlice.reducer