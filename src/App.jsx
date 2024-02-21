import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'

import { ResumenAsp } from './Pages/ResumenAsp'
import { AspiracionDelDia } from './Pages/AspiracionDelDia'
import { LoginForm } from './Pages/LoginForm'

import { useAuth } from './auth/AuthContext'
import { MetasxHora } from './components/MetasPorHora'
import { AspiracionMesActual } from './Pages/AspiracionMesActual'
import { AspiracionMesAnterior } from './Pages/AspiracionMesAnterior'
import { Sugeridos } from './Pages/Sugeridos'
import { useTheme } from './hooks/useTheme.js'
import axios from 'axios'

export function App () {
  axios.defaults.baseURL = 'http://localhost:4001/'

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
          <Route index element={<ResumenAsp zone={zona} user={user} pdv={pdv}/>} />
          <Route path='aspiracionDia' element={<AspiracionDelDia zone={zona} user={user} />} />
          <Route path='producto/:id' element={<MetasxHora />} />
          <Route path='sugeridos' element={<Sugeridos zone={zona} user={user} />} />
          <Route path='aspiracionMesActual' element={<AspiracionMesActual user={user} zone={zona} />} />
          <Route path='aspiracionMesAnterior' element={<AspiracionMesAnterior user={user} zone={zona} />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  )
}
