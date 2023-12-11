import { useAuth } from '../auth/AuthContext'

export function UserConfig () {
  const { user } = useAuth()

  return (
    user !== undefined || null
      ? <section className='w-full h-screen bg-blue-400'>
          <h1>Render Here</h1>
        </section>
      : null
  )
}
