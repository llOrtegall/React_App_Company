import { Card, ProgressBar } from '@tremor/react'

export function ProgressBarUsageExample ({ pruducto, ventaActual, aspiracionDia }) {
  const calculatePercentage = (actual, metaDia) => {
    // eslint-disable-next-line prefer-const
    let percentage = (actual * 100) / metaDia
    return Math.min(100, percentage).toFixed(1) // Limita el porcentaje a 100 y a un decimal
  }

  const determineProgressColor = (percentage) => {
    if (percentage < 20) return 'red'
    if (percentage < 50) return 'yellow'
    if (percentage < 80) return 'cyan'
    if (percentage < 100) return 'blue'
    return 'green'
  }

  const percentage = calculatePercentage(ventaActual, aspiracionDia)
  const progressColor = determineProgressColor(percentage)

  return (
    <Card className="mx-auto max-w-sm bg-slate-200">
      <h2>{pruducto}</h2>
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
        <span>${ventaActual} &bull; {percentage}%</span>
        <span>${aspiracionDia}</span>
      </p>
      <ProgressBar value={percentage} color={progressColor} className="mt-3" />
    </Card>
  )
}
