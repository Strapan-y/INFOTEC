import { useSelector } from "react-redux"
import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../../store/Reducers"

export const useHeaderSelectors = () => {

  const isInHC = useSelector((state: RootState) => state.header.isInHC)

  return {
    isInHC
  }
}