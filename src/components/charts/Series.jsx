import tailwindConfig from '../../../tailwind.config'
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
        series.current = chartApi.addHistogramSeries({
          color: tailwindConfig.theme.colors.blue,
          priceFormat: {
            type: 'volume'
          }
        })
        break

      case 'candlestick':
        series.current = chartApi.addCandlestickSeries({
          upColor: tailwindConfig.theme.colors.teal,
          downColor: tailwindConfig.theme.colors.blue,
          wickUpColor: tailwindConfig.theme.colors.teal,
          wickDownColor: tailwindConfig.theme.colors.blue,
          borderVisible: false
        })
        break

      case 'line':
      default:
        series.current = chartApi.addLineSeries({
          color: tailwindConfig.theme.colors.teal,
          priceFormat: {
            type: 'volume'
          }
        })
    }
  }

  useEffect(() => {
    if (series.current) {
      series.current.setData(data)
    }
  })

  return children
}
