import { InfoPuntCoord } from '../components/InfoPuntoCoor'
import { Card, ProgressBar } from '@tremor/react'

export function Sugeridos () {
  const valueNo = 20

  const valueImp = 20 // modificar este valor para ver diferentes resultados DOM

  const boletasGanadas = 2

  const calculatePercentage = (actual, metaDia) => {
    // eslint-disable-next-line prefer-const
    let percentage = (actual * 100) / metaDia
    return Math.min(100, percentage).toFixed(2) // Limita el porcentaje a 100 y a un decimal
  }

  const determineProgressColor = (percentage) => {
    if (percentage <= 49.99) return 'red'
    if (percentage <= 89.99) return 'yellow'
    if (percentage <= 99.99) return 'cyan'
    return 'green'
  }

  const percentage = calculatePercentage(valueImp, valueNo)
  const progressColor = determineProgressColor(percentage)

  return (
    <section className='w-full'>
      <InfoPuntCoord title={'Sugeridos'} />

      <Card className={`mx-auto mt-2 w-full flex flex-col gap-4 bg-${progressColor}-100`}>
        <article className='flex gap-4'>
          <h2>Pata Millonaria</h2>
          <p>Sugeridos Del Día</p>
          <span>{valueNo}</span>
        </article>

        <article className='flex gap-4'>
          <p> Formularios Impresos: </p>
          <span>{valueImp}</span>
        </article>

        <article className=''>
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-start gap-4">
            <span> &bull; </span>
            <span> {valueImp}</span>
            <span> &bull; </span>
            <span>{percentage} %</span>
          </p>
          <ProgressBar value={percentage} color={progressColor} className="mt-3" />
        </article>

        {
          percentage >= 50
            ? <article className='flex gap-2 w-full'>
              <h1 className='w-1/2 text-center'>Primer Progreso Cumplido ✅ 😁</h1>
              <span className='w-1/2'>Boletas Ganadas 1</span>
            </article>
            : null
        }

        {
          percentage >= 100
            ? <article className='flex gap-2 w-full'>
              <h1 className='w-1/2 text-center'>Sugeridos Del Día Progreso Completado 💯</h1>
              <span className='w-1/2'>Boletas Ganadas 1</span>
            </article>
            : null
        }
        {
          boletasGanadas >= 1
            ? <article className='flex justify-around bg-blue-400 text-black font-semibold py-1 rounded-md'>
              <h1 className='text-center'>Boletas Ganadas</h1>
              <span> 🥇 {boletasGanadas}</span>
              <p>Andrea Ramirez Pineda</p>
            </article>
            : null
        }

      </Card>
    </section>
  )
}
