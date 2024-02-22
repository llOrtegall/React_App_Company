import { InfoPuntCoord } from './InfoPuntoCoor'
import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export function Layout ({ zona, punto }) {
  return (
    <>
      <NavBar />
      <main className='flex flex-col w-full items-center px-2'>
        <InfoPuntCoord key={zona} pdv={punto}/>
        <Outlet />
      </main>
    </>
  )
}
