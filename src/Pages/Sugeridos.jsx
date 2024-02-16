import { Card, ProgressBar } from '@tremor/react'
import { useSugeridos } from '../hooks/useSugeridos.js'
import { determineProgressColor } from '../utils/progress.js'
import { ConsultarBoletasGanadas } from '../components/ConsultarBoletasGanadas.jsx'

export function Sugeridos ({ zone, user }) {
  const { data, MetaSugerido, ImpresosActual, percentage } = useSugeridos({ zone, user })
  const color = determineProgressColor(percentage)

  return (
    <section>
      <h1 className='text-center text-3xl font-semibold py-2'>Sugeridos Del Día </h1>

      <div className='grid grid-cols-2 gap-4'>
        <Card className={`mx-auto mt-2 w-full flex flex-col gap-4 bg-${color}-200`}>
          <article className='flex gap-4 items-center justify-center'>
            <h2 className='font-semibold text-lg'>PRODUCTO SUGERIDO {data?.SUGERIDO1 || 'Aun No Se Ha Definido'}</h2>
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
          {
            percentage >= 100 && <ConsultarBoletasGanadas codigo={user.codigo} user={user} />
          }
        </Card>
      </div>

    </section>
  )
}
