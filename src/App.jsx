// TODO: importación de paquetes
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

// TODO: imporación de componentes y hooks
import { MetasxHora } from './components/MetasPorHora'
import { useTheme } from './hooks/useTheme.js'
import { Layout } from './components/Layout'
import { useAuth } from './auth/AuthContext'

// TODO: Importación de página del APP
import AspMesAnt from './Pages/AspiracionMesAnterior'
import AspMesActual from './Pages/AspiracionMesActual'
import AspDelDia from './Pages/AspiracionDelDia'
import ResumenAsp from './Pages/ResumenAsp'
import LoginForm from './Pages/LoginForm'
import Sugeridos from './Pages/Sugeridos'

export function App () {
  axios.defaults.baseURL = 'http://172.20.1.110:4001/'

  const { isAutentificate, user, pdv } = useAuth()
  const { darkMode, toggleTheme } = useTheme()

  if (!isAutentificate) {
    return (
      <LoginForm />
    )
  }

  const zona = pdv.zona

  return (
    <>
      <Routes>
        <Route path='/metas' element={<Layout user={user.codigo} darkMode={darkMode} toggleTheme={toggleTheme} pdv={pdv} />}>
          <Route index element={<ResumenAsp zone={zona} user={user} pdv={pdv} />} />
          <Route path='aspiracionDia' element={<AspDelDia zone={zona} user={user} />} />
          <Route path='producto/:id' element={<MetasxHora />} />
          <Route path='sugeridos' element={<Sugeridos zone={zona} user={user} />} />
          <Route path='aspiracionMesActual' element={<AspMesActual user={user} zone={zona} />} />
          <Route path='aspiracionMesAnterior' element={<AspMesAnt user={user} zone={zona} />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  )
}
