import { NavLink } from 'react-router-dom'

export function NavMenuLink ({ href, children }) {
  return (
    <NavLink to={href} className='me-4 text-white hover:text-teal [&.active]:text-teal'>{children}</NavLink>
  )
}
