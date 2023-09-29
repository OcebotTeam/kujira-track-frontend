import { useEffect, useState } from 'react'

function formatChartData (data) {
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

function fetchChartData (precision) {
  const endpoint = `https://kuji.dev.beepolar.com/index.php/kbridge/cached/candles?contract=kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867&precision=${precision}&from=2022-09-30T17:00:00.000Z&to=2023-09-29T17:00:00.000Z`

  return fetch(endpoint)
    .then(response => response.json())
    .then(json => {
      return formatChartData(json.candles)
    })
}

export function useChartData ({ precision }) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchChartData(precision)
      .then(data => setData(data))
  }, [])

  return data
}
