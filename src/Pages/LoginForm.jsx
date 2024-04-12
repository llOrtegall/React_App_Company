import { MessageDisplay } from '../components/MessageDisplay.jsx'
import { Cargando } from '../components/animation/Loadin.jsx'
import { useAuth } from '../auth/AuthContext.jsx'

import { useState } from 'react'
import axios from 'axios'
import { getUserByToken } from '../services/getData.js'
import { UserIcon } from '../components/icons/UserIcon.jsx'
import { LockIcon } from '../components/icons/LockIcon.jsx'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('Iniciando Sesión...')
    try {
      const { data: { auth, token } } = await axios.post('/metasLogin', { username, password })
      setLoading(false)
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
      setLoading(false)
      setTimeout(() => {
        setMessage(null)
        setError(null)
      }, 5000)
    }
  }
  return (
    <section className="w-full h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-400 to-gray-200">

      <form className='w-96 mb-2 border p-12 rounded-lg bg-white/30 flex flex-col gap-4 shadow-xl'>
        <figure className='flex justify-center'>
          <img src="/gane.png" width={180} />
        </figure>

        <article className='w-full flex flex-col gap-2'>
          <label className='font-semibold'>Usuario</label>
          <div className='flex items-center w-full justify-around gap-4'>
            <UserIcon size={10}/>
            <input name='username' type='text' placeholder='CV1118*****' autoComplete='username' className='w-full p-2 rounded-md border-none outline-none'
              onChange={ev => { setUsername(ev.target.value) }} />
          </div>
        </article>

        <article className='w-full flex flex-col gap-2 mb-4'>
          <label className='font-semibold'>Contraseña</label>
          <div className='flex items-center w-full justify-around gap-4'>
            <LockIcon size={10}/>
            <input name='password' type='password' placeholder='**********' autoComplete='username' className='w-full p-2 rounded-md border-none outline-none'
              onChange={ev => { setPassword(ev.target.value) }} />
          </div>
        </article>

         <button className='p-2 bg-blue-700 rounded-lg text-white font-semibold shadow-xl hover:bg-blue-900 transition duration-300 ease-in-out cursor-pointer'
          onClick={handleSubmit}>Iniciar Sesión</button>
      </form>

      <section className='h-10'>
        <MessageDisplay message={message} error={error} />
        {loading && <Cargando />}
      </section>
    </section>

  )
}

export default LoginForm
