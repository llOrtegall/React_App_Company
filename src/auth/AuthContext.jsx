import { createContext, useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getInfoPDV } from '../services/getInfoPDV'

const AuthContext = createContext()

export function AuthProvider ({ children }) {
  const [isAutentificate, setIsAutentificate] = useState(false)
  const [user, setUser] = useState({})
  const [pdv, setPdv] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setUser(user)
      setIsAutentificate(true)
    }

    if (isAutentificate) {
      getInfoPDV(user.codigo)
        .then(response => {
          setPdv(response)
        })
        .catch(error => {
          console.log(error)
        })
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
      navigate('/metas')
    }
  }

  const logout = () => {
    setIsAutentificate(false)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ isAutentificate, login, user, logout, pdv }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth () {
  return useContext(AuthContext)
}
