export function getEvolution (target) {
  const enpoint = import.meta.env.VITE_KT_EVO_API_ENDPOINT
  const endpoint = `${enpoint}/${target}`

  return fetch(endpoint)
    .then(response => response.json())
    .then(json => json[target])
}
