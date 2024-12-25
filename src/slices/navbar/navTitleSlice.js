import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  text: "Hi, Abhishek here",
}

export const navTitleSlice = createSlice({
  name: 'navTitle',
  initialState,
  reducers: {
    changeTitle: (state, action)=>{
        state.text = action.payload
    }
  },
})

export const { changeTitle } = navTitleSlice.actions

export default navTitleSlice.reducer