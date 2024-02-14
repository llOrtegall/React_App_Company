import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'

import { ResumenAsp } from './Pages/ResumenAsp'
import { AspiracionDelDia } from './Pages/AspiracionDelDia'
import { LoginForm } from './Pages/LoginForm'

import { useAuth } from './auth/AuthContext'

export function App () {
  const { isAutentificate, user } = useAuth()

  if (isAutentificate) {
    return (
      <LoginForm />
    )
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/metas/resumen' element={<ResumenAsp user={user}/>} />
          <Route path='/metas/aspiracionDia' element={<AspiracionDelDia user={user}/>} />
        </Route>
      </Routes>
    </>
  )
}
