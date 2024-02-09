import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ResumenAsp } from './Pages/ResumenAsp'
import { AspiracionMesActual } from './Pages/AspiracionMesActual'
import { AspiracionMesAnterior } from './Pages/AspiracionMesAnterior'
import { Sugeridos } from './Pages/Sugeridos'

export function App () {
  return (
    <section className="w-[100vw] h-[100vh] flex">
      <NavBar />

      <main className='p-2'>
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
