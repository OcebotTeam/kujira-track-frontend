import { Outlet } from 'react-router-dom'
import { NavMenu } from '../navigation/NavMenu'

export function Page () {
  return (
    <div className='bg-darker min-h-screen'>
      <NavMenu />
      <Outlet />
      <div className='table clear-both' />
    </div>
  )
}
