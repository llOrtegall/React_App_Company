import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'

import { ResumenAsp } from './Pages/ResumenAsp'
import { AspiracionDelDia } from './Pages/AspiracionDelDia'
import { LoginForm } from './Pages/LoginForm'

import { useAuth } from './auth/AuthContext'
import { ThemeContext } from './context/ThemeProvider'
import { MetasxHora } from './components/MetasPorHora'
import { AspiracionMesActual } from './Pages/AspiracionMesActual'
import { AspiracionMesAnterior } from './Pages/AspiracionMesAnterior'
import { Sugeridos } from './Pages/Sugeridos'
import { useContext } from 'react'
import axios from 'axios'

export function App () {
  axios.defaults.baseURL = 'http://172.20.1.110:3060'

  const { isAutentificate, user, zona } = useAuth()
  const { darkMode, toggleTheme } = useContext(ThemeContext)

  if (!isAutentificate) {
    return (
      <LoginForm />
    )
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout user={user.codigo} darkMode={darkMode} toggleTheme={toggleTheme} zone={zona}/>}>
          <Route path='/metas/resumen' element={<ResumenAsp zone={zona} user={user}/>} />
          <Route path='/metas/aspiracionDia' element={<AspiracionDelDia zone={zona} user={user}/>} />
          <Route path='/metas/producto/:id' element={<MetasxHora />} />
          <Route path='/metas/sugeridos' element={<Sugeridos />} />
          <Route path='/metas/aspiracionMesActual' element={<AspiracionMesActual user={user}/>} />
          <Route path='/metas/aspiracionMesAnterior' element={<AspiracionMesAnterior user={user}/>} />
        </Route>
      </Routes>
    </>
  )
}
