import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import primeNumberReducer from '../components/pages/primeNumbersReducers'

export const store = configureStore({
  reducer: {
    primeNumber: primeNumberReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
