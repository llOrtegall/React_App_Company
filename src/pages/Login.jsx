import { useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import { useNavigate } from 'react-router-dom'
import { GetUserCookie } from '../utils/GetUser'
import { API } from '../App.jsx'

export function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { login } = useAuth()

  const navigate = useNavigate()

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    // eslint-disable-next-line no-constant-condition
    if (username === 'CP1118307852' || username === 'CP6550436') {
      try {
        const response = await fetch(`${API}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user: username, password })
        })
        if (response.status === 200) {
          const result = await response.json()
          document.cookie = `token=${result.token}`
          const user = await GetUserCookie(result.token)
          const { documento } = user
          console.log(documento)
          // eslint-disable-next-line no-constant-condition
          login(result.auth, user)
          navigate('/dashboard')
        }

        if (response.status === 400 || response.status === 401) {
          const data = await response.json()
          setError(data.error)
          setTimeout(() => setError(null), 3000)
        }
      } catch (error) {
        if (error) throw new Error(error)
        console.log(error)
      }
    } else {
      setError('Usuario no autorizado, No Administrador')
      setTimeout(() => setError(null), 3000)
    }
  }

  return (
    <section className="h-screen w-full bg-blue-800 flex items-center justify-center relative">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="bg-white rounded-lg p-2 my-2 shadow-lg"
          onChange={ev => setUsername(ev.target.value)}
          value={username}
          placeholder="Usuario"
          type="text"
        />
        <input
          className="bg-white rounded-lg p-2 my-2 shadow-lg"
          onChange={ev => setPassword(ev.target.value)}
          value={password}
          placeholder="Contraseña"
          type="password"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
          type="submit"
        >
          Iniciar Sesión
        </button>
      </form>
      {error && <p className="text-red-400 font-bold absolute text-center justify-center bottom-80 ">{error}</p>}
    </section>
  )
}
