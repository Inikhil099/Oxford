import { configureStore } from '@reduxjs/toolkit'
import UserSliceReducer from "./userInfos/userInfoSlice"

export const store = configureStore({
  reducer: {
    User:UserSliceReducer,
  },
})