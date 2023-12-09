import { useState } from 'react'

export function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = ev => {
    ev.preventDefault()
    fetch('http://172.20.1.160:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <section className="h-screen w-full bg-blue-800 flex items-center justify-center">
      <form className="flex flex-col relative" onSubmit={handleSubmit}>
        <input
          className="bg-white rounded-lg p-2 my-2 shadow-lg"
          onChange={ev => setUsername(ev.target.value)}
          value={username}
          placeholder="Usuario"
          type="text"
        />
        <input
          className="bg-white rounded-lg p-2 my-2 shadow-lg"
          onChange={ev => setPassword(ev.target.value)}
          value={password}
          placeholder="Contraseña"
          type="password"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
          type="submit"
        >
          Sign In
        </button>
        {error && <p className="text-red-500 absolute">{error}</p>}
      </form>
    </section>
  )
}
