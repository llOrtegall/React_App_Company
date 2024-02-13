import { Card, ProgressBar } from '@tremor/react'

export function ProgressBarUsageExample ({ pruducto, ventaActual, aspiracionDia }) {
  const calculatePercentage = (actual, metaDia) => {
    // eslint-disable-next-line prefer-const
    let percentage = (actual * 100) / metaDia
    return Math.min(100, percentage).toFixed(1) // Limita el porcentaje a 100 y a un decimal
  }

  const determineProgressColor = (percentage) => {
    if (percentage <= 49.99) return 'red'
    if (percentage <= 94.99) return 'yellow'
    if (percentage <= 99.99) return 'sky'
    return 'green'
  }

  const percentage = calculatePercentage(ventaActual, aspiracionDia)
  const progressColor = determineProgressColor(percentage)

  // Formatea los números con la notación de Colombia
  const ventaActualFormateada = ventaActual.toLocaleString('es-CO')
  const aspiracionDiaFormateada = aspiracionDia.toLocaleString('es-CO')

  return (
    <Card className={`mx-auto max-w-sm  bg-${progressColor}-100  text-xs sm:text-sm lg:text-lg`}>
      <h2 className='font-semibold flex justify-between'><span>{pruducto}</span> <span>Aspiración</span></h2>
      <p className="text-tremor-default pt-2 dark:text-dark-tremor-content flex justify-between">
        <span className='font-semibold'>Actual: ${ventaActualFormateada} </span>
        <span><span>&bull;</span> {percentage}%</span>
        <span className='font-bold'>${aspiracionDiaFormateada}</span>
      </p>
      <ProgressBar value={percentage} color={progressColor} className="mt-3" />
    </Card>
  )
}
