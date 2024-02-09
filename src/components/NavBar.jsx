import { Link } from 'react-router-dom'
import { CalendarAntIcon, CalendarIcon, Dashboard, DocsIcon, SunIcon } from '../components/icons/Icons'

export const NavBar = () => {
  return (
    <nav className="bg-black text-white w-[35vh] p-4 flex flex-col gap-8 items-center justify-between">
      <section className="flex flex-col gap-4 items-center">
        <figure className="py-12">
          <img src="ganeyumbo.png" width={100} alt="logo gane yumbo" />
        </figure>

        <ul className="flex flex-col gap-4 uppercase font-semibold">
          <li>
            <Link className="flex items-center gap-2 hover:text-yellow-400 hover:underline" to="/resumen">
              <Dashboard />
              Resumen De Aspiración
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 hover:text-yellow-400 hover:underline" to="/resumendia">
              <SunIcon />
              Arpiración Del Día
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 hover:text-yellow-400 hover:underline" to="/infmesactual">
              <CalendarIcon />
              Aspiración Mes Actual
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 hover:text-yellow-400 hover:underline" to="/infmesant">
              <CalendarAntIcon />
              Aspiración Mes Anterior
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 hover:text-yellow-400 hover:underline" to="/sugeridos">
              <DocsIcon />
              Sugeridos
            </Link>
          </li>
        </ul>
      </section>

      <button className="bg-blue-800 p-3 font-semibold rounded-lg hover:bg-blue-600">
        Cerrar Sesión
      </button>

    </nav>
  )
}
