import { Card, ProgressBar } from '@tremor/react'
import { calcularPorcentaje, determineProgressColor } from '../utils/progress.js'

export function BarraProgresoPro ({ pruducto, ventaActual, aspiracionDia }) {
  const percentage = calcularPorcentaje(ventaActual, aspiracionDia)
  const progressColor = determineProgressColor(percentage)

  // Formatea los números con la notación de Colombia
  const ventaActualFormateada = ventaActual.toLocaleString('es-CO')
  const aspiracionDiaFormateada = aspiracionDia.toLocaleString('es-CO')

  console.log(pruducto)

  return (
    <Card className={`mx-auto max-w-sm  bg-${progressColor}-100  text-xs sm:text-sm lg:text-lg`}>
      <h2 className='font-semibold flex justify-between'><span>{pruducto}</span> <span>Aspiración</span></h2>
      <p className="text-tremor-default pt-2 dark:text-gray-300 flex justify-between">
        {
          pruducto === 'Recaudos' || pruducto === 'Giros'
            ? <span className='font-semibold'>Actual: {ventaActualFormateada} </span>
            : <span className='font-semibold'>Actual: ${ventaActualFormateada} </span>
        }
        {
          pruducto === 'Recaudos' || pruducto === 'Giros'
            ? <span className='font-bold'>{aspiracionDiaFormateada}</span>
            : <span className='font-bold'>${aspiracionDiaFormateada}</span>
        }

        {
          pruducto === 'Recaudos' || pruducto === 'Giros'
            ? <span><span>&bull;</span> {percentage}</span>
            : <span><span>&bull;</span> {percentage}%</span>
        }
      </p>
      <ProgressBar value={percentage} color={progressColor} className="mt-3" showAnimation={true} />
    </Card>
  )
}
