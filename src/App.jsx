import { Chart } from './components/Chart'
import { Series } from './components/Series'
import { useChartData } from './hooks/useChartData'
import { pairs } from './services/pairs'

export function App (props) {
  const chartData = useChartData({
    pairContract: pairs.KUJI_axlUSDC.contract,
    precision: '1D',
    periods: 100
  })

  return (
    <Chart>
      <Series type='histogram' data={chartData} />
      <Series type='line' data={chartData} />
    </Chart>
  )
}
