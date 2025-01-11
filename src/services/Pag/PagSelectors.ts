import { useSelector } from "react-redux"
import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../../store/Reducers"

export const usePagSelectors = () => {

  const Diets = useSelector((state: RootState) => state.pag.Diets)

  return {
    Diets,
  }
}