import { Card, ProgressBar } from '@tremor/react'

export function ProgressSugerido ({ percentage, data, MetaSugerido, ImpresosActual, color }) {
  return (
    <Card className={`mx-auto mt-2 w-full flex flex-col gap-4 bg-${color}-200`}>
      <article className='flex gap-4 items-center justify-center'>
        <h2 className='font-semibold text-lg'>PRODUCTO SUGERIDO {data?.SUGERIDO1 || data?.SUGERIDO2 || 'Aun No Se Ha Definido'}</h2>
        <span>-</span>
        <h2 className='font-semibold text-lg'>N° Sugeridos Del Día {MetaSugerido || ''}</h2>
      </article>

      <article className='flex'>
        <p> Formularios Impresos: </p>
        <span className='pl-4 font-semibold'>{ImpresosActual || ''}</span>
      </article>

      <article className='flex flex-col items-center'>
        <p className="text-center  dark:text-dark-tremor-content flex items-center justify-start gap-4">
          <p> <span>Progeso Actual: </span> &bull; {percentage} %</p>
        </p>
        <ProgressBar value={percentage} color={color} className="mt-3" />
      </article>

      <article>
        {
          percentage === 100
            ? (
              <p className='pt-2 text-center'>Buen Trabajo 😁 - Meta Completada ✅  </p>
              )
            : null
        }
        </article>
    </Card>
  )
}
