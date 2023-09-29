import { useEffect, useState } from 'react'
import chartDataValuesResponse from '../mocks/chartDataValuesResponse.json'

export function useChartData () {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(chartDataValuesResponse.chartValues)
  }, [])

  return data
}
