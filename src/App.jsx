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
import { useInfoPDV } from './hooks/useInfoPDV.js'

export function App () {
  axios.defaults.baseURL = 'http://172.20.1.110:4002/'

  const { isAutentificate, user } = useAuth()
  const { darkMode, toggleTheme } = useTheme()

  const { categoria, nombre, supervisor, version, zona } = useInfoPDV({ codigo: user.codigo })

  if (!isAutentificate) {
    return (
      <LoginForm />
    )
  }

  return (
    <>
      <Routes>
        <Route path='/metas' element={<Layout user={user.codigo} darkMode={darkMode} toggleTheme={toggleTheme}
          categoria={categoria} codigo={user.codigo} nombre={nombre} supervisor={supervisor} version={version}/>}>
          <Route path='resumen' element={<ResumenAsp zone={zona} user={user} catergoria={categoria} version={version}/>} />
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
