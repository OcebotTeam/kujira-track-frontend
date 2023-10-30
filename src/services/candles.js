const dateToApiFormat = (date, tzString = 'UTC') => {
  const formatedDate = new Date(
    (typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {
      timeZone: tzString
    })
  )

  return formatedDate.toISOString()
}

const chartDataFormat = (data) => {
  return data.map((candle) => {
    // Parse to number
    candle.volume = Number(candle.volume)
    candle.high = Number(candle.high)
    candle.low = Number(candle.low)
    candle.open = Number(candle.open)
    candle.close = Number(candle.close)

    // Volume map
    candle.value = candle.volume

    // Time in UTCTimestamp format
    candle.time = Math.floor(new Date(candle.bin) / 1000)

    // Clean empty candles
    if (candle.close == null && candle.open == null) {
      return { time: candle.time }
    }

    return candle
  })
}

export function getCandles ({ pairContract, precision, daysPeriod, batch }) {
  const toDate = new Date()
  toDate.setSeconds(0)
  toDate.setMinutes(0)
  toDate.setDate(toDate.getDate() - daysPeriod * (batch - 1))
  // console.log(toDate.getDate);

  const fromDate = new Date()
  fromDate.setSeconds(0)
  fromDate.setMinutes(0)
  fromDate.setDate(fromDate.getDate() + 1 - daysPeriod * batch)

  const baseEnpoint = 'https://kuji.dev.beepolar.com/index.php'
  const endpoint = `${baseEnpoint}/kbridge/cached/candles?contract=${pairContract}&precision=${precision}&from=${dateToApiFormat(fromDate)}&to=${dateToApiFormat(toDate)}`

  return fetch(endpoint)
    .then(response => response.json())
    .then(json => {
      return chartDataFormat(json.candles)
    })
}
