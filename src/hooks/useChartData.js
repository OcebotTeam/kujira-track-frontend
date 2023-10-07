import { useEffect, useState } from 'react'
import { getCandles } from '../services/candles'

export function useChartData ({ pairContract, precision, periods }) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    getCandles({ pairContract, precision, periods })
      .then(data => setChartData(data))
  }, [])

  return chartData
}
