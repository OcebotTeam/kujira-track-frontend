import tailwindConfig from '../../../tailwind.config'
import { useEvolution } from '../../hooks/useEvolution'
import { ChartContainer } from './ChartContainer'
import { Series } from './Series'
import { useAmountFormatter } from '../../hooks/useAmountFormatter.js'

export function EvolutionDiffChart ({ target, title }) {
  const {
    evolution,
    lastValue
  } = useEvolution(target, true)

  const formattedLastValue = useAmountFormatter(lastValue)

  const evolutionFormatted = evolution.map((item) => {
    item.color = tailwindConfig.theme.colors.blue
    if (item.value > 0) item.color = tailwindConfig.theme.colors.teal
    return item
  })

  const colorClass = lastValue > 0 ? 'text-teal' : 'text-danger'
  const symbol = lastValue > 0 ? '+' : ''

  return (
    <>
      <div className='flex items-center mb-3'>
        <h2 className='text-white text-xl'>{title}</h2>
        <span className={'border ms-3 rounded px-1 flex items-center text-sm ' + colorClass}>{symbol}{formattedLastValue}</span>
      </div>
      <ChartContainer>
        <Series type='histogram' data={evolutionFormatted} />
      </ChartContainer>
    </>
  )
}
