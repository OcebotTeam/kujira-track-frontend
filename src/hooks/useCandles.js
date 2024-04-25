import { useEffect, useState } from 'react'
import { getCandles } from '../services/getCandles'

export function useCandles ({ target, timeframe }) {
  const [candles, setCandles] = useState([])
  const [page, setPage] = useState(0)

  const candlesUpdater = (currentCandles, page) => {
    setPage(page)
    setCandles(currentCandles)

    if (!timeframe) return

    getCandles({ target, timeframe, page })
      .then(data => {
        setCandles(data.concat(currentCandles))
      })
  }

  // Reset all values when timeframe changes
  useEffect(() => {
    candlesUpdater([], 0)
  }, [timeframe])

  // Load new page of candles when page changes
  useEffect(() => {
    candlesUpdater(candles, page)
  }, [page])

  const nextPage = () => {
    setPage(page + 1)
  }

  // Moves to next page in case the param date is the last one in the current candles list
  const updateCandles = (requestedDate) => {
    if (!candles.length) return

    const lastCandle = candles[0]
    if (lastCandle.time === requestedDate) {
      nextPage()
    }
  }

  return {
    candles,
    updateCandles
  }
}
