export function Block ({ title, ...props }) {
  return (
    <div className='bg-dark p-4 rounded-md'>
      <h3 className='text-white text-xl mb-3'>{title}</h3>
      {props.children}
    </div>
  )
}
