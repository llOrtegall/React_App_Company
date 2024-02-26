import { Card, ProgressBar } from '@tremor/react'
import { determineProgressColor } from '../utils/progress.js'

export function BarraProgresoPro ({ pruducto, ventaActual, aspiracionDia, percentage, percentage2 }) {
  // Formatea los números con la notación de Colombia
  const ventaActualFormateada = ventaActual.toLocaleString('es-CO')
  const aspiracionDiaFormateada = aspiracionDia.toLocaleString('es-CO')

  const progressColor = determineProgressColor(percentage)

  return (
    <Card className={`mx-auto bg-${progressColor}-100 text-sm flex flex-col gap-2`}>

      <h2 className='flex justify-between'>
        <span className='font-bold'>{pruducto}</span>
        <span className='font-bold'>Aspiración</span>
      </h2>

      <article className="flex justify-between">
          {
            pruducto === 'Recaudos' || pruducto === 'Giros'
              ? <p className=''>Venta Actual: <span className='font-semibold'>{ventaActualFormateada}</span> </p>
              : <p className=''>Venta Actual: <span className='font-semibold'> ${ventaActualFormateada}</span> </p>
          }
          {
            pruducto === 'Recaudos' || pruducto === 'Giros'
              ? <p className='font-semibold'> <span>{aspiracionDiaFormateada}</span> </p>
              : <p className='font-semibold'><span>${aspiracionDiaFormateada}</span></p>
          }
        </article>

      <section className='flex justify-center items-center gap-4'>
        <ProgressBar value={percentage} color={progressColor} className="" showAnimation={true} />
        <span>{percentage}%</span>
      </section>

      <section className='flex justify-between'>
        <h4 className='font-semibold'>Porcentaje De Crecimiento:</h4>
        <span>{percentage2 > 100 ? percentage2 : percentage} %</span>
      </section>

    </Card>
  )
}
