import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiInstence } from "../../common/axios/Interceptors"
import { ErrorMsgResponse } from "../../common/models/interfaces/Common"
import { RootState } from '../../store/Reducers'

import { message } from "antd"
import { get } from "http"

export const pagThunks = () => {

  const getAllDiets = createAsyncThunk<
    any,
    any,
    { rejectValue: ErrorMsgResponse }
  >(
    "diet/all",
    async (payload, { getState }) => {
      const { data } = await apiInstence.get(
        `/diet/all`
      )
      return data
    }
  )

  return {
    getAllDiets,
  }
}