import { InfoPuntCoord } from './InfoPuntoCoor'
import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export function Layout ({ darkMode, toggleTheme, categoria, nombre, supervisor, version, codigo, zona }) {
  return (
    <>
      <NavBar darkMode={darkMode} toggleTheme={toggleTheme} zona={zona}/>
      <main className='flex flex-col w-full items-center px-2'>
        <InfoPuntCoord key={codigo} CATEGORIA={categoria} NOMBRE={nombre} SUPERVISOR={supervisor} VERSION={version} />
        <Outlet />
      </main>

    </>
  )
}
