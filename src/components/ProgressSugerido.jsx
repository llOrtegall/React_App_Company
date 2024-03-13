import { Card, ProgressBar } from '@tremor/react'
import { calcularPorcentaje, determineProgressColor } from '../utils/progress'

const productMetaMap = {
  CHANCE: 500,
  PAGAMAS: 750,
  CHOLADITO: 650,
  PAGATODO: 1600,
  DOBLECHANCE: 2000,
  PATA_MILLONARIA: 3000,
  CHANCE_MILLONARIO: 5000,
  KASH: 500,
  GANE5: 1000
}

function DeterminarMeta (product, meta) {
  const divisor = productMetaMap[product]
  if (divisor) {
    return Math.ceil(meta / divisor)
  }
  return Math.ceil(meta)
}

export function ProgressSugerido ({ data }) {
  const porcentaje = calcularPorcentaje(data?.VTA_SUGERIDO, data?.META_SUGERIDO1)
  const color = determineProgressColor(porcentaje)

  return (
    <Card className={`mx-auto mt-2 w-full flex flex-col gap-4 bg-${color}-200`}>
      <article className='flex gap-4 items-center justify-center'>
        <h2 className='font-semibold text-lg'>PRODUCTO SUGERIDO {data.SUGERIDO1 || data.SUGERIDO2 || 'Aun No Se Ha Definido'}</h2>
        <span>-</span>
        <h2 className='font-semibold text-lg'>N° Sugeridos Del Día {DeterminarMeta(data.SUGERIDO1 || data.SUGERIDO2, data.META_SUGERIDO1) || '0'}</h2>
      </article>

      <article className='flex'>
        <p> Formularios Impresos: {DeterminarMeta(data.SUGERIDO1 || data.SUGERIDO2, data.VTA_SUGERIDO)}</p>
        <span className='pl-4 font-semibold'>{''}</span>
      </article>

     <article className='flex flex-col items-center'>
        <p className="text-center  dark:text-dark-tremor-content flex items-center justify-start gap-4">
          <p> <span>Progeso Actual: </span> &bull; {porcentaje || 0} %</p>
        </p>
         <ProgressBar value={porcentaje}
          color={color}
          className="mt-3" />
      </article>

      <article>
        {
           porcentaje >= 100
             ? (
              <p className='pt-2 text-center'>Buen Trabajo 😁 - Meta Completada ✅  </p>
               )
             : null
        }
        </article>
    </Card>
  )
}
