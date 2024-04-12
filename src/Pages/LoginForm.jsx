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
    <section className="w-full h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-200">

      <form className='w-96 mb-2 border p-12 rounded-lg bg-white/30 flex flex-col gap-4 shadow-xl'>
        <figure className='flex justify-center'>
          {/* <Image src="/gane.webp" className='w-20 xl:w-24 1xl:w-28 3xl:w-32' /> */}
        </figure>

        <article className='w-full flex flex-col gap-2'>
          {/* <Label>Usuario</Label> */}
          <div className='w-full flex items-center gap-2 justify-around'>
            {/* <UserIcon size='w-6 xl:w-7 2xl:w-8 3xl:w-10'/> */}
            {/* <Input name='username' type='text' placeholder='CP1118342523' autoComplete='username'
        onChange={ev => { setUsername(ev.target.value) }} /> */}
          </div>
        </article>

        <article className='w-full flex flex-col gap-2'>
          {/* <Label>Contraseña</Label> */}
          <div className='w-full flex items-center gap-2 justify-around'>
            {/* <LockIcon size='w-6 xl:w-7 2xl:w-8 3xl:w-10' />
      <Input name='password' type='password' placeholder='**********' autoComplete='username'
        onChange={ev => { setPassword(ev.target.value) }} /> */}
          </div>
        </article>

        {/* <Button onClick={handleSubmit}>Iniciar Sesión</Button> */}
      </form>

      <section className='h-10'>
        <MessageDisplay message={message} error={error} />
        {/* {loading && <Loading />} */}
      </section>
    </section>

  )
}

export default LoginForm
