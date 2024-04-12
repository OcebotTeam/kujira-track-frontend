export function ChartControlSelect ({ options, value, onChange, ...props }) {
  return (
    <select
      className='bg-transparent text-ligth cursor-pointer border border-ligth outline-none rounded'
      value={value}
      onChange={onChange}
    >
      {options}
    </select>
  )
}
