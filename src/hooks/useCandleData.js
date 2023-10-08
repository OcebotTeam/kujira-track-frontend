import { useEffect, useState } from 'react'
import { getCandles } from '../services/candles'

export function useCandleData ({ pairContract, precision, daysPeriod }) {
  const [chartData, setChartData] = useState([])
  useEffect(() => {
    getCandles({ pairContract, precision, daysPeriod })
      .then(data => setChartData(data))
  }, [pairContract, precision, daysPeriod])

  return chartData
}
