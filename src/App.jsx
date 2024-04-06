import './output.css'

import { Container } from './components/ui/layout/Container'
import { TwoColumns } from './components/ui/layout/TwoColumns'
import { Page } from './components/ui/Page'
import { Navigation } from './components/ui/Navigation'
import { Block } from './components/ui/elements/Block'
import { CandleChart } from './components/charts/CandleChart'

export function App (props) {
  return (
    <Page>

      <Navigation />

      <div className='mx-4'>
        <Container>
          <h1 className='text-dark my-4 text-3xl uppercase font-display'>Dashboard</h1>

          <TwoColumns>

            <Block>
              <CandleChart tickerId='KUJI_USK' price />
            </Block>

            <Block>
              <CandleChart tickerId='KUJI_USK' volume />
            </Block>

          </TwoColumns>
        </Container>
      </div>

    </Page>
  )
}
