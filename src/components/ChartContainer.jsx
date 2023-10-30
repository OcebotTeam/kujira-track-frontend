import { createContext, useEffect, useRef, useState } from 'react'
import { createChart } from 'lightweight-charts'

export const ChartContext = createContext()

export function ChartContainer ({ children, handleVisibleTimeRangeChange = () => {} }) {
  const chartContainerRef = useRef()
  const [chartApi, setChartApi] = useState()

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth })
    }

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 300
    })

    setChartApi(chart)
    chart.timeScale().subscribeVisibleTimeRangeChange(handleVisibleTimeRangeChange)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      chart.timeScale().unsubscribeVisibleTimeRangeChange(handleVisibleTimeRangeChange)
      chart.remove()
    }
  }, [])

  return (
    <ChartContext.Provider value={chartApi}>
      <div ref={chartContainerRef}>
        {children}
      </div>
    </ChartContext.Provider>
  )
}
