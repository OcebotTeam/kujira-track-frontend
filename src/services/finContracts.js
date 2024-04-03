export function getFinContracts () {
  const enpoint = import.meta.env.VITE_KT_API_ENDPOINT
  const endpoint = `${enpoint}/fin/contracts`

  return fetch(endpoint)
    .then(response => response.json())
    .then(json => {
      return json
    })
}
