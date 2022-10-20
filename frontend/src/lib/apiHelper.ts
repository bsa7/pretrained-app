import Constants from 'expo-constants'
import { applicationSettings } from '../config/settings'

export const fetchJsonFromAPI = async (location: string, amount: number) => {
  const nodeEnv = Constants.expoConfig!.extra!.nodeEnvName
  console.log('#5', { nodeEnv })
  const apiHost = applicationSettings[nodeEnv].apiHost
  const url = `${apiHost}${location}`
  console.log({ url })
  const response = await fetch(url)
  const data = await response.json()
  return data
}
