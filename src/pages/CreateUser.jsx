import { useState } from 'react'

export function CreateUser () {
  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [documento, setDocumento] = useState('')
  const [telefono, setTelefono] = useState('')
  const [correo, setCorreo] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [proceso, setProceso] = useState('')
  const [cargo, setCargo] = useState('')

  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    const tel = parseInt(telefono)
    const doc = parseInt(documento)
    const pro = parseInt(proceso)
    const emp = parseInt(empresa)

    const result = await fetch('http://172.20.1.160:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombres,
        apellidos,
        documento: doc,
        telefono: tel,
        correo,
        empresa: emp,
        proceso: pro,
        rol: cargo
      })
    })

    if (result.status === 201) {
      const { message } = await result.json()
      setMessage(message)
    }

    if (result.status === 401) {
      const { error } = await result.json()
      setError(error)
      setTimeout(() => setError(null), 3000)
    }

    console.log(result)
  }

  return (
    <main className="bg-blue-400 w-full h-screen flex items-center justify-center relative">
      <form onSubmit={handleSubmit} className=''>
        <h1 className="text-3xl text-white font-bold text-center">Crear Usuarios </h1>
        <div className="bg-white rounded-lg shadow-lg w-96 p-6 mt-10">
          <div className="flex flex-col space-y-4">
            <input type="text" placeholder="Nombres"
              className="border-2 rounded-lg p-3" onChange={ev => setNombres(ev.target.value)} />
            <input type="text" placeholder="Apellidos"
              className="border-2 rounded-lg p-3" onChange={ev => setApellidos(ev.target.value)} />
            <input type="text" placeholder="N° Documento"
              className="border-2 rounded-lg p-3" onChange={ev => setDocumento(ev.target.value)} />
            <input type="text" placeholder="N° Telefono"
              className="border-2 rounded-lg p-3" onChange={ev => setTelefono(ev.target.value)} />
            <input type="email" placeholder="Correo"
              className="border-2 rounded-lg p-3" onChange={ev => setCorreo(ev.target.value)} />
            <select className="border-2 rounded-lg p-3" onChange={ev => setEmpresa(ev.target.value)}>
              <option>Selecione Empresa</option>
              <option value={0}>Multired / Servired</option>
              <option value={1}>- Multired -</option>
              <option value={2}>- Servired -</option>
            </select>
            <select className="border-2 rounded-lg p-3" onChange={ev => setProceso(ev.target.value)}>
              <option>Seleccione Proceso</option>
              <option value={1}>Técnología</option>
              <option value={2}>Contabilidad</option>
              <option value={3}>Comercial</option>
              <option value={4}>Administración</option>
              <option value={5}>Gestión Humana</option>
              <option value={6}>Gerencia</option>
              <option value={7}>Tesoreria</option>
              <option value={8}>Auditoria</option>
              <option value={9}>Cumplimiento</option>
            </select>
            <input type="text" placeholder="Rol / Cargo"
              className="border-2 rounded-lg p-3" onChange={ev => setCargo(ev.target.value)} />
            <button className="bg-blue-400 text-white rounded-lg p-3 font-bold">Crear Usuario</button>
          </div>
        </div>
      </form>
      {message && <div className="text-green-500 font-semibold justify-center text-center mt-2 absolute bottom-20">{message}</div>}
      {error && <div className="text-red-500 font-semibold justify-center text-center mt-2 absolute bottom-20">{error}</div>}
    </main>
  )
}
