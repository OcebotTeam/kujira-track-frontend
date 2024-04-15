import tailwindConfig from '../../../tailwind.config'
import { useEvolution } from '../../hooks/useEvolution'
import { ChartContainer } from './ChartContainer'
import { Series } from './Series'

export function EvolutionDiffChart ({ target }) {
  const { evolution } = useEvolution(target, true)

  const evolutionFormatted = evolution.map((item) => {
    item.color = tailwindConfig.theme.colors.blue
    if (item.value > 0) item.color = tailwindConfig.theme.colors.teal
    return item
  })

  return (
    <ChartContainer>
      <Series type='histogram' data={evolutionFormatted} />
    </ChartContainer>
  )
}
