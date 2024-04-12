export function Block ({ title, ...props }) {
  const titleElement = title
    ? <h3 className='text-white text-xl mb-3'>{title}</h3>
    : ''

  return (
    <div className='bg-dark p-4 rounded-md'>
      {titleElement}
      {props.children}
    </div>
  )
}
