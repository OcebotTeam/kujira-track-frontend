import { Container } from '../components/ui/layout/Container'
import { TwoColumns } from '../components/ui/layout/TwoColumns'
import { Block } from '../components/ui/elements/Block'
import { CandleChart } from '../components/charts/CandleChart'
import { EvolutionChart } from '../components/charts/EvolutionChart'

export function Dashboard(props) {
  return (
    <>
      <Container>
        <h1 className='text-dark my-4 text-3xl uppercase font-display font-bold'>Dashboard</h1>
      </Container>

      <Container>
        <TwoColumns>
          <Block title='KUJI/USK'>
            <CandleChart tickerId='KUJI_USK' price />
          </Block>
          <Block title='FIN Volume'>
            <CandleChart tickerId='KUJI_USK' volume />
          </Block>
        </TwoColumns>
      </Container>

      <Container>
        <TwoColumns>
          <Block title='Staked KUJI'>
            <EvolutionChart target='stakedtokens' />
          </Block>
        </TwoColumns>
      </Container>
    </>
  )
}
