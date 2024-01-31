import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showLoader: false
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setShowLoader: (state, action) => {
      state.showLoader = action.payload
    }
  }
})

export const { setShowLoader } = uiSlice.actions

export const uiSliceReducer = uiSlice.reducer
