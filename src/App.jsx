import { Chart } from './components/Chart'
import { Series } from './components/Series'

export function App (props) {
  return (
    <Chart>
      <Series type='histogram' />
      <Series type='line' />
    </Chart>
  )
}
