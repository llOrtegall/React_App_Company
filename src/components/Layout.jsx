import { InfoPuntCoord } from './InfoPuntoCoor'
import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export function Layout ({ darkMode, toggleTheme, user, zone }) {
  return (
    <>
      <NavBar darkMode={darkMode} toggleTheme={toggleTheme} zona={zone}/>
      <main className='flex flex-col w-full items-center px-2'>
        <InfoPuntCoord codigo={user}/>
        <Outlet />
      </main>

    </>
  )
}
