import { Container } from '../components/ui/layout/Container'
import { TwoColumns } from '../components/ui/layout/TwoColumns'
import { ThreeColumns } from '../components/ui/layout/ThreeColumns'
import { Block } from '../components/ui/elements/Block'
import { CandleChart } from '../components/charts/CandleChart'
import { EvolutionChart } from '../components/charts/EvolutionChart'
import { EvolutionDiffChart } from '../components/charts/EvolutionDiffChart'
import { useToken } from '../hooks/useToken.js'
import { TrendingUp } from 'react-feather'

export function Dashboard () {
  const kujiPrice = useToken('KUJI')

  return (
    <>
      <Container>
        <h1 className='text-dark my-4 text-3xl uppercase font-display font-bold'>Dashboard</h1>
      </Container>

      <Container>
        <TwoColumns>
          <Block>
            <CandleChart tickerId='KUJI_USK' price />
          </Block>
          <Block>
            <CandleChart tickerId='KUJI_USK' volume />
          </Block>
        </TwoColumns>
      </Container>

      <Container>
        <ThreeColumns>
          <Block bg='bg-blue'>
            <div className='grid grid-cols-2'>
              <div className='text-white flex items-center'>
                <TrendingUp className='inline-block mr-2' />
                <span className='text-md font-bold'>KUJI price</span>
              </div>
              <div className='text-right text-lg font-light'>${kujiPrice}</div>
            </div>
          </Block>
          <Block bg='bg-gradient-to-l from-teal to-blue'>
            ...
          </Block>
          <Block bg='bg-teal'>
            ...
          </Block>
        </ThreeColumns>
      </Container>

      <Container>
        <TwoColumns>
          <Block>
            <EvolutionChart title='Staked KUJI' target='/staking' />
          </Block>

          <Block>
            <EvolutionDiffChart title='Staked KUJI' target='/staking' />
          </Block>
        </TwoColumns>
      </Container>

      <Container>
        <TwoColumns>
          <Block>
            <EvolutionChart target='/v2/wallets' title='Wallets' />
          </Block>

          <Block>
            <EvolutionDiffChart title='Wallets' target='/v2/wallets' />
          </Block>
        </TwoColumns>
      </Container>

      <Container>
        <TwoColumns>
          <Block>
            <EvolutionChart title='Mint' target='/mint/aggregation' />
          </Block>

          <Block>
            <EvolutionDiffChart title='Mint' target='/mint/aggregation' />
          </Block>
        </TwoColumns>
      </Container>
    </>
  )
}
