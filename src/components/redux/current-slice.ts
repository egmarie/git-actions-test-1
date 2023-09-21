import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: '',
}

export const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      const c = action.payload
      state.current= c
    },
  },
})
export const { setCurrent } = currentSlice.actions

export default currentSlice.reducer