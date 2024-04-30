import logoImg from '../../../../assets/images/logo.png'
import { NavMenuLink } from './NavMenuLink'
import { LinkButton } from '../elements/LinkButton'

export function NavMenu (props) {
  return (
    <nav className='p-4 flex items-center justify-between'>

      <div className='flex items-center'>

        <a href='/' className='inline-flex items-center'>
          <span className='text-white uppercase font-bold font-display'>Kujira</span>
          <img src={logoImg} className='inline w-8 mx-1.5' />
          <span className='text-white uppercase font-bold font-display'>Track</span>
        </a>

        <div className='ms-14'>
          <NavMenuLink href='/'>Dashboard</NavMenuLink>
          <NavMenuLink href='/tokens'>Tokens</NavMenuLink>
          <NavMenuLink href='/fin'>FIN</NavMenuLink>
          <NavMenuLink href='/api/doc'>API</NavMenuLink>
        </div>

      </div>

      <div>
        <LinkButton href='/'>STAKE</LinkButton>
      </div>

      {props.children}

    </nav>
  )
}
