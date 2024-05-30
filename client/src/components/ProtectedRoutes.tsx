import { Navigate, Outlet } from 'react-router-dom'
import { NavBar } from './ui/NavBar'
import { type FC } from 'react'

interface ProtectedRouteProps {
  isAllowed: boolean
  redirectTo?: string
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ isAllowed, redirectTo = '/login' }) => {
  console.log(isAllowed)

  if (!isAllowed) {
    return <Navigate to={redirectTo} />
  }

  return (
    <>
      <section className='w-full'>
        <NavBar />
      </section>
      <section className='h-[90vh] overflow-auto'>
        <Outlet />
      </section>
    </>
  )
}
