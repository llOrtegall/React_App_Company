import { Navigate, Outlet } from 'react-router-dom'

export const ProtectdeRoutes = ({ isAllowed, children, redirectTo = '/login' }) => {
  if (!isAllowed) return <Navigate to={redirectTo} />

  return (
    <>
      {children || <Outlet />}
    </>
  )
}
