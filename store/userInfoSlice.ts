import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { INFO, TOKEN, handleStorage } from '@/util/handleStorage'

interface UserInfoState {
    shop:string,
    tel:string,
    token:string,
}

const initialState = { value : {
    shop: "",
    tel: "",
    token: ""
}
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state , action: PayloadAction<UserInfoState>) => {
      handleStorage.setStorage(TOKEN, JSON.stringify(action.payload.token))
      handleStorage.setStorage(INFO, JSON.stringify({shop: action.payload.shop, tel: action.payload.tel}))
      state.value = action.payload
    },
    removeUserInfo : (state)=>{
      handleStorage.clearStorage(INFO)
      handleStorage.clearStorage(TOKEN);
      state.value = initialState.value
    }
  },
})

export const { setUserInfo , removeUserInfo } = userInfoSlice.actions

export const getUserInfo = (state: RootState) => state.userInfo

export default userInfoSlice.reducer