import axios from 'axios'
import { useEffect, useState } from 'react'

export function ConsultarBoletasGanadas ({ codigo, user }) {
  const [data, setData] = useState(null)
  useEffect(() => {
    axios.post('/consultarBoletasGanas', { codigo, user })
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    data && (
      <div className='flex bg-blue-300 items-center w-full justify-between py-2 px-4 rounded-lg'>
        <p className='font-semibold'>Primera Meta Cumplida: ✅ 😁 </p>
        <p className='font-semibold'> {user.nombres} </p>
        <p>N° Boletas Ganadas: <span className='font-semibold'> {data.CANT_BOLETAS}</span> 🥇 </p>
      </div>
    )
  )
}
