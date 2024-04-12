import { PlusCircle, MinusCircle } from 'react-feather'

export function ChartControlToggler ({ label, state, onClick }) {
  return (
    <div className='flex items-center text-ligth'>
      <button
        className={(state ? 'active' : '') + ' bg-transparent cursor-pointer outline-none hover:text-teal [&.active]:hover:text-danger'}
        onClick={onClick}
      >
        {state && <MinusCircle size={20} />}
        {!state && <PlusCircle size={20} />}

      </button>
      <span className='ms-1'>{label}</span>
    </div>
  )
}
