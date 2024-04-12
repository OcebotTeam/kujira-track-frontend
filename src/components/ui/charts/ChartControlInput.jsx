export function ChartControlInput ({ label, value, onChange, ...props }) {
  return (
    <input
      type='number'
      className='bg-transparent text-ligth cursor-pointer border border-ligth outline-none rounded ms-2 ps-1.5 w-16'
      value={value}
      onChange={onChange}
    />
  )
}
