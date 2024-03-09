// TODO: importación de paquetes
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

// TODO: imporación de componentes y hooks
import { Layout } from './components/Layout'
import { useAuth } from './auth/AuthContext'

// TODO: Importación de página del APP
import AspMesAnt from './Pages/AspiracionMesAnterior'
import AspMesActual from './Pages/AspiracionMesActual'
import AspDelDia from './Pages/AspiracionDelDia'
import ResumenAsp from './Pages/ResumenAsp'
import LoginForm from './Pages/LoginForm'
import Sugeridos from './Pages/Sugeridos'
import { ProtectdeRoutes } from './components/ProtectedRoutes.jsx'
import { HistorialCategorias } from './Pages/HistoriaCategorias.jsx'
import { useEffect } from 'react'
import { getUserByToken } from './services/getData.js'
import { MetasxHora } from './components/Metasxhora.jsx'

export function App () {
  axios.defaults.baseURL = '/api'
  // axios.defaults.baseURL = 'http://172.20.1.216:4002/api'

  const { isAutentificate, user, pdv, login, logout } = useAuth()

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('TokenMetas')
      getUserByToken(token)
        .then(res => {
          login(true, res)
        }).catch(() => {
          console.log('Token no valido')
          logout()
        })
    }
    checkToken()
    const tokenCheckInterval = setInterval(checkToken, 1000 * 60 * 60)
    return () => clearInterval(tokenCheckInterval)
  }, [])

  return (
      <Routes>
        <Route index path='/login' element={<LoginForm />} />
        <Route element={<ProtectdeRoutes isAllowed={isAutentificate} />} >
          <Route path='/' element={<Layout key={user.username} zona={pdv.zona} punto={pdv}/>} >
            <Route index path='resumen' element={<ResumenAsp key={user.username} user={user} catergoria={pdv.CATEGORIA} codigo={user.codigo} nombres={user.nombres} version={pdv.VERSION}/>} />
            <Route path='aspiracionDia' element={<AspDelDia key={user.username} user={user} zone={pdv.zona} />} />
            <Route path='sugeridos' element={<Sugeridos key={pdv.zona} zone={pdv.zona} user={user} />} />
            <Route path='aspiracionMesActual' element={<AspMesActual key={user.codigo} user={user} zone={pdv.zona} />} />
            <Route path='aspiracionMesAnterior' element={<AspMesAnt key={user.codigo} user={user} zone={pdv.zona} />} />
            <Route path='historial' element={<HistorialCategorias key={user.codigo} codigo={user.codigo} />} />
            <Route path='metasporhora' element={<MetasxHora />} />
            <Route path='*' element={<h1>Not Found</h1>} />
          </Route>
        </Route>
      </Routes>
  )
}
