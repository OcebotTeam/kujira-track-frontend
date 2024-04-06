import { useEffect, useState } from 'react'
import { getCandles } from '../services/getCandles'

export function useCandles ({ tickerId, timeframe }) {
  const [candles, setCandles] = useState([])
  const [page, setPage] = useState(0)

  const candlesObtainer = (reset) => {
    if (!timeframe) return
    getCandles({ tickerId, timeframe, page })
      .then(data => {
        setCandles(candles => data.concat(candles))
      })
  }

  // Load new page of candles when page changes
  useEffect(() => {
    candlesObtainer()
  }, [page, timeframe])

  // Reset all values when timeframe changes
  useEffect(() => {
    setCandles([])
    setPage(0)
  }, [timeframe])

  const nextPage = () => {
    setPage(page + 1)
  }

  return { candles, nextPage }
}
