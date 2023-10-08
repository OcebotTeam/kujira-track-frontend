import { useContext, useEffect, useRef } from 'react'
import { ChartContext } from './ChartContainer'

export function Series ({ children, type, data }) {
  const chartApi = useContext(ChartContext)
  const series = useRef(null)

  if (chartApi && !series.current) {
    switch (type) {
      case 'area':
        series.current = chartApi.addAreaSeries()
        break
      case 'histogram':
        series.current = chartApi.addHistogramSeries()
        break
      case 'bar':
        series.current = chartApi.addBarSeries()
        break
      case 'line':
      default:
        series.current = chartApi.addLineSeries()
    }
  }

  useEffect(() => {
    if (series.current) {
      series.current.setData(data)
    }
  })

  return children
}
