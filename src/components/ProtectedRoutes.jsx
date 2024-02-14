import { Navigate, Outlet } from 'react-router-dom'

export const ProtectdeRoutes = ({ isAllowed, children, redirectTo = '/bodega/home' }) => {
  if (!isAllowed) return <Navigate to={redirectTo} />

  return (
    <>
      {children || <Outlet />}
    </>
  )
}
