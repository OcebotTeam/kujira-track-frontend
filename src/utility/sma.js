export function calculateSMA (data, periods) {
  if (periods <= 1) {
    return data
  }

  data = Object.values(data)
  const avg = function (data) {
    let sum = 0
    for (let i = 0; i < data.length; i++) {
      sum += data[i].value
    }
    return sum / data.length
  }

  const result = []

  for (let i = periods - 1, len = data.length; i < len; i++) {
    const val = avg(data.slice(i - periods + 1, i))
    result.push({ time: data[i].time, value: val })
  }

  return result
}
