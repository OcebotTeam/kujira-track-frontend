export function getCandles ({ target, timeframe, page }) {
  const baseEndpoint = import.meta.env.VITE_KT_API_ENDPOINT

  const endpoint = `${baseEndpoint}${target}?timeframe=${timeframe}&page=${page}`

  console.log(endpoint)

  return fetch(endpoint)
    .then(response => response.json())
    .then(json => json)
}
