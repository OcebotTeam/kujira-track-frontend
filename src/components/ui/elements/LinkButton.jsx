export function LinkButton ({ href, ...props }) {
  return (
    <a href={href} className='bg-gradient-to-tr from-teal to-blue text-dark px-4 py-2 rounded-md'>
      {props.children}
    </a>
  )
}
