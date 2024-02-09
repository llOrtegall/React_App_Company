import { Link } from 'react-router-dom'
import { CalendarAntIcon, CalendarIcon, Dashboard, DocsIcon, SunIcon } from '../components/icons/Icons'
import { Card, Switch, Title } from '@tremor/react'

export const NavBar = ({ toggleTheme, darkMode }) => {
  return (
    <nav className="bg-white dark:bg-slate-900 dark:border-none dark:text-white text-black w-[35vh] p-4 flex flex-col gap-8 items-center justify-between border">

      <section className="flex flex-col gap-8 items-center">
        <Card className='flex items-center justify-between'>
          <Title className="text-center">Modo: {darkMode ? 'Claro' : 'Oscuro' }</Title>
          <Switch id="switch" name="switch" checked={darkMode} onChange={toggleTheme} />
        </Card>

        <figure className="py-4">
          <img src="ganeyumbo.png" width={100} alt="logo gane yumbo" />
        </figure>

        <ul className="flex flex-col gap-4 uppercase font-semibold">
          <li>
            <Link className="flex items-center gap-2 hover:text-yellow-400 hover:underline" to="/metas/resumen">
              <Dashboard />
              Resumen De Aspiración
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 hover:text-yellow-400 hover:underline" to="/metas/aspiracionDia">
              <SunIcon />
              Arpiración Del Día
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 hover:text-yellow-400 hover:underline" to="/metas/infmesactual">
              <CalendarIcon />
              Aspiración Mes Actual
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 hover:text-yellow-400 hover:underline" to="/metas/infmesant">
              <CalendarAntIcon />
              Aspiración Mes Anterior
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 hover:text-yellow-400 hover:underline" to="/metas/sugeridos">
              <DocsIcon />
              Sugeridos
            </Link>
          </li>
        </ul>
      </section>

      <button className="bg-blue-300 p-3 font-semibold rounded-lg hover:bg-blue-600 text-white dark:bg-white dark:text-black dark:hover:bg-blue-300">
        Cerrar Sesión
      </button>

    </nav>
  )
}
