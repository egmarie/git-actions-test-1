import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  previous: '',
}

export const previousSlice = createSlice({
  name: 'previous',
  initialState,
  reducers: {
    setPrevious: (state, action) => {
      const c = action.payload
      state.previous= c
    },
  },
})
export const { setPrevious } = previousSlice.actions

export default previousSlice.reducer