import { useState, useEffect } from 'react'
import { getEvolution } from '../services/getEvolution'

export function useEvolution (type, diff) {
  const [evolution, setEvolution] = useState([])

  useEffect(() => {
    getEvolution(type, diff)
      .then(data => {
        setEvolution(data)
      })
  }, [])

  // Variation percentage between the last element and the previous one
  const variationPercentage = evolution.length > 1
    ? ((evolution[evolution.length - 1].value - evolution[evolution.length - 2].value) / evolution[evolution.length - 2].value * 100).toFixed(2)
    : 0

  return { evolution, variationPercentage }
}
