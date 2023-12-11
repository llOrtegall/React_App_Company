import { useEffect, useState } from 'react'
import { getCookie } from '../utils/getToken'

export function UserConfig () {
  const [user, setUser] = useState({})

  useEffect(() => {
    const getLoggedIn = async () => {
      try {
        const token = getCookie('token')
        const result = await fetch('http://172.20.1.160:3000/profile', {
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
        })
        if (result.status === 200) {
          const { user } = await result.json()
          setUser(user)
        }
      } catch (error) {
        if (error) throw new Error(error)
        console.log(error)
      }
    }

    getLoggedIn()
  }, [])

  return (
    <section className="w-full h-screen bg-blue-400">
     {user && <h1 className="text-white text-2xl text-center">{user.nombres}</h1>}
    </section>
  )
}
