import { Outlet } from 'react-router-dom'
import { NavMenu } from '../navigation/NavMenu'
import { Container } from './Container.jsx'

export function Page () {
  return (
    <div className='bg-darker min-h-screen'>
      <NavMenu />
      <Outlet />
      <Container>
        <footer className='text-light mt-8 pt-4 mb-16  border-t border-gray text-sm text-center'>
          We are not part of the KUJIRA Core team, all the data collected here is just for educational use. There is no
          assurance that all the numbers provided on this site are 100% accurate.
        </footer>
      </Container>
      <div className='table clear-both' />

    </div>
  )
}
