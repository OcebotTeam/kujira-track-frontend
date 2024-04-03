import { useCandleData } from '../hooks/useCandleData'
import { ChartContainer } from './ChartContainer'
import { Series } from './Series'
import { calculateSMA } from '../utility/sma'
import { useState } from 'react'
import { timeFrames } from '../services/timeFrames'

export function CandleChart ({ children, tickerId, price, volume }) {
  const [smaPeriods, setSmaPeriods] = useState(30)
  const [timeframe, setTimeframe] = useState('daily')
  const [page] = useState(0)

  const chartData = useCandleData({ tickerId, timeframe, page })

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleSmaChange = (event) => {
    const newSmaPeriod = event.target.value
    setSmaPeriods(newSmaPeriod)
  }

  const handleTimeFrameChange = (event) => {
    const timeFrameKey = event.target.value
    setTimeframe(timeFrames[timeFrameKey])
  }

  const handleVisibleTimeRangeChange = (event) => {
    // const timeDiff = event.to - event.from
    // if (timeDiff < 5000000) {}
  }

  return (
    <ChartContainer handleVisibleTimeRangeChange={handleVisibleTimeRangeChange}>
      <form onSubmit={handleSubmit}>

        <label htmlFor='temp-input'>TEMP</label>
        <select id='temp-input' value={timeframe.key} onChange={handleTimeFrameChange}>
          {
            Object.entries(timeFrames)
              .filter(timeFrame => timeFrame[1].active)
              .map(timeFrame => {
                return (
                  <option key={`timeFrameOption${timeFrame}`} value={timeFrame[0]}>
                    {timeFrame[1].label}
                  </option>
                )
              })
          }
        </select>

        <label htmlFor='sma-input'>SMA</label>
        <input id='sma-input' type='number' value={smaPeriods} onChange={handleSmaChange} />

      </form>
      {price && <Series type='bar' data={chartData} />}
      {volume && <Series type='histogram' data={chartData} />}
      {volume && <Series type='line' data={calculateSMA(chartData, smaPeriods)} />}
    </ChartContainer>
  )
}
