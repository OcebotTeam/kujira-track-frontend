import { useEffect, useRef } from 'react'
import { useChartData } from '../hooks/useChartData'
import { createChart } from 'lightweight-charts'

export function Chart (props) {
  const chartContainerRef = useRef()
  const chartData = useChartData()

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth })
    }

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 300
    })
    // chart.timeScale().fitContent()

    const newSeries = chart.addAreaSeries()
    newSeries.setData(chartData)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      chart.remove()
    }
  })

  return (
    <div ref={chartContainerRef} />
  )
}
