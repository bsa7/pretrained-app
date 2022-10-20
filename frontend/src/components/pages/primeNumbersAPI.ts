import { fetchJsonFromAPI } from '../../lib/apiHelper'

export function fetchPrimeNumber(amount = 1) {
  return fetchJsonFromAPI('/prime_numbers?current_prime=491', amount).then((response) => {
    return response
  })
}
