import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiInstence } from "../../common/axios/Interceptors"
import { ErrorMsgResponse } from "../../common/models/interfaces/Common"
/* import { GetAllPayload, GetAllResponse } from "./HeaderModels" */

export const HeadersThunks = () => {

  /* const getAll = createAsyncThunk(
    'Headers/all',
    async (payload, { rejectWithValue }) => {
      try {
        const { data } = await apiInstence.get<GetAllResponse>('/Headers', payload)
        return data
      } catch (error: any) {
        return rejectWithValue({ message: error.toString() })
      }
    }
  ) */

  return {
    /* getAll */
  }
}