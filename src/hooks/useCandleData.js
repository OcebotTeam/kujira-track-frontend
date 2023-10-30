import { useEffect, useState } from 'react'
import { getCandles } from '../services/candles'

export function useCandleData ({ pairContract, precision, daysPeriod, batch }) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    getCandles({ pairContract, precision, daysPeriod, batch })
      .then(data => setChartData(data))
  }, [pairContract, precision, daysPeriod, batch])

  return chartData
}
