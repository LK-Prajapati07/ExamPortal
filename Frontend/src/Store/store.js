import { configureStore } from '@reduxjs/toolkit'
import userReducer from './createSlice.js'
export const store = configureStore({
  reducer: {
   user: userReducer,

  },
})
