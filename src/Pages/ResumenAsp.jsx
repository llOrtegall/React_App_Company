import { ProgressCircle } from '@tremor/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { calcularPorcentaje } from '../utils/progress'
import { Cartera } from '../components/InfoCartera'

export function ResumenAsp ({ user }) {
  const { codigo } = user
  const [data, setData] = useState({})
  const informacionCartera = false

  useEffect(() => {
    axios.post('/metasDelDiaSucursal', { codigo })
      .then(res => {
        setData(res.data)
      })
  }, [])

  const porcentaje = calcularPorcentaje((data.totalVentaDia), (data.metaDiaria))

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

      <h3 className='col-span-3 py-2 rounded-lg bg-slate-300 dark:bg-slate-900 dark:border dark:border-gray-500 xl:text-lg 2xl:text-2xl 2xl:py-4'>
        <span>Bienvenid@</span> <span className='text-blue-700 dark:text-yellow-400 pl-2 xl:text-lg 2xl:text-2xl'>{user.nombres || undefined}</span>
      </h3>

      <section className='col-span-1 flex flex-col gap-2'>

        <section className='py-2 rounded-md dark:border dark:border-gray-500
        bg-slate-300 dark:bg-slate-900 flex flex-col justify-around gap-2'>
          <h2 className='text-center text-md py-4 2xl:text-2xl'>Porcentaje De Meta Realizada</h2>
          <ProgressCircle value={porcentaje || 0} size='xl' strokeWidth={20} color={ColorPorcentaje(porcentaje)} className='2xl:py-4'>
            <span className="text-xs text-gray-700 2xl:text-lg dark:text-white font-medium">{`${porcentaje} %`}</span>
          </ProgressCircle>
        </section>

        <article className="gap-4 py-3 flex flex-col rounded-md justify-around dark:text-white bg-slate-300 dark:bg-slate-900 dark:border dark:border-gray-500 2xl:py-6">
          <p className='text-xs gap-2 w-full flex justify-between px-4 '>
            <span className='font-bold xl:text-lg'>VENTA ACTUAL:</span>
            <span className='font-semibold xl:text-lg'>
              {(data.totalVentaDia || 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
            </span>
          </p>
          <p className='text-xs gap-2 w-full flex justify-between px-4'>
            <span className='font-bold xl:text-lg'>META DÍA:</span>
            <span className='font-semibold xl:text-lg'>
              {(data.metaDiaria || 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
            </span>
          </p>
        </article>

        <Cartera resports={informacionCartera} />

      </section>

      <figure className='col-span-2 flex flex-col items-center justify-center bg-slate-300 dark:bg-slate-900 rounded-md dark:border dark:border-gray-500'>
        <img src="/diamante.png" alt="logo_punto" width={200} loading='lazy' className='2xl:w-[300px]' />
        <img src="/logos.png" alt="logos juegos" width={500} loading='lazy' className='' />
      </figure>

    </section>
  )
}
