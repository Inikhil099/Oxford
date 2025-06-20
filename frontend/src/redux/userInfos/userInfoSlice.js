import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo : undefined
  },
  reducers: {
    setUserInfo : (state,action)=>{
        state.userInfo = action.payload
    },

  },
})

export const {setUserInfo } = UserSlice.actions

export default UserSlice.reducer