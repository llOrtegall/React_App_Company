import { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function AuthProvider ({ children }) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const login = (auth, DataUser) => {
    if (auth === true) {
      console.log(DataUser)
      setUser(DataUser)
      setLoggedIn(auth)
      navigate('/metas/resumen')
    }
  }

  const logout = () => {
    setLoggedIn(false)
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  return useContext(AuthContext)
}
