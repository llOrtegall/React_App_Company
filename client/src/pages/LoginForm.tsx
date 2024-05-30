import { UserIcon, LockIcon } from '../components/icons'

// import { getUserByToken } from '../services/getData.js'

const LoginPage = () => {
  return (
    <section className='w-full h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-400 to-gray-200'>

      <form className='w-96 mb-2 border p-12 rounded-lg bg-white/30 flex flex-col gap-4 shadow-xl'>
        <figure className='flex justify-center'>
          <img src='/gane.webp' width={180} />
        </figure>

        <article className='w-full flex flex-col gap-2'>
          <label className='font-semibold'>Usuario</label>
          <div className='flex items-center w-full justify-around gap-4'>
            <UserIcon />
            <input
              name='username' type='text' placeholder='CV1118*****' required autoComplete='username' className='w-full p-2 rounded-md border-none outline-none'
            />
          </div>
        </article>

        <article className='w-full flex flex-col gap-2 mb-4'>
          <label className='font-semibold'>Contraseña</label>
          <div className='flex items-center w-full justify-around gap-4'>
            <LockIcon />
            <input
              name='password' type='password' placeholder='**********' required autoComplete='username' className='w-full p-2 rounded-md border-none outline-none'
            />
          </div>
        </article>

        <button className='p-2 bg-blue-700 rounded-lg text-white font-semibold shadow-xl hover:bg-green-500 transition duration-300 ease-in-out cursor-pointer'>Iniciar Sesión</button>
      </form>

    </section>

  )
}

export default LoginPage
