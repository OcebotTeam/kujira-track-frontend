export function getEvolution (target, diff) {
  const enpoint = import.meta.env.VITE_KT_API_ENDPOINT
  let endpoint = `${enpoint}/${target}`

  if (diff) {
    endpoint += '/diff'
  }

  return fetch(endpoint)
    .then(response => response.json())
    .then(json => json)
}
