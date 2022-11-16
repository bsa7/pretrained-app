import Constants from 'expo-constants'
import { APPLICATION_SETTINGS } from '../config/settings'

export const fetchJsonFromAPI = async (location: string, amount: number) => {
  const nodeEnv: 'development' | 'production' = Constants.expoConfig!.extra!.nodeEnvName
  const { apiHost } = APPLICATION_SETTINGS[nodeEnv]
  const url = `${apiHost}${location}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}
