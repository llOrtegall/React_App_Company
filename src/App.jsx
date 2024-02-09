import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ResumenAsp } from './Pages/ResumenAsp'
import { AspiracionMesActual } from './Pages/AspiracionMesActual'
import { AspiracionMesAnterior } from './Pages/AspiracionMesAnterior'
import { Sugeridos } from './Pages/Sugeridos'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeProvider'

export function App () {
  const { darkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <section className={'w-[100vw] h-[100vh] flex bg-tremor-background-default dark:bg-dark-tremor-background-default text-tremor-content-default dark:text-dark-tremor-content-default'}>
      <NavBar darkMode={darkMode} toggleTheme={toggleTheme}/>

      <main className='p-2 bg-white dark:bg-slate-800 w-full'>
        <Routes>
          <Route path="/metas/*" >
            <Route path="resumen" element={<ResumenAsp />} />
            <Route path="aspiracionDia" element={<ResumenAsp />} />
            <Route path="infmesactual" element={<AspiracionMesActual />} />
            <Route path="infmesant" element={<AspiracionMesAnterior />} />
            <Route path="sugeridos" element={<Sugeridos />} />
          </Route>
        </Routes>
      </main>

    </section>
  )
}
