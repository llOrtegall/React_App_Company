import { UserIcon, LockIcon } from '../components/icons'
import { useState } from 'react'
import { Button } from '../components/ui/Button'

function LoginForm():JSX.Element {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (ev: any) => {

  }

  return (
    <section className="w-full h-[100vh]  bg-gradient-to-b from-sky-200 to-gray-200">
      <form>
        <article>

        </article>

        <Button>Iniciar Sesión</Button>

      </form>
    </section>
  )
}

export default LoginForm
