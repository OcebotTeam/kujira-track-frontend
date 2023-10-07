import { CandleChart } from './components/CandleChart'
import { pairs } from './services/pairs'

export function App (props) {
  return (
    <CandleChart pair={pairs.KUJI_USK} />
  )
}
