import { Container } from '../components/ui/layout/Container'
import { TwoColumns } from '../components/ui/layout/TwoColumns'
import { ThreeColumns } from '../components/ui/layout/ThreeColumns'
import { Block } from '../components/ui/elements/Block'
import { CandleChart } from '../components/charts/CandleChart'
import { EvolutionChart } from '../components/charts/EvolutionChart'
import { EvolutionDiffChart } from '../components/charts/EvolutionDiffChart'
import { useTokenPrice } from '../hooks/useTokenPrice.js'
import { TrendingUp } from 'react-feather'

export function Dashboard () {
  const kujiPrice = useTokenPrice('KUJI')

  return (
    <>
      <Container>
        <h1 className='text-white my-4 text-3xl uppercase font-display font-bold'>Dashboard</h1>
      </Container>

      <Container>
        <TwoColumns>
          <Block>
            <CandleChart title='KUJI/USK' target='/fin/contracts/KUJI_USK/candles' price />
          </Block>
          <Block>
            <CandleChart title='FIN USD volume' target='/fin/usd-volume' volume />
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
              <div className='text-right text-white text-lg font-light'>${kujiPrice}</div>
            </div>
          </Block>
          <Block bg='bg-gradient-to-tl md:bg-gradient-to-l from-teal to-blue'>
            Placeholder
          </Block>
          <Block bg='bg-teal'>
            Placeholder
          </Block>
        </ThreeColumns>
      </Container>

      <Container>
        <TwoColumns>
          <Block>
            <EvolutionChart title='Staking Evolution' target='/staking' />
          </Block>

          <Block>
            <EvolutionDiffChart title='Staking Activity' target='/staking' />
          </Block>
        </TwoColumns>
      </Container>

      <Container>
        <TwoColumns>
          <Block>
            <EvolutionChart title='Wallets evolution' target='/v2/wallets' />
          </Block>

          <Block>
            <EvolutionDiffChart title='Wallets activity' target='/v2/wallets' />
          </Block>
        </TwoColumns>
      </Container>

      <Container>
        <TwoColumns>
          <Block>
            <EvolutionChart title='Mint evolution' target='/mint/aggregation' />
          </Block>

          <Block>
            <EvolutionDiffChart title='Mint activity' target='/mint/aggregation' />
          </Block>
        </TwoColumns>
      </Container>
    </>
  )
}
