import { useCandleData } from '../hooks/useCandleData'
import { ChartContainer } from './ChartContainer'
import { Series } from './Series'
import { calculateSMA } from '../utility/sma'
import { useState } from 'react'
import { timeFrames } from '../services/timeFrames'

export function CandleChart ({ children, pair, price, volume }) {
  const [smaPeriods, setSmaPeriods] = useState(30)
  const [timeFrame, setTimeFrame] = useState(timeFrames.day1)
  const [batch, setbatch] = useState(1)

  const chartData = useCandleData({
    pairContract: pair.contract,
    precision: timeFrame.value,
    daysPeriod: timeFrame.daysBatch,
    batch
  })

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleSmaChange = (event) => {
    const newSmaPeriod = event.target.value
    setSmaPeriods(newSmaPeriod)
  }

  const handleTimeFrameChange = (event) => {
    const timeFrameKey = event.target.value
    setTimeFrame(timeFrames[timeFrameKey])
  }

  const handleVisibleTimeRangeChange = (event) => {
    const timeDiff = event.to - event.from
    console.log(timeDiff)
    if (timeDiff < 5000000) {
      console.log('load')
    }
  }

  return (
    <ChartContainer handleVisibleTimeRangeChange={handleVisibleTimeRangeChange}>
      <form onSubmit={handleSubmit}>

        <label htmlFor='temp-input'>TEMP</label>
        <select id='temp-input' value={timeFrame.key} onChange={handleTimeFrameChange}>
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
