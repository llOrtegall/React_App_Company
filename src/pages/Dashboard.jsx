import { useEffect, useState } from 'react'
import { BarChart, BarChart2 } from '../components/BarChart.jsx'

export function Dashboard () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:6060/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  const usuariosPorEmpresa = users.map(user => user.empresa)
  const usuariosPorEmpresaUnicos = Array.from(new Set(usuariosPorEmpresa))

  const usuariosPorEmpresa2 = usuariosPorEmpresaUnicos.map(empresa => {
    const usuarios = users.filter(user => user.empresa === empresa)
    return usuarios.length
  })

  const usuariosActivos = users.filter(user => user.estado === 'Activo')
  const usuariosInactivos = users.filter(user => user.estado === 'Inactivo')

  const ArrayProcesos = users.map(user => user.proceso)
  const ArrayProcesosUnicos = Array.from(new Set(ArrayProcesos))

  const usuariosPorProceso = ArrayProcesosUnicos.map(proceso => {
    const usuarios = users.filter(user => user.proceso === proceso)
    return usuarios.length
  })

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
          <h1 className="text-xl font-bold">Activos</h1>
          <p className="text-gray-500">{usuariosActivos.length}</p>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md text-center w-3/12">
          <h1 className="text-xl font-bold">Inactivos</h1>
          <p className="text-gray-500">{usuariosInactivos.length}</p>
        </div>
      </section>
      <section className='w-full flex'>
        <div className='w-1/2'>
         <BarChart info={ArrayProcesosUnicos} info2={usuariosPorProceso}/>
        </div>
        <div className='w-1/2'>
         <BarChart2 info={usuariosPorEmpresaUnicos} info2={usuariosPorEmpresa2}/>
        </div>
      </section>
    </main>

  )
}
