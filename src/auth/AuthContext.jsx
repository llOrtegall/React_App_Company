import { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function AuthProvider ({ children }) {
  const [isAutentificate, setIsAutentificate] = useState(false)
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const login = ({ auth, user }) => {
    if (auth === true) {
      console.log(user)
      setUser(user)
      setIsAutentificate(auth)
      navigate('/metas/resumen')
    }
  }

  const logout = () => {
    setIsAutentificate(false)
    navigate('/metas/resumen')
  }

  return (
    <AuthContext.Provider value={{ isAutentificate, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth () {
  return useContext(AuthContext)
}
