import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ResumenAsp } from './Pages/ResumenAsp'
import { AspiracionMesActual } from './Pages/AspiracionMesActual'
import { AspiracionMesAnterior } from './Pages/AspiracionMesAnterior'
import { AspiracionDelDia } from './Pages/AspiracionDelDia'
import { Sugeridos } from './Pages/Sugeridos'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeProvider'

import { MetasxHora } from './components/MetasPorHora'
import { LoginForm } from './Pages/LoginForm'
import { useAuth } from './auth/AuthContext'

export function App () {
  const { darkMode, toggleTheme } = useContext(ThemeContext)
  const { loggedIn, user } = useAuth()

  if (loggedIn === false) {
    return <LoginForm />
  }

  return (
    user && (
      <section className={'min-h-[100vh] bg-tremor-background-default dark:bg-dark-tremor-background-default text-tremor-content-default dark:text-dark-tremor-content-default lg:flex '}>
        <nav className="  dark:bg-slate-900 dark:border-none dark:text-white text-black lg:w-[20vw] lg:h-[100vh]">
          <NavBar darkMode={darkMode} toggleTheme={toggleTheme} />
        </nav>

        <main className='py-2 px-1 bg-white dark:bg-slate-800 lg:w-[85vw]'>
          <Routes>
            <Route path="/metas/*" >
              <Route path="resumen" element={<ResumenAsp />} />
              <Route path="aspiracionDia" element={<AspiracionDelDia />} />
              <Route path="infmesactual" element={<AspiracionMesActual />} />
              <Route path="infmesant" element={<AspiracionMesAnterior />} />
              <Route path='producto/:producto' element={<MetasxHora />} />
              <Route path="sugeridos" element={<Sugeridos />} />
            </Route>
          </Routes>
        </main>
      </section>
    )
  )
}
