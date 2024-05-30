import { useEffect } from 'react'
import { useAuth } from './auth/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoutes'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginForm'
import axios from 'axios'

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

  console.log(user)
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path='/home' element={<p>Hello</p>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
