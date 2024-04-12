import { useEffect, useState } from 'react'
import { useCandles } from '../../hooks/useCandles'
import { useTimeframe } from '../../hooks/useTimeframe'
import { useSma } from '../../hooks/useSma'
import { ChartContainer } from './ChartContainer'
import { Series } from './Series'
import { ChartControls } from '../ui/charts/ChartControls'
import { ChartControlSelect } from '../ui/charts/ChartControlSelect'
import { ChartControlToggler } from '../ui/charts/ChartControlToggler'
import { ChartControlInput } from '../ui/charts/ChartControlInput'

export function CandleChart ({ tickerId, price, volume }) {
  const [smaPeriods, setSmaPeriods] = useState(30)
  const [visibleTimeRange, setVisibleTimeRange] = useState(0)

  const {
    changeTimeframe,
    currentTimeframe,
    currentPrecision,
    timeframesList
  } = useTimeframe()

  const {
    sma,
    toggleSma,
    smaActive
  } = useSma()

  const {
    candles,
    updateCandles
  } = useCandles({ tickerId, timeframe: currentPrecision() })

  useEffect(() => {
    if (!visibleTimeRange) return
    updateCandles(visibleTimeRange)
  }, [visibleTimeRange])

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

  const timeframeOptions = timeframesList().map(timeFrame => {
    return (
      <option key={`timeFrameOption${timeFrame}`} value={timeFrame} className='text-darker'>
        {timeFrame}
      </option>
    )
  })

  return (
    <ChartContainer handleVisibleTimeRangeChange={handleVisibleTimeRangeChange}>
      <div className='flex items-center justify-between mb-3'>

        <div className='flex'>
          <h3 className='text-white text-xl me-3'>
            {tickerId.replace(/_/g, '/')}
          </h3>
          <ChartControls>
            <ChartControlSelect value={currentTimeframe()} onChange={handleTimeframeChange} options={timeframeOptions} />
          </ChartControls>
        </div>

        <div>
          <ChartControls>
            <ChartControlToggler label='SMA' state={smaActive} onClick={toggleSma} />
            {smaActive && <ChartControlInput label='SMA' value={smaPeriods} onChange={handleSmaChange} />}
          </ChartControls>
        </div>

      </div>

      {price && <Series type='candlestick' data={candles} />}
      {volume && <Series type='histogram' data={candles} />}
      {smaActive && <Series type='line' data={sma(candles, smaPeriods)} />}

    </ChartContainer>
  )
}
