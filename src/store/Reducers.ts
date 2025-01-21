import { combineReducers } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { authReducer } from "../services/Auth/AuthSlice"
import { HeadersReducer } from "../services/Header/HeaderSlice"
import { pagReducer } from "../services/Pag/PagSlice"


const reducers = combineReducers({
  auth: authReducer,
  header: HeadersReducer,
  pag: pagReducer,
})

const rootReducer = (state: RootState | undefined, action: PayloadAction) => {
  if (action.type === 'auth/logout')
    state = undefined
  return reducers(state, action)
}

export type RootState = ReturnType<typeof reducers>
export default rootReducer