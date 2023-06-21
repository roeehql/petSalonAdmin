import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface ConditionState {
    condition:string,
}

const initialState = {
    condition: ""
}

export const conditionSlice = createSlice({
  name: 'condition',
  initialState,
  reducers: {
    setCondition: (state , action: PayloadAction<string>) => {
      state.condition = action.payload
    },
    removeCondition : (state)=>{
      state.condition = initialState.condition
    }
  },
})

export const { setCondition , removeCondition } = conditionSlice.actions

export const getCondition = (state: RootState) => state.condition

export default conditionSlice.reducer