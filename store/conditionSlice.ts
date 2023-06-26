import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface ConditionState {
    condition: "확정" | "미확정" | "취소" | "날짜" | "전체" | "정보",
}

const initialState:ConditionState = {
    condition: "전체",
}

export const conditionSlice = createSlice({
  name: 'condition',
  initialState,
  reducers: {
    setCondition: (state , action: PayloadAction<ConditionState>) => {
      state.condition = action.payload.condition
    },
    removeCondition : (state)=>{
      state.condition = initialState.condition
    }
  },
})

export const { setCondition , removeCondition } = conditionSlice.actions

export const getCondition = (state: RootState) => state.condition.condition

export default conditionSlice.reducer