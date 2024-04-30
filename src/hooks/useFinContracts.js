import { useEffect, useState } from 'react'

export function useFinContracts () {
  const baseEndpoint = import.meta.env.VITE_KT_API_ENDPOINT
  const [contracts, setContracts] = useState([])

  useEffect(() => {
    fetch(`${baseEndpoint}/fin/contracts`)
      .then(response => response.json())
      .then(json => setContracts(json))
  }, [])

  return contracts
}
