import { calcularPorcentaje, determineProgressColor } from '../utils/progress'
import { RenderCategoria } from '../components/RenderCategoria'
import { Cartera } from '../components/InfoCartera'
import { ProgressCircle } from '@tremor/react'
import { memo, useEffect, useState } from 'react'

import { getResumenDia } from '../services/getData.js'

function ResumenAsp ({ user, pdv }) {
  const { codigo } = user
  const [data, setData] = useState({})
  const informacionCartera = false

  const RenderCategoriaMemo = memo(RenderCategoria)
  const CarteraMemo = memo(Cartera)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getResumenDia({ codigo })
      setData(data)
      setTimeout(fetchData, 5 * 60 * 1000) // Solicita nuevamente los datos después de 5 minutos
    }

    fetchData()
  }, [codigo])

  const porcentaje = calcularPorcentaje(data.venta_actual, data.asp_dia)
  const color = determineProgressColor(porcentaje)

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
          <ProgressCircle value={porcentaje || 0} size='xl' strokeWidth={20} color={color} className='2xl:py-4'>
            <span className="text-xs text-gray-700 2xl:text-lg dark:text-white font-medium">{`${porcentaje} %`}</span>
          </ProgressCircle>
        </section>

        <article className="gap-4 py-3 flex flex-col rounded-md justify-around dark:text-white bg-slate-300 dark:bg-slate-900 dark:border dark:border-gray-500 2xl:py-6">
          <p className='text-xs gap-2 w-full flex justify-between px-4 '>
            <span className='font-bold xl:text-lg'>VENTA ACTUAL:</span>
            <span className='font-semibold xl:text-lg'>
              {(data.venta_actual || 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
            </span>
          </p>
          <p className='text-xs gap-2 w-full flex justify-between px-4'>
            <span className='font-bold xl:text-lg'>META DÍA:</span>
            <span className='font-semibold xl:text-lg'>
              {(data.asp_dia || 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
            </span>
          </p>
        </article>

        <CarteraMemo resports={informacionCartera} />

      </section>

      <figure className='col-span-2 flex flex-col items-center justify-center bg-slate-300 dark:bg-slate-900 rounded-md dark:border dark:border-gray-500'>
        { pdv && <RenderCategoriaMemo catergoria={pdv.CATEGORIA} version={pdv.VERSION} /> }
      </figure>

    </section>
  )
}

export default ResumenAsp
