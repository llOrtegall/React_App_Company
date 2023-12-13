import { useEffect, useState } from 'react'

export function Dashboard () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:6060/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  const usersMultired = users.filter(user => user.empresa === 'Multired')
  const usersServired = users.filter(user => user.empresa === 'Servired')
  const usersMulSer = users.filter(user => user.empresa === 'Multired y Servired')

  return (
    <main className="w-full h-screen bg-blue-400 p-2 flex flex-col gap-4">
      <h1 className='text-violet-900 font-bold text-2xl text-center py-4 rounded-xl bg-orange-300 shadow-md'>
        Reporte Registros - Empleados
      </h1>
      <section className='flex justify-around w-full gap-4'>
        <div className="bg-white p-4 rounded-md shadow-md text-center w-3/12">
          <h1 className="text-xl font-bold">N° Empleados Registrados</h1>
          <p className="text-gray-500">{users.length}</p>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md text-center w-3/12">
          <h1 className="text-xl font-bold">Multired y Servired</h1>
          <p className="text-gray-500">{usersMulSer.length}</p>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md text-center w-3/12">
          <h1 className="text-xl font-bold">Multired</h1>
          <p className="text-gray-500">{usersMultired.length}</p>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md text-center w-3/12">
          <h1 className="text-xl font-bold">Servired</h1>
          <p className="text-gray-500">{usersServired.length}</p>
        </div>
      </section>
      <section>
        
      </section>
    </main>

  )
}
