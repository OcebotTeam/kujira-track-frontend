import { useEvolution } from '../../hooks/useEvolution'
import { ChartContainer } from './ChartContainer'
import { Series } from './Series'
import { ArrowUp, ArrowDown } from 'react-feather'

export function EvolutionChart ({ target, title }) {
  const {
    evolution,
    variationPercentage
  } = useEvolution(target)

  const colorClass = variationPercentage > 0 ? 'text-teal' : 'text-danger'
  const symbol = variationPercentage > 0 ? <ArrowUp size='15' /> : <ArrowDown size='15' />

  return (
    <>
      <div className='flex items-center mb-3'>
        <h2 className='text-white text-xl'>{title}</h2>
        <span className={'border ms-3 rounded px-1 flex items-center text-sm ' + colorClass}>{symbol}{variationPercentage}%</span>
      </div>
      <ChartContainer>
        <Series type='area' data={evolution} />
      </ChartContainer>
    </>
  )
}
