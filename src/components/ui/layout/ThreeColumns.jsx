export function ThreeColumns (props) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 divide-white gap-4'>
      {props.children}
    </div>
  )
}
