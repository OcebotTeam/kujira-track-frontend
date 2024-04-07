import { Link } from 'react-router-dom'

export function NavMenuLink ({ href, children }) {
  return (
    <Link to={href} className='me-4 text-white hover:text-teal'>{children}</Link>
  )
}
