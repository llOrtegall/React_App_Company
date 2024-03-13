import { MessageDisplay } from '../components/MessageDisplay.jsx'
import { useAuth } from '../auth/AuthContext.jsx'

import { useState } from 'react'
import axios from 'axios'
import { getUserByToken } from '../services/getData.js'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)

  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('Iniciando Sesión...')
    try {
      const { data: { auth, token } } = await axios.post('/metasLogin', { username, password })
      localStorage.setItem('TokenMetas', token)
      const DataUser = await getUserByToken(token)
      login(auth, DataUser)
    } catch (error) {
      setMessage(null)
      console.log(error)
      if (error.message === 'Network Error') {
        return setError('Servidor No Disponible y/o Error De Conexión, Consulte Con El Administrador')
      }
      setError(error.response?.data?.error || 'Error Inesperado Por Favor Consulte Con El Administrador')
    } finally {
      setTimeout(() => {
        setMessage(null)
        setError(null)
      }, 5000)
    }
  }
  return (
    <>
      <section className='w-full h-screen flex flex-col items-center justify-center relative bg-blue-900'>

        <form onSubmit={handleSubmit} className='flex flex-col w-[450px] h-auto rounded-2xl shadow-2xl px-10 py-10 justify-around bg-slate-200'>
          <figure className='mb-12 flex items-center justify-center'>
            <img src="/gane.png" width={150} alt="" />
          </figure>
          <article className='flex flex-col mb-20'>
            <label className='font-semibold mb-2 text-black'>Usuario:</label>
            <input type='text' placeholder='CV1118333444' required autoComplete='username'
              className='p-2.5 mb-10 rounded-md  text-black'
              onChange={ev => setUsername(ev.target.value)} />
            <label className='font-semibold mb-2 text-black'>Contraseña:</label>
            <input type='password' placeholder='**************' required autoComplete='current-password'
              className='p-2.5 rounded-md text-black'
              onChange={ev => setPassword(ev.target.value)} />
          </article>

          <button type='submit' className='bg-blue-500 w-full rounded-lg p-3 text-white font-semibold text-sm shadow-md hover:bg-blue-700 '>Iniciar Sesión</button>

        </form>

        <MessageDisplay message={message} error={error}/>

      </section>
    </>

  )
}

export default LoginForm
