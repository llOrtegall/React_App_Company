import { BarraProgresoPro } from '../components/progresoVenta'
import { InfoPuntCoord } from '../components/InfoPuntoCoor'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

import { useFetchData } from '../hooks/useFechtData.js'
import { CodigoQR } from '../components/CodigoQR.jsx'
import { TableDatos } from '../components/TableDatos.jsx'

export function AspiracionDelDia ({ user }) {
  const datos = useFetchData(user.codigo)
  const navigate = useNavigate()

  const handleClickCard = useCallback((p) => {
    navigate(`/metas/p/${p.id}`, { state: { p } })
  }, [navigate])

  return (
    <section className='w-full flex flex-col gap-2 relative'>

      <InfoPuntCoord titulo='Aspiración Del Día' codigo={user.codigo} />

      <section className='grid grid-cols-4 gap-4 pt-2'>
        {
          datos !== null && datos !== undefined
            ? Object.values(datos).map(p => (
              <button key={p.id} onClick={handleClickCard.bind(null, p)}
                className='hover:border border-black dark:hover:border-white'>
                <BarraProgresoPro key={p.id}
                  pruducto={p.producto}
                  aspiracionDia={p.aspiracionDia}
                  ventaActual={p.ventaActual}
                />
              </button>
            ))
            : (

              <h2 className='w-full col-span-4 rounded-lg bg-red-300 place-content-center text-center font-semibold py-4'>No Se Encontraron Datos De Venta </h2>
              )
        }
      </section>

      <section className='flex items-center'>
        <CodigoQR />
        <TableDatos />
      </section>

    </section>
  )
}
