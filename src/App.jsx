import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ResumenAsp } from './Pages/ResumenAsp'
import { AspiracionMesActual } from './Pages/AspiracionMesActual'
import { AspiracionMesAnterior } from './Pages/AspiracionMesAnterior'
import { AspiracionDelDia } from './Pages/AspiracionDelDia'
import { Sugeridos } from './Pages/Sugeridos'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeProvider'
// import { MetasPorHora } from './components/MetasPorHora'

import { MetasxHora2 } from './components/MetasPorHora2'

export function App () {
  const { darkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <section className={'min-h-[100vh] bg-tremor-background-default dark:bg-dark-tremor-background-default text-tremor-content-default dark:text-dark-tremor-content-default lg:flex '}>

      <nav className="  dark:bg-slate-900 dark:border-none dark:text-white text-black lg:w-[25vw] lg:h-full">
        <NavBar darkMode={darkMode} toggleTheme={toggleTheme}/>
      </nav>

      <main className='py-2 px-1 bg-white dark:bg-slate-800 lg:w-[75vw]'>
        <Routes>
          <Route path="/metas/*" >
            <Route path="resumen" element={<ResumenAsp />} />
            <Route path="aspiracionDia" element={<AspiracionDelDia />} />
            <Route path="infmesactual" element={<AspiracionMesActual />} />
            <Route path="infmesant" element={<AspiracionMesAnterior />} />
            {/* <Route path="porhora" element={<MetasPorHora />} /> */}
            <Route path='producto/:producto' element={<MetasxHora2 />} />
            <Route path="sugeridos" element={<Sugeridos />} />
          </Route>
        </Routes>
      </main>

    </section>
  )
}
