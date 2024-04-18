import { useEffect, useState } from 'react'
import { getToken } from '../services/getToken.js'

export function useToken (tickerId) {
  const [token, setToken] = useState({})

  useEffect(() => {
    getToken(tickerId)
      .then(data => {
        console.log(data.price)
        setToken(data)
      })
  }, [])

  const price = token.price ?? '...'

  return price
}