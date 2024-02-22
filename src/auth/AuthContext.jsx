import { createContext, useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function AuthProvider ({ children }) {
  const [isAutentificate, setIsAutentificate] = useState(false)
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setUser(user)
      setIsAutentificate(true)
    }
  }, [isAutentificate])

  useEffect(() => {
    if (isAutentificate) {
      const timerId = setTimeout(() => {
        logout()
      }, 60 * 60 * 1000) // 1 hora

      return () => clearTimeout(timerId)
    }
  }, [isAutentificate])

  const login = ({ auth, user }) => {
    if (auth === true) {
      setUser(user)
      setIsAutentificate(auth)
      navigate('/metas/resumen')
    }
  }

  const logout = () => {
    setIsAutentificate(false)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ isAutentificate, login, user, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth () {
  return useContext(AuthContext)
}
