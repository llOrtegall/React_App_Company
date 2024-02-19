import { ProgressCircle, Callout } from '@tremor/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { calcularPorcentaje } from '../utils/progress'

export function ResumenAsp ({ user }) {
  const { codigo } = user
  const [data, setData] = useState({})

  useEffect(() => {
    axios.post('/metasDelDiaSucursal', { codigo })
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
  }, [])

  const porcentaje = calcularPorcentaje((data.totalVentaDia), (data.metaDiaria))

  //  const informacionCartera = false

  function ColorPorcentaje (num) {
    if (num < 30) {
      return 'red'
    } else if (num >= 30 && num < 60) {
      return 'cyan'
    } else if (num >= 60 && num < 99.999) {
      return 'yellow'
    } else {
      return 'green'
    }
  }

  return (
    <section className='w-full grid grid-cols-3
      text-center font-semibold rounded-lg gap-2 text-gray-700 dark:text-white'>

      <h3 className='col-span-3 h-10 py-2 rounded-lg bg-slate-300 dark:bg-slate-900 dark:border dark:border-gray-500'>
        Bienvenid@ <span className='text-blue-700 dark:text-yellow-400 pl-2'>{user.nombres || undefined}</span>
      </h3>

      <section className='col-span-1 flex flex-col gap-2'>

        <section className='py-2 rounded-md dark:border dark:border-gray-500
        bg-slate-300 dark:bg-slate-900 flex flex-col justify-around gap-2'>
          <h2 className='text-center text-md py-4'>Porcentaje De Meta Realizada</h2>
          <ProgressCircle value={porcentaje || 0} size='xl' strokeWidth={20} color={ColorPorcentaje(porcentaje)}>
            <span className="text-xs text-gray-700 dark:text-white font-medium">{`${porcentaje} %`}</span>
          </ProgressCircle>
        </section>

        <article className="gap-4 py-3 flex flex-col rounded-md justify-around dark:text-white bg-slate-300 dark:bg-slate-900 dark:border dark:border-gray-500">
          <p className='text-xs gap-2 w-full flex justify-between px-4 '>
            <span className='font-bold'>VENTA ACTUAL:</span>
            <span className='font-semibold'>
              {(data.totalVentaDia || 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
            </span>
          </p>
          <p className='text-xs gap-2 w-full flex justify-between px-4'>
            <span className='font-bold'>META DÍA:</span>
            <span className='font-semibold'>
              {(data.metaDiaria || 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
            </span>
          </p>
        </article>

        <Callout color="rose" title='Cartera' className='col-span-1 dark:border dark:border-gray-500'>
          <span className='text-xs'>Tu Cartera Es: $ 345.411</span>
        </Callout>

      </section>

      <figure className='col-span-2 flex flex-col items-center justify-center bg-slate-300 dark:bg-slate-900 rounded-md dark:border dark:border-gray-500'>
        <img src="/diamante.png" alt="logo_punto" width={200} loading='lazy' className='' />
        <img src="/logos.png" alt="logos juegos" width={500} loading='lazy' className='' />
      </figure>

    </section>
  )
}

// {
//   informacionCartera === true
//  (

//       <Callout color="rose" title='Cartera' className=''>
//         <span className='text-xs'>Tu Cartera Es: $ 345.411</span>
//       </Callout>

//       )
//     : (

//       <Callout color="teal" title='Cartera'>
//         <span className='text-xs'>Actualmente No Tienes Reportes</span>
//       </Callout>
//       )
// }
