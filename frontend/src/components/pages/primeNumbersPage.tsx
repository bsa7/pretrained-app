import React, { useState } from 'react'
import { Button, Stack, Text } from '@react-native-material/core'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchAsync, selectPrimeNumber } from './primeNumbersReducers'

export const PrimeNumbersPage = () => {
  const [fetchNextPrimeNumber, setIncrementAmount] = useState('2')
  const incrementValue = Number(fetchNextPrimeNumber) || 0
  const dispatch = useAppDispatch()
  const primeNumber = useAppSelector(selectPrimeNumber)
  const onClickHandler = () => {
    dispatch(fetchAsync(incrementValue))
  }

  return (
    <Stack fill center spacing={4}>
      <Text variant="h1">Hello! This is a Prime number iteration page.</Text>
      <Text variant="h2">Current discovered prime number is {primeNumber}</Text>
      <Button
        onPress={onClickHandler}
        title="Press me to see the next prime number"
      />
    </Stack>
  )
}
