export function getEvolution (target, diff) {
  const baseEndpoint = import.meta.env.VITE_KT_API_ENDPOINT
  let endpoint = `${baseEndpoint}${target}`

  if (diff) {
    endpoint += '/diff'
  }

  return fetch(endpoint)
    .then(response => response.json())
    .then(json => json)
}
