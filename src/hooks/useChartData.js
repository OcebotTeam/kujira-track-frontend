import { useEffect, useState } from 'react'
import { getCandles } from '../services/candles'

export function useChartData ({ pairContract, precision, periods }) {
  const [chartData, setChartData] = useState([])

  console.log(precision)

  useEffect(() => {
    getCandles({ pairContract, precision, periods })
      .then(data => setChartData(data))
  }, [pairContract, precision, periods])

  return chartData
}
