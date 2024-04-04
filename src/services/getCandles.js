export function getCandles ({ tickerId, timeframe, page }) {
  const enpoint = import.meta.env.VITE_KT_API_ENDPOINT
  const endpoint = `${enpoint}/fin/contracts/${tickerId}/candles?timeframe=${timeframe}&page=${page}`

  return fetch(endpoint)
    .then(response => response.json())
    .then(json => json)
}
