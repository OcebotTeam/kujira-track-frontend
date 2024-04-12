import tailwindConfig from '../../../tailwind.config'
import { useContext, useEffect, useRef } from 'react'
import { ChartContext } from './ChartContainer'

export function Series ({ type, data }) {
  const chartApi = useContext(ChartContext)
  const series = useRef(null)

  const blue = tailwindConfig.theme.colors.blue
  const teal = tailwindConfig.theme.colors.teal

  if (chartApi && !series.current) {
    switch (type) {
      case 'area':
        series.current = chartApi.addAreaSeries({
          lineColor: blue,
          topColor: blue,
          bottomColor: blue,
          priceFormat: {
            type: 'volume'
          }
        })
        break

      case 'histogram':
        series.current = chartApi.addHistogramSeries({
          color: blue,
          priceFormat: {
            type: 'volume'
          }
        })
        break

      case 'candlestick':
        series.current = chartApi.addCandlestickSeries({
          upColor: teal,
          downColor: blue,
          wickUpColor: teal,
          wickDownColor: blue,
          borderVisible: false
        })
        break

      case 'line':
      default:
        series.current = chartApi.addLineSeries({
          color: teal,
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
}
