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

  return evolution
}
