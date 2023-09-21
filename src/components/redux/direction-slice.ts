import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  direction: 'forward',
}

export const directionSlice = createSlice({
  name: 'direction',
  initialState,
  reducers: {
    setDirection: (state, action) => {
      const c = action.payload
      state.direction= c
    },
  },
})
export const { setDirection } = directionSlice.actions

export default directionSlice.reducer