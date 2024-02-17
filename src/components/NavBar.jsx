import { Link } from 'react-router-dom'
import { CalendarAntIcon, CalendarIcon, Dashboard, DocsIcon, SunIcon } from '../components/icons/Icons'
import { Switch } from '@tremor/react'
import { useAuth } from '../auth/AuthContext'

export const NavBar = ({ toggleTheme, darkMode, zona }) => {
  const { logout } = useAuth()

  return (
    <nav className="flex flex-col px-4 gap-2 items-center pt-10 w-[30vw] 2xl">

      <figure className=''>
        {
          zona === 39627
            ? <img src="../../public/ganeyumbo.png" width={100} alt="logo gane yumbo" className='0xl:w-40' />
            : <img src="../../public/ganejamundi.png" width={100} alt="logo gane jamundi" className='0xl:w-40' />
        }

      </figure>

      <ul className=''>
        <li>
          <Link className="hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6" to="/metas/resumen">
            <Dashboard />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg'>Resumen De Aspiración</span>
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6" to="/metas/aspiracionDia">
            <SunIcon />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg'>Arpiración Del Día</span>
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6" to="/metas/aspiracionMesActual">
            <CalendarIcon />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg'>Aspiración Mes Actual</span>
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6" to="/metas/aspiracionMesAnterior">
            <CalendarAntIcon />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg'>Aspiración Mes Anterior</span>
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6" to="/metas/sugeridos">
            <DocsIcon />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg'>Sugeridos</span>
          </Link>
        </li>
      </ul>

     <section className='pt-2 w-full flex flex-col gap-2 items-center justify-center bg-blue-700 rounded-md'>
      <p className='text-sm text-white font-semibold hidden xl:block'>Activar Modo</p>
      <Switch id="switch" name="switch" checked={darkMode} onChange={toggleTheme} className='w-full'/>
     </section>

      <button onClick={logout} className="w-full text-white font-semibold
        bg-blue-700 p-2 rounded-md hover:bg-blue-500">
        Cerrar Sesión
      </button>

    </nav>
  )
}
