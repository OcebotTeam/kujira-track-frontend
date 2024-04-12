import { TokenList } from '../components/data/TokenList'
import { Container } from '../components/ui/layout/Container'

export function Tokens () {
  return (
    <>
      <Container>
        <h1 className='text-dark my-4 text-3xl uppercase font-display font-bold'>Tokens</h1>
      </Container>

      <Container>
        <TokenList />
      </Container>
    </>
  )
}
