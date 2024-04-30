export function ChartControlInput ({ value, onChange }) {
  return (
    <input
      type='number'
      min={1}
      className='bg-transparent text-light cursor-pointer border border-light outline-none rounded ms-2 ps-1.5 w-16'
      value={value}
      onChange={onChange}
    />
  )
}
