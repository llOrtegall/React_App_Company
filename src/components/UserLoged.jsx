import { useState } from 'react'
import { useAuth } from '../auth/AuthContext.jsx'
import { Menu } from './Icons'

export function UserLoged () {
  const [showMenu, setShowMenu] = useState(false)
  const { logout } = useAuth()

  function handleClick () {
    setShowMenu(!showMenu)
  }

  function handleCloseSesion () {
    logout()
  }

  return (
    <div>
      <figure className='text-white hover:text-yellow-500 cursor-pointer' onClick={handleClick}>
        <Menu />
      </figure>
      {
        showMenu &&
        <section className='absolute top-16 w-72 flex justify-center right-0 bg-slate-800 rounded-md p-2 my-1'>
          <ul className='flex flex-col gap-2'>
            <li className='text-white text-xl font-semibold hover:text-yellow-600'>
              <button onClick={handleCloseSesion}>Cerrar Sesión</button>
            </li>
          </ul>
        </section>
      }
    </div>
  )
}
