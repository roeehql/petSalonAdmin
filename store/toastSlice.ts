import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

export interface ToastState {
    type: "success" | "error" | "warning" | "info";
    text: string;
  }

export interface ToastSliceState {
    id: number;
    type: "success" | "error" | "warning" | "info";
    text: string;
  }

const initialState: ToastSliceState[] = []

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast: (state , action: PayloadAction<ToastState>) => {
      state.push({id: (state.length +1) , ...action.payload})
      return state
    },
    removeToast : (state) => {
        state.shift()
        return state
      },
    clearToast: (state, action: PayloadAction<number>)=>{
       return state.filter((toast)=> toast.id !== action.payload)
    }
  },
})

export const { setToast , clearToast, removeToast} = toastSlice.actions

export const getToast = (state: RootState) => state.toast

export default toastSlice.reducer