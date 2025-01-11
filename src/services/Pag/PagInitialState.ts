import { PagStateTypes } from "./PagModels"

export const pagInitialState = (): PagStateTypes => ({
  Diets: [],
  status: {
    getAllDiets: 'idle',
  },
  error: {
    getAllDiets: null,
  },
})