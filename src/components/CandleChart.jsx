import { useChartData } from '../hooks/useChartData'
import { ChartContainer } from './ChartContainer'
import { Series } from './Series'
import { calculateSMA } from '../utility/sma'
import { useState } from 'react'
import { tickPrecision } from '../services/tickPrecision'

export function CandleChart ({ children, pair }) {
  const [showSma, setShowSma] = useState(true)
  const [smaPeriods, setSmaPeriods] = useState(30)
  const [temporality, setTemporality] = useState()

  const chartData = useChartData({
    pairContract: pair.contract,
    precision: tickPrecision.day1,
    periods: 100
  })

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleSmaChange = (event) => {
    const newSmaPeriod = event.target.value
    setSmaPeriods(newSmaPeriod)
  }

  return (
    <ChartContainer>
      <form onSubmit={handleSubmit}>
        <label htmlFor='temp-input'>TEMP</label>
        <select id='temp-input'>
          <option value='1D'>1D</option>
          <option value='1M'>1M</option>
        </select>

        <label htmlFor='sma-input'>SMA</label>
        <input id='sma-input' type='number' value={smaPeriods} onChange={handleSmaChange} />
      </form>
      <Series type='histogram' data={chartData} />
      {showSma && <Series type='line' data={calculateSMA(chartData, smaPeriods)} />}
    </ChartContainer>
  )
}
