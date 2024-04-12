import { useState } from 'react'

export function useSma (initialStatus = false, initialPeriods = 30) {
  const [smaActive, setSmaAtive] = useState(initialStatus)
  const [smaPeriods, setSmaPeriods] = useState(initialPeriods)

  const sma = (baseData) => {
    if (smaPeriods <= 1) {
      return baseData
    }

    const data = Object.values(baseData)

    const avg = function (data) {
      let sum = 0
      for (let i = 0; i < data.length; i++) {
        sum += data[i].value
      }
      return sum / data.length
    }

    const result = []

    for (let i = smaPeriods - 1, len = data.length; i < len; i++) {
      const val = avg(data.slice(i - smaPeriods + 1, i))
      result.push({ time: data[i].time, value: val })
    }

    return result
  }

  const toggleSma = () => {
    setSmaAtive(!smaActive)
  }

  const changeSmaPeriods = (periods) => {
    setSmaPeriods(periods)
  }

  return {
    sma,
    smaPeriods,
    toggleSma,
    changeSmaPeriods,
    smaActive
  }
}
