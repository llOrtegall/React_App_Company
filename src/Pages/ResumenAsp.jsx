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
    <section className='w-full
      text-center font-semibold rounded-lg gap-2 text-gray-700 dark:text-white'>

      <h3 className='h-10 py-2 rounded-lg bg-slate-300 dark:bg-slate-900'>
        Bienvenid@ <span className='text-blue-700 dark:text-yellow-400 pl-2'>{user.nombres || undefined}</span>
      </h3>

      <Callout color="rose" title='Cartera' className=''>
        <span className='text-xs'>Tu Cartera Es: $ 345.411</span>
      </Callout>

      <section className='py-2 rounded-md
        bg-slate-300 dark:bg-slate-900 flex flex-col justify-around gap-2'>
        <h2 className='text-center text-xs'>Porcentaje De Meta Realizada</h2>
        <ProgressCircle value={porcentaje || 0} size='xl' strokeWidth={20} color={ColorPorcentaje(porcentaje)}>
          <span className="text-xs text-gray-700 dark:text-white font-medium">{`${porcentaje} %`}</span>
        </ProgressCircle>
      </section>

      <article className="gap-4 py-3 flex flex-col  justify-around dark:text-white bg-slate-300 dark:bg-slate-900">
        <h2 className='text-center text-xs'>Información De Venta Chance</h2>
        <p className='text-xs gap-2 w-full text-center'>
          VENTA ACTUAL:
          <span className='font-semibold'>
            {(data.totalVentaDia || 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
          </span>
        </p>
        <p className='text-xs gap-2 w-full text-center'>
          META DÍA:
          <span className='font-semibold'>
            {(data.metaDiaria || 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
          </span>
        </p>
      </article>

      <figure className='flex flex-col items-center justify-center bg-slate-300 dark:bg-slate-900 rounded-md '>
        <img src="/diamante.png" alt="logo_punto" width={160} loading='lazy' className='' />
        <img src="/logos.png" alt="logos juegos" width={200} loading='lazy' className='' />
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
