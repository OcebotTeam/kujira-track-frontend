import { useEffect, useState } from 'react'
import { getTimeframes } from '../services/getTimeframes'

export function useTimeframe () {
  const [timeframes, setTimeframes] = useState([])
  const [timeframe, setTimeframe] = useState({})

  useEffect(() => {
    getTimeframes()
      .then(data => {
        setTimeframes(data)
        setTimeframe(data[0])
      })
  }, [])

  const changeTimeframe = (timeframeKey) => {
    const newTimeframe = timeframes.find(timeframe => timeframe.apiKey === timeframeKey)
    setTimeframe(newTimeframe)
  }

  const currentTimeframe = () => {
    return timeframe.apiKey
  }

  const currentPrecision = () => {
    return timeframe.precision
  }

  const timeframesList = () => {
    return timeframes.map(timeframe => timeframe.apiKey)
  }

  return {
    changeTimeframe,
    currentTimeframe,
    currentPrecision,
    timeframesList
  }
}
