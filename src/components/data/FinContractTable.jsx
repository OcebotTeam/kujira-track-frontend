import { useFinContracts } from '../../hooks/useFinContracts.js'
import { FinContractTableRow } from './FinContractTableRow.jsx'

export function FinContractTable () {
  const contracts = useFinContracts()

  return (
    <div>
      <table className='table-auto w-full'>
        <tbody>
          {contracts.map(contract => (
            <FinContractTableRow key={contract.tickerId} tickerId={contract.tickerId} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
