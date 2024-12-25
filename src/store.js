import { configureStore } from '@reduxjs/toolkit'
import navTitleReducer from './slices/navbar/navTitleSlice'

export const store = configureStore({
  reducer: {
    navTitle: navTitleReducer
  },
})