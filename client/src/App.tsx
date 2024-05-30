import { ProtectedRoute } from './components/ProtectedRoutes'
import { Routes, Route } from 'react-router-dom'
import { useAuth } from './auth/AuthContext'
import LoginPage from './pages/LoginForm'
import { useEffect } from 'react'
import axios from 'axios'
import HomePage from './pages/Home'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

function App () {
  const { user, login, logout } = useAuth()

  useEffect(() => {
    const token = localStorage.getItem('tokenMetas')
    if (token !== null) {
      login(token)
    } else {
      logout()
      console.log('No Token')
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path='/home' element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
