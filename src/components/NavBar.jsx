import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

export function NavBar () {
  const { logout } = useAuth()

  function handleClick () {
    logout()
  }

  return (
    <>
      <nav className='flex bg-slate-800 h-auto py-2 px-4 justify-around items-center'>
        <ul>
          <figure>
            <img src="logo.png" alt="logo" width={120} />
          </figure>
        </ul>
        <ul className='flex gap-4'>
          <li className='text-white text-xl font-semibold hover:text-yellow-600'>
            <Link to='/dashboard'>Home</Link>
          </li>
          <li className='text-white text-xl font-semibold hover:text-yellow-600'>
            <Link to='/crearUser'>Registrar</Link>
          </li>
          <li className='text-white text-xl font-semibold hover:text-yellow-600'>
            <Link to='/usuarios'>Usuarios</Link>
          </li>
        </ul>
        <ul>
          <li>
            <button className='bg-blue-400 p-2 rounded-md hover:bg-yellow-500'
              onClick={handleClick}>
              Cerrar Sesion
            </button>
          </li>
        </ul>
      </nav>
    </>

  )
}
