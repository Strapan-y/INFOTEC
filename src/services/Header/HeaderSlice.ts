import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HeadersThunks } from './HeaderThunks'
import { HeadersInitialState } from './HeaderInitialState'
import { HeadersStateTypes } from './HeaderModels'

const initialState = HeadersInitialState()

const thunks = HeadersThunks()
/* const { getAll } = thunks */

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setIsInHC: (state: HeadersStateTypes, { payload }) => {
      state.isInHC = payload;
    },
  },
})

const HeadersActions = { ...headerSlice.actions, ...thunks }
const HeadersReducer = headerSlice.reducer

export { HeadersActions, HeadersReducer }