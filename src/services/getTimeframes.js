export function getTimeframes () {
  const baseEndpoint = import.meta.env.VITE_KT_API_ENDPOINT
  const endpoint = `${baseEndpoint}/fin/timeframes`

  return fetch(endpoint)
    .then(response => response.json())
    .then(json => json)
}
