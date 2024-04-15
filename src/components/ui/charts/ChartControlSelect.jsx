export function ChartControlSelect ({ options, value, onChange, ...props }) {
  return (
    <select
      className='bg-transparent text-light cursor-pointer border border-light outline-none rounded'
      value={value}
      onChange={onChange}
    >
      {options}
    </select>
  )
}
