import React, { createContext, useContext, useState } from 'react'
import { getProfile } from '../services/LoginServices'
import { useNavigate } from 'react-router-dom'
import { type User } from '../types/User'

interface InterfaceAuthContext {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
  login: (token: string) => void
  logout: () => void
}

interface AuthProviderProps {
  children: React.ReactNode
}

const InitialUser: User = { codigo: 0, estado: 'B', nombres: '', password: '', username: '' }

const AuthContext = createContext<InterfaceAuthContext>(
  {
    login: () => {},
    logout: () => {},
    user: InitialUser,
    setUser: () => {}
  })

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(InitialUser)
  const navigate = useNavigate()

  const login = (token: string): void => {
    if (typeof token === 'string') {
      localStorage.setItem('tokenMetas', token)

      getProfile({ token })
        .then(res => {
          setUser(res)
          navigate('/home')
        })
        .catch(err => {
          console.error(err)
          localStorage.removeItem('tokenMetas')
          navigate('/')
        })
    }
  }

  const logout = (): void => {
    setUser(InitialUser)
    localStorage.removeItem('tokenMetas')
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): InterfaceAuthContext => {
  const context = useContext(AuthContext)
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
