import { Link } from 'react-router-dom'
import { UserLoged } from './UserLoged'

export function NavBar () {
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
            <Link to='/usuarios'>Usuarios</Link>
          </li>
          <li className='text-white text-xl font-semibold hover:text-yellow-600'>
            <Link to='/crearUser'>Registrar</Link>
          </li>
        </ul>
        <ul>
          <li className='flex items-center gap-3'>
            <UserLoged />
          </li>
        </ul>
      </nav>
    </>

  )
}
