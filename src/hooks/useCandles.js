import { useEffect, useState } from 'react'
import { getCandles } from '../services/getCandles'

export function useCandles ({ tickerId, timeframe }) {
  const [candles, setCandles] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (timeframe) {
      getCandles({ tickerId, timeframe, page })
        .then(data => setCandles(data))
    }
  }, [tickerId, timeframe, page])

  const nextPage = () => {
    setPage(page + 1)
  }

  return { candles, nextPage }
}
