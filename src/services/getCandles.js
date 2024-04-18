export function getCandles ({ tickerId, timeframe, page }) {
  const baseEndpoint = import.meta.env.VITE_KT_API_ENDPOINT
  const endpoint = `${baseEndpoint}/fin/contracts/${tickerId}/candles?timeframe=${timeframe}&page=${page}`

  return fetch(endpoint)
    .then(response => response.json())
    .then(json => json)
}
