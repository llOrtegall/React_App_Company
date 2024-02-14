import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export function Layout ({ darkMode, toggleTheme }) {
  return (
    <section className='flex h-full'>
      <nav className='w-[20vw]'>
        <NavBar darkMode={darkMode} toggleTheme={toggleTheme}/>
      </nav>
      <main className='w-[80vw]'>
        <Outlet />
      </main>
    </section>
  )
}
