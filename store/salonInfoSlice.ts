import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { SalonList } from '@/types/salonsTypes'

interface SalonInfoState {
    value : SalonList
}

const initialState: SalonInfoState = { value : {
    id:"",
    name:"죄송합니다.",
    tel: "",
    address: "잘못된 접근이거나 문제가 발생했으니 다시 시도해주세요.",
    canSissorCut: false,
    canCatCut: false,
    hasCctv:false,
    hasPickupService:false,
},}

export const salonInfoSlice = createSlice({
  name: 'salonInfo',
  initialState,
  reducers: {
    setSalonInfo: (state , action: PayloadAction<SalonList>) => {
      state.value = action.payload
    },
  },
})

export const { setSalonInfo } = salonInfoSlice.actions

export const getSalonInfo = (state: RootState) => state.salonInfo

export default salonInfoSlice.reducer