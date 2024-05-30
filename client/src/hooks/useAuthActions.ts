// useAuthActions.ts
import { getProfile } from '../services/LoginServices'
import { useNavigate } from 'react-router-dom'
import { User } from '../types/User'
import React from 'react'

const InitialUser: User = { codigo: 0, estado: 'B', nombres: '', password: '', username: '' }

export const useAuthActions = (setUser: React.Dispatch<React.SetStateAction<User>>) => {
  const navigate = useNavigate()

  const login = async (token: string): Promise<void> => {
    if (typeof token === 'string') {
      localStorage.setItem('tokenMetas', token)

      try {
        const res = await getProfile({ token })
        setUser(res)
        navigate('/home')
      } catch (err) {
        console.error(err)
        localStorage.removeItem('tokenMetas')
        navigate('/login')
      }
    }
  }

  const logout = (): void => {
    setUser(InitialUser)
    localStorage.removeItem('tokenMetas')
    navigate('/login')
  }

  return { login, logout }
}
