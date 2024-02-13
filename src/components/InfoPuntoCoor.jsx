import { useEffect, useRef, useState } from 'react'
import { getColombiaTime } from '../services/HoraColombia'
import { Cargando } from './animation/Loadin'

export function InfoPuntCoord ({ titulo }) {
  const [Fecha, setFecha] = useState('')
  const [Hora, setHora] = useState('')
  const isMounted = useRef(true)

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
    <div className='flex flex-col items-center bg-slate-200 dark:bg-slate-900 rounded-xl'>
      <h1 className='text-3xl pt-4 font-semibold'>{titulo}</h1>
      <article className='flex w-full sm:text-xs lg:text-lg justify-around py-4'>
        <div className='flex items-center justify-center w-2/12 text-center border p-3 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>Fecha: {Fecha || <Cargando />}</div>
        <div className='flex items-center justify-center w-2/12 text-center border p-3 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>Hora: {Hora || <Cargando />}</div>
        <p className='flex items-center justify-center w-2/12 text-center border p-3 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>Punto 12 Parroquial</p>
        <p className='flex items-center justify-center w-2/12 text-center border p-3 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>Coordinador Comerical: Felipe Bustos</p>
        <p className='flex items-center justify-center w-2/12 text-center border p-3 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>Diamante 💎1A💎</p>
      </article>
    </div>
  )
}
