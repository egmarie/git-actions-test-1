import { createSlice } from '@reduxjs/toolkit'


const initial = {
  name: '',
  link: '',
  description: '', 
  sceneA: ''
}
export interface CurrentState {
  name: string;
  link: string;
  description: string;
  sceneA: string
}
const initialState: CurrentState = initial
export const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state = action.payload
      return state
    },
  },
})
export const { setCurrent } = currentSlice.actions

export default currentSlice.reducer