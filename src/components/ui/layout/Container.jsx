export function Container (props) {
  return (
    <div className='mx-auto max-w-screen-2xl px-4 mb-4'>
      {props.children}
    </div>
  )
}
