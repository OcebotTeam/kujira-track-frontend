export function getFinContracts () {
  const baseEndpoint = import.meta.env.VITE_KT_API_ENDPOINT
  const endpoint = `${baseEndpoint}/fin/contracts`

  return fetch(endpoint)
    .then(response => response.json())
    .then(json => json)
}
