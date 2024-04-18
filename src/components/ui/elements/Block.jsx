export function Block ({ title, ...props }) {
  const titleElement = title
    ? <h3 className='text-white text-xl mb-3'>{title}</h3>
    : ''

  // Check if the block has a background color and, if no, set the default one
  const bgClass = props.bg ? props.bg : 'bg-dark'

  return (
    <div className={'p-4 rounded-md ' + bgClass}>
      {titleElement}
      {props.children}
    </div>
  )
}
