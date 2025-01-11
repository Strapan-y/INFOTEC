import { useSelector } from "react-redux"
import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../../store/Reducers"

export const useAuthSelectors = () => {

  const authe = useSelector((state: RootState) => state.auth.authe)

  const status = useSelector((state: RootState) => state.auth.status)

  const error = useSelector((state: RootState) => state.auth.error)

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  const passwordReset = useSelector((state: RootState) => state.auth.passwordReset)


  return {
    authe,
    status,
    error,
    isAuthenticated,
    passwordReset,
  }
}