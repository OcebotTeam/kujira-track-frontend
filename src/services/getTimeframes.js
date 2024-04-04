export function getTimeframes () {
  const enpoint = import.meta.env.VITE_KT_API_ENDPOINT
  const endpoint = `${enpoint}/fin/timeframes`

  return fetch(endpoint)
    .then(response => response.json())
    .then(json => json)
}
