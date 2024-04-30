export function LinkButton ({ href, target, ...props }) {
  return (
    <a href={href} target={target} className='bg-gradient-to-tr from-teal to-blue text-dark px-4 py-1.5 rounded-full'>
      {props.children}
    </a>
  )
}
