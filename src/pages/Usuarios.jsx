import { useEffect, useState } from 'react'
import { API } from '../App.jsx'

export function Usuarios () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await fetch(`${API}/users`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (result.status === 200) {
          const data = await result.json()
          setUsers(data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getUsers()
  }, [])

  return (
    <section className='bg-blue-400 w-full h-screen p-2'>
      <table className='w-full border'>
        <thead>
          <tr className='bg-blue-200 text-base'>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Documento</th>
            <th>Correo</th>
            <th>Usuario</th>
            <th>Estado</th>
            <th>Empresa</th>
            <th>Proceso</th>
            <th>Cargo</th>
            <th>Fecha Registro</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {users.map(user => (
            <tr key={user.documento} className='border bg-slate-600 text-white'>
              <td>{user.nombres}</td>
              <td>{user.apellidos}</td>
              <td>{user.documento}</td>
              <td>{user.correo}</td>
              <td>{user.username}</td>
              <td>{user.estado}</td>
              <td>{user.empresa}</td>
              <td>{user.proceso}</td>
              <td>{user.rol}</td>
              <td>{user.fecha_creacion.split('T')[0]}</td>
              <td>
                <button className='bg-green-600 rounded-md px-2 py-1 text-white'>Editar</button>
                <button className='bg-red-600 rounded-md px-2 py-1 text-white'>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>

  )
}
