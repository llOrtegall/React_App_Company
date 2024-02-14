import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export function Layout () {
  return (
    <>
    <nav className='flex w-[20vw]'>
      <NavBar />
    </nav>
    <main className='flex'>
      <Outlet />
    </main>
    </>
  )
}
