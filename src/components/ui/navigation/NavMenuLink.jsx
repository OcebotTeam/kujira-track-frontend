import { NavLink } from 'react-router-dom'

export function NavMenuLink ({ href, outline, children }) {
  return (
    <NavLink to={href} className={'me-4 text-white hover:text-teal [&.active]:text-teal ' + (outline ? 'border border-white rounded-full py-0.5 px-3' : '')}>
      {children}
    </NavLink>
  )
}
