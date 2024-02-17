import { useEffect, useRef, useState } from 'react'
import { getColombiaTime } from '../services/HoraColombia'
import { Cargando } from './animation/Loadin'
import axios from 'axios'
import { useAuth } from '../auth/AuthContext'

export function InfoPuntCoord ({ codigo }) {
  const [data, setData] = useState({})
  const [error, setError] = useState('')
  const [Fecha, setFecha] = useState('')
  const [Hora, setHora] = useState('')
  const isMounted = useRef(true)

  const { defineZona } = useAuth()

  useEffect(() => {
    axios.post('/infoPuntoDeVenta', { codigo })
      .then(res => {
        setData(res.data)
        defineZona(res.data.zona)
      })
      .catch(error => {
        console.log(error)
        setError(error.response.data.error)
      })
  }, [])

  useEffect(() => {
    getColombiaTime()
      .then(response => {
        if (isMounted.current) {
          setFecha(response.fecha)
          SimularReloj(response.hora)
        }
      })
      .catch(error => {
        console.error('Error fetching time:', error)
      })

    return () => {
      isMounted.current = false
    }
  }, [])

  const SimularReloj = (hora) => {
    const [timePart, period] = hora.split(' ')
    const [hours, minutes, seconds] = timePart.split(':').map(Number)
    let date = new Date()
    date.setHours(hours + (period === 'pm' ? 12 : 0))
    date.setMinutes(minutes)
    date.setSeconds(seconds)

    const intervalId = setInterval(() => {
      if (isMounted.current) {
        date = new Date(date.getTime() + 1000)
        const newHours = date.getHours()
        const newPeriod = newHours >= 12 ? 'pm' : 'am'
        const newTimePart = `${newHours % 12 || 12}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
        setHora(`${newTimePart} ${newPeriod}`)
      }
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }

  return (
    <article className='grid grid-cols-2 w-full sm:text-xs lg:text-lg justify-around py-2 gap-2'>
      <div className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>
        <span className='text-xs lg:text-sm'>Fecha: {Fecha || <Cargando />}</span>
      </div>
      <div className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>
        <span className='text-xs lg:text-sm'> Hora: {Hora || <Cargando />}</span>
      </div>
      <div className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-4'>
        <span className='text-xs lg:text-sm'>{data.NOMBRE || <Cargando />}</span>
        <span className='text-xs lg:text-sm'>{data.SUPERVISOR || <Cargando />}</span>
      </div>
      {
        // eslint-disable-next-line eqeqeq
        data.VERSION != 0
          ? (
            <article className='flex justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-2'>
              <span className='text-xs lg:text-sm'>Catergoria: {data.CATEGORIA || ''} </span>
              <span className='text-xs lg:text-sm'>Clasificación: 💎 {data.VERSION || ''} 💎</span>
            </article>
            )
          : (
            <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-2'>
              <p>
                <span>Categoria:</span>
                <span>{data.CATEGORIA} </span>
              </p>
            </article>
            )
      }

      {error && <p className='text-red-500'>{error}</p>}

    </article>
  )
}
