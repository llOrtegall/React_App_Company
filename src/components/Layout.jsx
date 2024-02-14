import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export function Layout () {
  return (
    <section className='flex h-full'>
    <nav className='w-[20vw]'>
      <NavBar />
    </nav>
    <main className='w-[80vw]'>
      <Outlet />
    </main>
    </section>
  )
}
