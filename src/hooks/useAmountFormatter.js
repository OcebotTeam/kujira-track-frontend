export function useAmountFormatter (value) {
  if (value < 1000 && value > -1000) return value
  if (value < 1000000 && value > -1000000) return (value / 1000).toFixed(1) + 'k'
  return (value / 1000000).toFixed(1) + 'M'
}
