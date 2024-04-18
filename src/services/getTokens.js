export function getTokens () {
  const baseEndpoint = import.meta.env.VITE_KT_API_ENDPOINT
  const endpoint = `${baseEndpoint}/tokens`

  return fetch(endpoint)
    .then(response => response.json())
    .then(json => json)
}
