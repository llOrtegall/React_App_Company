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

  const login = (datos) => {
    const { usuarioencontrado, datosPVD } = datos
    if (usuarioencontrado) {
      setUser(usuarioencontrado)
      setPdv(datosPVD)
      localStorage.setItem('user', JSON.stringify(usuarioencontrado))
      localStorage.setItem('pdv', JSON.stringify(datosPVD))
      setIsAutentificate(true)
      navigate('/metas/resumen')
    }
  }

  const logout = () => {
    setIsAutentificate(false)
    localStorage.removeItem('user')
    localStorage.removeItem('pdv')
    navigate('/')
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
