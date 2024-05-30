import { User } from './User'
import React from 'react'

export interface InterfaceAuthContext {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
  login: (token: string) => Promise<void>
  logout: () => void
}

export interface AuthProviderProps {
  children: React.ReactNode
}
