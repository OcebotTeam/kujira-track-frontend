import logoImg from '../../../../assets/images/logo.png'
import { NavMenuLink } from './NavMenuLink'
import { LinkButton } from '../elements/LinkButton'

export function NavMenu (props) {
  return (
    <nav className='p-4 flex items-center justify-between'>

      <div className='flex items-center'>

        <a href='/' className='inline-flex items-center'>
          <span className='text-white uppercase font-bold font-display'>
            Kujira
            <img src={logoImg} className='inline w-8 mx-1.5' />
            Track
          </span>
        </a>

        <div className='ms-14'>
          <NavMenuLink href='/'>Dashboard</NavMenuLink>
          <NavMenuLink href='/fin'>FIN</NavMenuLink>
        </div>

      </div>

      <div>
        <LinkButton href='/'>STAKE</LinkButton>
      </div>

      {props.children}

    </nav>
  )
}
