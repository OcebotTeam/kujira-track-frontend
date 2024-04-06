export function Container (props) {
  return (
    <div className='mx-auto max-w-screen-2xl'>
      {props.children}
    </div>
  )
}
