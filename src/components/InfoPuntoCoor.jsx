import { getColombiaTime } from '../services/HoraColombia'
import { useEffect, useRef, useState } from 'react'
import { Cargando } from './animation/Loadin'

export function InfoPuntCoord ({ NOMBRE, SUPERVISOR, CATEGORIA, VERSION }) {
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
    <section className='grid grid-cols-2 w-full sm:text-xs lg:text-lg justify-around py-2 gap-2'>
      <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>
        <div className='text-xs lg:text-sm 2xl:text-xl'>Fecha: {Fecha || <Cargando />}</div>
      </article>
      <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>
        <div className='text-xs lg:text-sm 2xl:text-xl'> Hora: {Hora || <Cargando />}</div>
      </article>
      <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-4'>
        <div className='text-xs lg:text-sm 2xl:text-xl overflow-hidden overflow-ellipsis whitespace-nowrap'>{NOMBRE || <Cargando />}</div>
        <div className='text-xs lg:text-sm 2xl:text-xl overflow-hidden overflow-ellipsis whitespace-nowrap'>{SUPERVISOR || <Cargando />}</div>
      </article>
      {
        // eslint-disable-next-line eqeqeq
        VERSION != 0
          ? (
            <article className='flex justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-2'>
              <p className='text-xs lg:text-sm 2xl:text-xl'>Catergoria: {CATEGORIA || ''} </p>
              <p className='text-xs lg:text-sm 2xl:text-xl'>Clasificación: 💎 {VERSION || ''} 💎</p>
            </article>
            )
          : (
            <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-2'>
              <p>Categoria:</p>
              <p>{CATEGORIA} </p>
            </article>
            )
      }

    </section>
  )
}
