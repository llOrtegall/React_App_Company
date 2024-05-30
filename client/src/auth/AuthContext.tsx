import { type AuthProviderProps, type InterfaceAuthContext } from '../types/interfaces'
import React, { createContext, useContext, useState } from 'react'
import { useAuthActions } from '../hooks/useAuthActions'
import { type User } from '../types/User'

const InitialUser: User = { codigo: 0, estado: 'B', nombres: '', password: '', username: '' }

const AuthContext = createContext<InterfaceAuthContext>(
  {
    login: async () => {},
    logout: () => {},
    user: InitialUser,
    setUser: () => {}
  })

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(InitialUser)
  const { login, logout } = useAuthActions(setUser)

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): InterfaceAuthContext => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
