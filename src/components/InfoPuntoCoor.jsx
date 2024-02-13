import { useEffect, useState } from 'react'

export function InfoPuntCoord ({ title }) {
  const [date, setDate] = useState(new Date())

  const hora = date.getHours()
  const minutos = date.getMinutes()
  const segundos = date.getSeconds()
  const horaFinal = `${hora}:${minutos}:${segundos}`

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <article className='flex flex-col items-center bg-slate-200 dark:bg-slate-900 rounded-xl'>
      <h1 className='text-xl font-semibold py-2'>{title}</h1>
      <section className='flex w-full sm:text-xs lg:text-lg justify-around py-4'>
        <p className='flex items-center justify-center w-2/12 text-center border p-3 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>Fecha: {date.toLocaleDateString()}</p>
        <p className='flex items-center justify-center w-2/12 text-center border p-3 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>Hora: {horaFinal}</p>
        <p className='flex items-center justify-center w-2/12 text-center border p-3 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>Punto 12 Parroquial</p>
        <p className='flex items-center justify-center w-2/12 text-center border p-3 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>Coordinador Comerical: Felipe Bustos</p>
        <p className='flex items-center justify-center w-2/12 text-center border p-3 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>Diamante 💎1A💎</p>
      </section>
    </article>
  )
}
