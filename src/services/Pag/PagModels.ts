
import { OnSuccessCallback } from "../../common/models/interfaces/Common"
import { StatusTypes } from "../../common/models/types/Common"


export type PagModulesTypes =
  | "login"
  | "passwordResetRequest"
  | "verifyEmail"
  | "resetPassword"
  | "register";

export interface PagStateTypes {
  Diets: Diet[],
  status: {
    getAllDiets: StatusTypes,
  },
  error: {
    getAllDiets: string | null | undefined,
  },
}

export interface Diet {
  id: number,
  code: string,
  description: string,
  observation: string,
}