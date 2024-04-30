import { useEffect, useState } from 'react'
import { getTokenPrice } from '../services/getTokenPrice.js'

export function useTokenPrice (tickerId) {
  const [tokenPrice, setTokenPrice] = useState(0)

  useEffect(() => {
    getTokenPrice(tickerId)
      .then(data => {
        setTokenPrice(data)
      })
  }, [])

  return tokenPrice
}
