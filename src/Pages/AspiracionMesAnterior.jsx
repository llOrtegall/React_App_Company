import { useState } from 'react'
import { BarraProgresoPro } from '../components/progresoVenta'
import { useAspiracionDiaActual } from '../hooks/useAspMesAnt.js'

export function AspiracionMesAnterior ({ user, zone }) {
  const { codigo } = user
  const [isAscending, setIsAscending] = useState(true)
  const { datosMesAnt } = useAspiracionDiaActual(codigo, zone)

  // console.log(datosMesAnt)

  const sortedData = Array.isArray(datosMesAnt)
    ? [...datosMesAnt]
        .sort((a, b) => isAscending ? (a.porcentaje) - (b.porcentaje) : (b.porcentaje) - (a.porcentaje))
    : []
  return (
    <section className='w-full flex flex-col gap-2 relative'>

      <section className='grid grid-cols-4 gap-4 pt-2'>
        {
          sortedData !== null && sortedData !== undefined
            ? Object.values(sortedData).map(p => (
                <BarraProgresoPro key={p.id}
                  pruducto={p.producto}
                  aspiracionDia={p.aspiracionDia}
                  ventaActual={p.ventaActual}
                />
            ))
            : (

              <h2 className='w-full col-span-4 rounded-lg bg-red-300 place-content-center text-center font-semibold py-4'>No Se Encontraron Datos De Venta </h2>
              )
        }
      </section>

    </section>
  )
}
