import { useEffect } from 'react'
import { useAuth } from './auth/AuthContext'
import { CreateUser } from './pages/CreateUser'
import { Login } from './pages/Login'

function getCookie (name) {
  const cookies = document.cookie.split(';')
  const cookie = cookies.find(cookie => cookie.startsWith(name))
  if (cookie) {
    const [, token] = cookie.split('=')
    return token
  }
  return null
}

export function App () {
  const { loggedIn, login } = useAuth()

  useEffect(() => {
    const getLoggedIn = async () => {
      try {
        const token = getCookie('token')
        const result = await fetch('http://172.20.1.160:3000/profile', {
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
        })
        if (result.status === 200) {
          const { auth } = await result.json()
          login(auth)
        }
        if (result.status === 401) {
          login(false)
        }
      } catch (error) {
        if (error) throw new Error(error)
        console.log(error)
      }
    }

    getLoggedIn()
  }, [])

  if (loggedIn) {
    return <CreateUser />
  }

  return (
    <Login />
  )
}
