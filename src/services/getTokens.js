export function getTokens () {
  const enpoint = import.meta.env.VITE_KT_API_ENDPOINT
  const endpoint = `${enpoint}/tokens`

  return fetch(endpoint)
    .then(response => response.json())
    .then(json => json)
}
