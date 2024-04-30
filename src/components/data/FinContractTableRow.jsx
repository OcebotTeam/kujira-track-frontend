export function FinContractTableRow ({ tickerId }) {
  return (
    <tr className='border-y'>
      <td className='py-4'>#</td>
      <td>{tickerId}</td>
    </tr>
  )
}
