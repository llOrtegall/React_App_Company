import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
export function AuthProvider ({ children }) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  const login = (auth, user) => {
    setLoggedIn(auth)
    setUser(user)
  }
  const logout = () => {
    setLoggedIn(false)
    setUser({})
    // borrar cookies del navegador
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  }

  return (
    <AuthContext.Provider value={{ loggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
