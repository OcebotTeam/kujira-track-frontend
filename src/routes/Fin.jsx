import { Container } from '../components/ui/layout/Container'
import { TwoColumns } from '../components/ui/layout/TwoColumns.jsx'
import { Block } from '../components/ui/elements/Block.jsx'
import { CandleChart } from '../components/charts/CandleChart.jsx'
import { FinContractTable } from '../components/data/FinContractTable.jsx'

export function Fin () {
  return (
    <>
      <Container>
        <h1 className='text-white my-4 text-3xl uppercase font-display font-bold'>FIN metrics</h1>
      </Container>

      <Container>
        <TwoColumns>
          <Block>
            <CandleChart title='FIN USD volume' target='/fin/usd-volume' volume />
          </Block>
          <Block>
            ...
          </Block>
        </TwoColumns>
      </Container>

      <Container>
        <FinContractTable />
      </Container>
    </>
  )
}
