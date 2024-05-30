import { useEffect } from 'react'
import { useAuth } from './auth/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoutes'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginForm'

function App () {
  const { user, login } = useAuth()

  useEffect(() => {
    const token = localStorage.getItem('tokenMetas')
    if (token !== null) {
      login(token)
    } else {
      console.log('No Token')
    }
  }, [])
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoute isAllowed={!user} />}>
          <Route path='/' element={<p>Hello</p>} />
          <Route path='/about' element={<p>Hello</p>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
