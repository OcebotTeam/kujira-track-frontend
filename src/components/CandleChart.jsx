import { useChartData } from '../hooks/useChartData'
import { ChartContainer } from './ChartContainer'
import { Series } from './Series'
import { calculateSMA } from '../utility/sma'
import { useState } from 'react'
import { timeFrames } from '../services/timeFrames'

export function CandleChart ({ children, pair }) {
  const [showSma, setShowSma] = useState(true)
  const [smaPeriods, setSmaPeriods] = useState(30)
  const [timeFrame, setTimeFrame] = useState(timeFrames.day1.value)

  const chartData = useChartData({
    pairContract: pair.contract,
    precision: timeFrame,
    periods: 100
  })

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleSmaChange = (event) => {
    const newSmaPeriod = event.target.value
    setSmaPeriods(newSmaPeriod)
  }

  const handleTimeFrameChange = (event) => {
    const newTimeFrame = event.target.value
    setTimeFrame(newTimeFrame)
  }

  return (
    <ChartContainer>
      <form onSubmit={handleSubmit}>

        <label htmlFor='temp-input'>TEMP</label>
        <select id='temp-input' value={timeFrame} onChange={handleTimeFrameChange}>
          {
            Object.entries(timeFrames)
              .filter(timeFrame => timeFrame[1].active)
              .map(timeFrame => {
                return (
                  <option key={`timeFrameOption${timeFrame}`} value={timeFrame[1].value}>
                    {timeFrame[1].label}
                  </option>
                )
              })
          }
        </select>

        <label htmlFor='sma-input'>SMA</label>
        <input id='sma-input' type='number' value={smaPeriods} onChange={handleSmaChange} />

      </form>
      <Series type='histogram' data={chartData} />
      {showSma && <Series type='line' data={calculateSMA(chartData, smaPeriods)} />}
    </ChartContainer>
  )
}
