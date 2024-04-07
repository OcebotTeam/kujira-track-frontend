import { useState, useEffect } from 'react'
import { getEvolution } from '../services/getEvolution'

export function useEvolution (type) {
  const [evolution, setEvolution] = useState([])

  useEffect(() => {
    getEvolution(type)
      .then(data => {
        setEvolution(data)
      })
  }, [type])

  return evolution
}
