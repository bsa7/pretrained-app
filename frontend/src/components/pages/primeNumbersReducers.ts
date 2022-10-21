import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'
import { fetchPrimeNumber } from './primeNumbersAPI'

export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
}

export const fetchAsync = createAsyncThunk(
  'primeNumber/fetchPrimeNumber',
  async (amount: number) => {
    const response = await fetchPrimeNumber(amount)
    console.log('fetchAsync#19', { 'response.next_prime': response.next_prime })
    return response.next_prime
  },
)

export const primeNumberSlice = createSlice({
  name: 'primeNumber',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value = action.payload
      })
      .addCase(fetchAsync.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const selectPrimeNumber = (state: RootState) => state.primeNumber.value
export default primeNumberSlice.reducer
