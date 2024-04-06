export function NavMenuLink ({href, children}) {
  return (
    <a href={href} className='me-4 text-white hover:text-teal'>{children}</a>
  )
}
