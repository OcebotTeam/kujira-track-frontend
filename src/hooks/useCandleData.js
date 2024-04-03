import { useEffect, useState } from 'react'
import { getCandles } from '../services/candles'

export function useCandleData ({ tickerId, timeframe, page }) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    getCandles({ tickerId, timeframe, page })
      .then(data => setChartData(data))
  }, [tickerId, timeframe, page])

  return chartData
}
