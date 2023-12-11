import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { CreateUser } from './pages/CreateUser'
import { Layout } from './components/Layout'
import { useAuth } from './auth/AuthContext'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Usuarios } from './pages/Usuarios'
import { UserConfig } from './pages/UserConfig'
import { useEffect } from 'react'
import { getCookie } from './utils/getToken'

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { loggedIn } = useAuth()
  if (!loggedIn) {
    return <Navigate to='/login' />
  }
  return children
}

export function App () {
  const { login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const getLoggedIn = async () => {
      try {
        const token = getCookie('token')
        const result = await fetch('http://172.20.1.160:3000/profile', {
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
        })
        if (result.status === 200) {
          const usuario = await result.json()
          login(usuario.auth, usuario.user)
          navigate('/dashboard')
        }
        if (result.status === 401) {
          login(false)
        }
      } catch (error) {
        if (error) throw new Error(error)
        console.log(error)
      }
    }
    getLoggedIn()
  }, [])

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<ProtectedRoute><Layout /></ProtectedRoute>} >
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='crearUser' element={<CreateUser />} />
        <Route path='usuarios' element={<Usuarios />} />
        <Route path='userConfig' element={<UserConfig />} />
      </Route>
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  )
}
