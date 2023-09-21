import { configureStore } from '@reduxjs/toolkit';
import currentReducer from './current-slice.js'
import previousReducer from './previous-slice.js'
import directionReducer from './direction-slice.js'
export const store = configureStore({
  reducer: {
    current: currentReducer, 
    previous: previousReducer,
    direction: directionReducer
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
