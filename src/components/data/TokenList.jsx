import { useState, useEffect } from 'react'
import { getTokens } from '../../services/getTokens'

export function TokenList () {
  const [tokens, setTokens] = useState([])

  useEffect(() => {
    getTokens()
      .then(data => {
        setTokens(data)
      })
  }, [])

  const tokenList = tokens.map(token => {
    return (
      <div key={token.symbol}>
        <h2>{token.name}</h2>
        <p>{token.symbol}</p>
      </div>
    )
  })

  return (
    <div className='text-white'>
      {tokenList}
    </div>
  )
}
