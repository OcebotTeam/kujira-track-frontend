import { CandleChart } from './components/CandleChart'

export function App (props) {
  return (
    <>
      <CandleChart tickerId='KUJI_USK' price />
      <CandleChart tickerId='KUJI_USK' volume />
    </>
  )
}
