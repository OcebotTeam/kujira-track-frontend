import { useEvolution } from '../../hooks/useEvolution'
import { ChartContainer } from './ChartContainer'
import { Series } from './Series'

export function EvolutionChart ({ target }) {
  const evolution = useEvolution(target)

  return (
    <ChartContainer>
      <Series type='area' data={evolution} />
    </ChartContainer>
  )
}
