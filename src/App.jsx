import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'

import { ResumenAsp } from './Pages/ResumenAsp'
import { AspiracionDelDia } from './Pages/AspiracionDelDia'
import { LoginForm } from './Pages/LoginForm'

import { useAuth } from './auth/AuthContext'
import { ThemeContext } from './context/ThemeProvider'
import { MetasxHora } from './components/MetasPorHora'
import { useContext } from 'react'
import axios from 'axios'

export function App () {
  axios.defaults.baseURL = 'http://localhost:3060'

  const { isAutentificate, user } = useAuth()
  const { darkMode, toggleTheme } = useContext(ThemeContext)

  if (!isAutentificate) {
    return (
      <LoginForm />
    )
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout darkMode={darkMode} toggleTheme={toggleTheme}/>}>
          <Route path='/metas/resumen' element={<ResumenAsp user={user}/>} />
          <Route path='/metas/aspiracionDia' element={<AspiracionDelDia user={user}/>} />
          <Route path='/metas/producto/:id' element={<MetasxHora />} />
        </Route>
      </Routes>
    </>
  )
}
