import { Link, useNavigate } from 'react-router-dom'
import { CalendarAntIcon, CalendarIcon, Dashboard, DocsIcon, SunIcon } from '../components/icons/Icons'
import { Card, Switch } from '@tremor/react'

export const NavBar = ({ toggleTheme, darkMode }) => {
  const navigate = useNavigate()

  return (
    <>

      <section className="flex lg:flex-col gap-2 px-4 py-2 items-center lg:gap-8 lg:py-12">

        <figure className='w-2/12 lg:w-full lg:flex lg:justify-center'>
          <img src="../../public/ganeyumbo.png" width={100} alt="logo gane yumbo" className='0xl:w-40'/>
        </figure>

        <ul className='w-6/12 flex justify-around lg:flex-col lg:w-full 0xl:gap-2'>
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
            <Link className="hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6" to="/metas/infmesactual">
              <CalendarIcon />
              <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg'>Aspiración Mes Actual</span>
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6" to="/metas/infmesant">
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

        <Card className='w-2/12 h-12 p-0 flex bg-gray-900 text-white items-center justify-center gap-2 lg:w-full lg:h-10 lg:my-8 0xl:my-6 0xl:h-14'>
          <p className="text-center text-xs 0xl:text-lg 0xl:font-semibold">Modo:</p>
          <Switch id="switch" name="switch" checked={darkMode} onChange={toggleTheme}/>
        </Card>

        <button onClick={navigate('/login')} className="w-2/12 h-12 bg-blue-500 p-2 font-semibold rounded-lg hover:bg-blue-600 text-white dark:bg-gray-300 dark:text-black dark:hover:bg-blue-500 lg:w-full lg:h-10 lg:my-8 0xl:my-6 0xl:h-14">
          Cerrar Sesión
        </button>

      </section>

    </>
  )
}
