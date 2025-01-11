import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import rootReducer from './Reducers'
/* import persistedReducer from './Reducers'
 */
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware(/* {
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    } */)/* .concat(logger) */
  )
})

/* const persistor = persistStore(store) */
/* persistor.purge() */
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export const useAppDispatch: () => AppDispatch = useDispatch

export { store, /* persistor */ }