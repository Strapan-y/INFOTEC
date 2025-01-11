import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { pagThunks } from './PagThunks'
import { pagInitialState } from './PagInitialState'
import { PagModulesTypes, PagStateTypes } from './PagModels'
import { message } from 'antd';


const initialState = pagInitialState();
const thunks = pagThunks();
const { getAllDiets } = thunks;

const pagSlice = createSlice({
  name: "pag",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDiets.pending, (state) => {
        state.status.getAllDiets = 'loading'
        state.error.getAllDiets = null
      })
      .addCase(getAllDiets.fulfilled, (state, { payload }) => {
        state.status.getAllDiets = 'idle'
        state.Diets = payload
      })
      .addCase(getAllDiets.rejected, (state, { payload }) => {
        state.status.getAllDiets = 'error'
        state.error.getAllDiets = payload?.message
        message.error(payload?.message || "Error al obtener las dietas")
      })
  },
});

const pagActions = { ...pagSlice.actions, ...thunks };
const pagReducer = pagSlice.reducer;

export { pagActions, pagReducer };
