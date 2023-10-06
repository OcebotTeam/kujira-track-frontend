import { useEffect, useState } from 'react'

export function useChartData ({ pairContract, precision, periods }) {
  const [data, setData] = useState([])

  const dateToApiFormat = (date, tzString = 'UTC') => {
    const formatedDate = new Date(
      (typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {
        timeZone: tzString
      })
    )

    return formatedDate.toISOString()
  }

  const fetchChartData = () => {
    const toDate = new Date()
    const fromDate = new Date()

    toDate.setSeconds(0)
    toDate.setMinutes(0)
    fromDate.setSeconds(0)
    fromDate.setMinutes(0)
    fromDate.setDate(fromDate.getDate() - periods + 1)

    const baseEnpoint = 'https://kuji.dev.beepolar.com/index.php'
    const endpoint = `${baseEnpoint}/kbridge/cached/candles?contract=${pairContract}&precision=${precision}&from=${dateToApiFormat(fromDate)}&to=${dateToApiFormat(toDate)}`

    return fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        return formatChartData(json.candles)
      })
  }

  const formatChartData = (data) => {
    return data.map((candle) => {
      // Time in UTCTimestamp format
      candle.time = Math.floor(new Date(candle.bin) / 1000)
      candle.value = Number(candle.volume)

      // Clean empty candles
      if (candle.close == null && candle.open == null) {
        return { time: candle.time }
      }

      return candle
    })
  }

  useEffect(() => {
    fetchChartData(precision)
      .then(data => setData(data))
  }, [])

  return data
}
