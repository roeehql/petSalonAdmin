import { configureStore } from '@reduxjs/toolkit'
import salonInfoSlice from './salonInfoSlice'
import userInfoSlice from './userInfoSlice'
import toastSlice from './toastSlice'
import conditionSlice from './conditionSlice'

export const store = configureStore({
  reducer: {
    salonInfo: salonInfoSlice,
    userInfo: userInfoSlice,
    toast: toastSlice,
    condition: conditionSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch