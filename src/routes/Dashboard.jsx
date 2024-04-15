import { Container } from '../components/ui/layout/Container'
import { TwoColumns } from '../components/ui/layout/TwoColumns'
import { Block } from '../components/ui/elements/Block'
import { CandleChart } from '../components/charts/CandleChart'
import { EvolutionChart } from '../components/charts/EvolutionChart'
import { EvolutionDiffChart } from '../components/charts/EvolutionDiffChart'

export function Dashboard () {
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
        <TwoColumns>
          <Block>
            <EvolutionChart target='staking' title='Staked KUJI' />
          </Block>

          <Block title='Staked KUJI Diff'>
            <EvolutionDiffChart target='staking' diff />
          </Block>
        </TwoColumns>
      </Container>

      <Container>
        <TwoColumns>
          <Block>
            <EvolutionChart target='v2/wallets' title='Wallets' />
          </Block>

          <Block title='Wallets'>
            <EvolutionDiffChart target='v2/wallets' diff />
          </Block>
        </TwoColumns>
      </Container>
    </>
  )
}
