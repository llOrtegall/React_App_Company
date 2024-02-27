import { createContext, useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function AuthProvider ({ children }) {
  const [isAutentificate, setIsAutentificate] = useState(false)
  const [user, setUser] = useState({})
  const [pdv, setPdv] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('user')
    const pdv = localStorage.getItem('pdv')
    if (user && pdv) {
      setUser(JSON.parse(user))
      setPdv(JSON.parse(pdv))
      setIsAutentificate(true)
      navigate('/metas/resumen')
    }
  }, [])

  const login = (auth, DataUser) => {
    const { user, pdv } = DataUser
    if (auth === true) {
      setUser(user)
      setPdv(pdv)
      setIsAutentificate(auth)
      navigate('/metas/resumen')
    }
  }

  const logout = () => {
    setIsAutentificate(false)
    localStorage.removeItem('TokenMetas')
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ isAutentificate, login, logout, user, pdv }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth () {
  return useContext(AuthContext)
}
