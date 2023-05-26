import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchLoginStatus } from '../../api/fetchLoginStatus'
import { initialState } from '../../constants'

export const dataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogined: (state, action: PayloadAction<boolean>) => {
      state.isLogined = action.payload;
    },
  },
  extraReducers: (builder) => { 
    builder 
      .addCase(fetchLoginStatus.fulfilled, (state, action: PayloadAction<boolean>) => {
        state.isLogined = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchLoginStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLoginStatus.rejected, (state) => {
        state.isLoading = false;
        state.isLogined = false;
        console.error("Login error")
      })
    }
})

// Action creators are generated for each case reducer function
export const { setIsLogined } = dataSlice.actions

export default dataSlice.reducer