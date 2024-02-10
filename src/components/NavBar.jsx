import { Link } from 'react-router-dom'
import { CalendarAntIcon, CalendarIcon, Dashboard, DocsIcon, SunIcon } from '../components/icons/Icons'
import { Card, Switch } from '@tremor/react'

export const NavBar = ({ toggleTheme, darkMode }) => {
  return (
    <>

      <section className="flex gap-2 px-4 py-2">

        <figure className='w-2/12 '>
          <img src="ganeyumbo.png" width={100} alt="logo gane yumbo" />
        </figure>

        <ul className='w-6/12 flex justify-around'>
          <li>
            <Link className="hover:text-yellow-200 hover:underline" to="/metas/resumen">
              <Dashboard />
              <span className='hidden text-xs'>Resumen De Aspiración</span>
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-200 hover:underline" to="/metas/aspiracionDia">
              <SunIcon />
              <span className='hidden text-xs'>Arpiración Del Día</span>
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-200 hover:underline" to="/metas/infmesactual">
              <CalendarIcon />
              <span className='hidden text-xs'>Aspiración Mes Actual</span>
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-200 hover:underline" to="/metas/infmesant">
              <CalendarAntIcon />
              <span className='hidden text-xs'>Aspiración Mes Anterior</span>
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-200 hover:underline" to="/metas/sugeridos">
              <DocsIcon />
              <span className='hidden text-xs'>Sugeridos</span>
            </Link>
          </li>
        </ul>

        <Card className='w-2/12 h-14 flex items-center'>
          <p className="text-center text-xs">Modo:</p>
          <Switch id="switch" name="switch" checked={darkMode} onChange={toggleTheme} />
        </Card>

        <button className="w-2/12 h-14 bg-blue-500 p-2 font-semibold rounded-lg hover:bg-blue-600 text-white dark:bg-white dark:text-black dark:hover:bg-blue-500">
          Cerrar Sesión
        </button>

      </section>

    </>
  )
}
