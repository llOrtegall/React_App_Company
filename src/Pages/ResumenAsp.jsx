import { RenderCategoria } from '../components/RenderCategoria'
import { Cartera } from '../components/InfoCartera'
import { useResumenAsp } from '../hooks/useResumenAsp'
import { VentasDiaResumen } from '../components/VentasDiaResumen'
import { ProgressCircleComponen } from '../components/ProgressCircleComp.jsx'
function ResumenAsp ({ user, pdv }) {
  const { codigo, nombres } = user

  const { cartera, color, porcentaje, venta, aspiracion } = useResumenAsp(codigo)

  return (
    <section className='w-full grid grid-cols-3
      text-center font-semibold rounded-lg gap-2 text-gray-700 dark:text-white'>

      <h3 className='col-span-3 py-2 rounded-lg bg-slate-300 dark:bg-slate-900 dark:border dark:border-gray-500 xl:text-lg 2xl:text-2xl 2xl:py-4'>
        <span>Bienvenid@</span> <span className='text-blue-700 dark:text-yellow-400 pl-2 xl:text-lg 2xl:text-2xl'>{nombres || undefined}</span>
      </h3>

      <section className='col-span-1 flex flex-col gap-2'>

        <ProgressCircleComponen color={color} porcentaje={porcentaje} />

        <VentasDiaResumen venta={venta} aspiracion={aspiracion} />

        <Cartera resports={cartera} />

      </section>

      <figure className='col-span-2 flex flex-col items-center justify-center bg-slate-300 dark:bg-slate-900 rounded-md dark:border dark:border-gray-500'>
        { pdv && (<RenderCategoria catergoria={pdv.CATEGORIA} version={pdv.VERSION} />) }
      </figure>

    </section>
  )
}

export default ResumenAsp
