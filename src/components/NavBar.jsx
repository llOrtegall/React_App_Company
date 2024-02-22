import { Link } from 'react-router-dom'
import { CalendarAntIcon, CalendarIcon, Dashboard, DocsIcon, SunIcon } from '../components/icons/Icons.jsx'
import { LogoImage } from './LogoImage.jsx'
import { Switch } from '@tremor/react'
import { useAuth } from '../auth/AuthContext'

export const NavBar = ({ toggleTheme, darkMode, zona }) => {
  const { logout } = useAuth()

  return (
    <nav className="flex flex-col px-4 gap-2 justify-around h-[90vh] items-center pt-10 w-[30vw] 2xl">

      <figure className=''>
        <LogoImage zona={zona} key={zona} />
      </figure>

      <ul className='flex flex-col gap-2 2xl:gap-4'>
        <li>
          <Link className="hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6" to="/metas/resumen">
            <Dashboard />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg 2xl:text-2xl'>Resumen De Aspiración</span>
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6" to="/metas/aspiracionDia">
            <SunIcon />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg 2xl:text-2xl'>Aspiración Del Día</span>
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6" to="/metas/aspiracionMesActual">
            <CalendarIcon />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg 2xl:text-2xl'>Aspiración Mes Actual</span>
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6" to="/metas/aspiracionMesAnterior">
            <CalendarAntIcon />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg 2xl:text-2xl'>Aspiración Mes Anterior</span>
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6" to="/metas/sugeridos">
            <DocsIcon />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg 2xl:text-2xl'>Sugeridos</span>
          </Link>
        </li>
      </ul>

      <section className='w-full flex flex-col gap-2 2xl:gap-4 items-center justify-center'>
        <section className='pt-4 min-w-56 py-2 flex justify-center bg-blue-700 rounded-md'>
          <Switch id="switch" name="switch" checked={darkMode} onChange={toggleTheme} className='w-full' />
        </section>

        <button onClick={logout} className="min-w-56 2xl:py-4 text-white font-semibold
        bg-blue-700 p-2 rounded-md hover:bg-blue-500">
          Cerrar Sesión
        </button>
      </section>

    </nav>
  )
}
