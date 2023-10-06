import { useContext, useEffect, useRef } from 'react'
import { useChartData } from '../hooks/useChartData'
import { pairs } from '../services/pairs'
import { ChartContext } from './Chart'

export function Series ({ children, type }) {
  const chartApi = useContext(ChartContext)
  const chartData = useChartData({
    pairContract: pairs.KUJI_axlUSDC.contract,
    precision: '1D',
    periods: 100
  })
  const series = useRef(null)

  console.log(type)

  if (chartApi && !series.current) {
    switch (type) {
      case 'area':
        series.current = chartApi.addAreaSeries()
        break
      case 'histogram':
        series.current = chartApi.addHistogramSeries()
        break
      case 'line':
      default:
        series.current = chartApi.addLineSeries()
    }
  }

  useEffect(() => {
    if (series.current) {
      series.current.setData(chartData)
    }
  })

  return children
}
