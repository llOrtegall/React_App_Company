import { useState, useEffect } from 'react'
import { ProgressBarUsageExample } from '../components/progresoVenta'

export function AspiracionDelDia () {
  const [date, setDate] = useState(new Date())

  const hora = date.getHours()
  const minutos = date.getMinutes()
  const segundos = date.getSeconds()
  const horaFinal = `${hora}:${minutos}:${segundos}`

  const productos = [
    {
      id: 1,
      producto: 'Juegos Azar',
      ventaActual: 534,
      aspiracionDia: 569
    },
    {
      id: 2,
      producto: 'Chance 4 y 3 Cifras',
      ventaActual: 114,
      aspiracionDia: 124
    },
    {
      id: 3,
      producto: 'Pagamas',
      ventaActual: 434,
      aspiracionDia: 768
    },
    {
      id: 4,
      producto: 'Paga Todo',
      ventaActual: 134,
      aspiracionDia: 467
    },
    {
      id: 5,
      producto: 'Gane 5',
      ventaActual: 34,
      aspiracionDia: 348
    },
    {
      id: 6,
      producto: 'Pata Millonaria',
      ventaActual: 634,
      aspiracionDia: 983
    },
    {
      id: 7,
      producto: 'Doble chance',
      ventaActual: 434,
      aspiracionDia: 579
    },
    {
      id: 8,
      producto: 'Chance Millonario',
      ventaActual: 934,
      aspiracionDia: 869
    },
    {
      id: 9,
      producto: 'Astros',
      ventaActual: 334,
      aspiracionDia: 489
    },
    {
      id: 10,
      producto: 'Loteria Fisica',
      ventaActual: 534,
      aspiracionDia: 579
    },
    {
      id: 11,
      producto: 'Loteria Virtual',
      ventaActual: 874,
      aspiracionDia: 874
    },
    {
      id: 12,
      producto: 'BetPlay',
      ventaActual: 434,
      aspiracionDia: 487
    },
    {
      id: 13,
      producto: 'Giros TX',
      ventaActual: 534,
      aspiracionDia: 790
    },
    {
      id: 14,
      producto: 'Baloto',
      ventaActual: 234,
      aspiracionDia: 467
    },
    {
      id: 15,
      producto: 'Reargas',
      ventaActual: 834,
      aspiracionDia: 874
    },
    {
      id: 16,
      producto: 'Raspe y Listo',
      ventaActual: 234,
      aspiracionDia: 689
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <section className='w-full'>
      <article className='flex flex-col items-center bg-slate-200 dark:bg-slate-900 rounded-xl'>
        <h1 className='text-3xl font-semibold py-2'>Aspiración del día</h1>
        <section className='flex w-full text-lg justify-around py-4'>
          <p className='flex items-center justify-center w-2/12 text-center border p-3 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>Fecha: {date.toLocaleDateString()}</p>
          <p className='flex items-center justify-center w-2/12 text-center border p-3 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>Hora: {horaFinal}</p>
          <p className='flex items-center justify-center w-2/12 text-center border p-3 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>Punto 12 Parroquial</p>
          <p className='flex items-center justify-center w-2/12 text-center border p-3 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>Coordinador Comerical: Felipe Bustos</p>
          <p className='flex items-center justify-center w-2/12 text-center border p-3 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>Diamante 💎1A💎</p>
        </section>
      </article>

      <section className='grid grid-cols-4 gap-2 pt-2'>
        {
          productos.map((producto, index) => {
            return (
              <ProgressBarUsageExample key={index} pruducto={producto.producto} ventaActual={producto.ventaActual} aspiracionDia={producto.aspiracionDia} />
            )
          })
        }
      </section>

    </section>
  )
}
