import { useEffect, useState } from 'react'
import { useCandles } from '../hooks/useCandles'
import { useTimeframe } from '../hooks/useTimeframe'
import { ChartContainer } from './ChartContainer'
import { Series } from './Series'
import { calculateSMA } from '../utility/calculateSMA'

export function CandleChart ({ children, tickerId, price, volume }) {
  const [smaPeriods, setSmaPeriods] = useState(30)
  const [visibleTimeRange, setVisibleTimeRange] = useState(0)

  const {
    changeTimeframe,
    currentTimeframe,
    currentPrecision,
    timeframesList
  } = useTimeframe()

  const {
    candles,
    updateCandles
  } = useCandles({ tickerId, timeframe: currentPrecision() })

  useEffect(() => {
    if (!visibleTimeRange) return
    updateCandles(visibleTimeRange)
  }, [visibleTimeRange])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleSmaChange = (event) => {
    const newSmaPeriod = event.target.value
    setSmaPeriods(newSmaPeriod)
  }

  const handleTimeframeChange = (event) => {
    const timeFrameKey = event.target.value
    changeTimeframe(timeFrameKey)
  }

  const handleVisibleTimeRangeChange = (event) => {
    if (event !== null) {
      setVisibleTimeRange(event.from)
    }
  }

  return (
    <ChartContainer handleVisibleTimeRangeChange={handleVisibleTimeRangeChange}>
      <p>{currentPrecision()}</p>
      <form onSubmit={handleSubmit}>

        <label htmlFor='temp-input'>TF</label>
        <select id='temp-input' value={currentTimeframe()} onChange={handleTimeframeChange}>
          {
            timeframesList().map(timeFrame => {
              return (
                <option key={`timeFrameOption${timeFrame}`} value={timeFrame}>
                  {timeFrame}
                </option>
              )
            })
          }
        </select>

        <label htmlFor='sma-input'>SMA</label>
        <input id='sma-input' type='number' value={smaPeriods} onChange={handleSmaChange} />

      </form>
      {price && <Series type='bar' data={candles} />}
      {volume && <Series type='histogram' data={candles} />}
      {volume && <Series type='line' data={calculateSMA(candles, smaPeriods)} />}
    </ChartContainer>
  )
}
