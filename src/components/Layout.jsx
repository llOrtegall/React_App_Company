import { InfoPuntCoord } from './InfoPuntoCoor'
import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export function Layout ({ darkMode, toggleTheme, user, zone }) {
  return (
    <>

      <NavBar darkMode={darkMode} toggleTheme={toggleTheme} zona={zone}/>

      <main className='w-[80vw] px-4'>
        <InfoPuntCoord codigo={user}/>
        <Outlet />
      </main>

    </>
  )
}
