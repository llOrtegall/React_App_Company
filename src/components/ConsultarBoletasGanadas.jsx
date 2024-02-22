import axios from 'axios'
import { useEffect, useState } from 'react'

export function ConsultarBoletasGanadas ({ codigo, user, names }) {
  console.log(codigo)
  console.log(user)
  console.log(names)

  const [data, setData] = useState(null)
  useEffect(() => {
    axios.post('/consultarBoletasGanas', { codigo, user })
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    data && (
      <div className='flex bg-blue-300 dark:bg-gray-700 items-center w-full justify-around py-2 px-4 rounded-lg'>
        <p className='font-semibold'> {names} </p>
        <p>N° Boletas Ganadas: <span className='font-semibold'> {data.CANT_BOLETAS}</span> 🥇 </p>
      </div>
    )
  )
}
