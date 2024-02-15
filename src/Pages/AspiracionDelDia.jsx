import { BarraProgresoPro } from '../components/progresoVenta'
import { useNavigate } from 'react-router-dom'
import { useCallback, useState } from 'react'

import { useFetchData } from '../hooks/useFechtData.js'
import { CodigoQR } from '../components/CodigoQR.jsx'
import { TableDatos } from '../components/TableDatos.jsx'
import { ArrowsIcon } from '../components/icons/Icons.jsx'

export function AspiracionDelDia ({ user }) {
  const datos = useFetchData(user.codigo)
  const navigate = useNavigate()
  const [isAscending, setIsAscending] = useState(true)

  const handleClickCard = useCallback((p) => {
    navigate(`/metas/p/${p.id}`, { state: { p } })
  }, [navigate])

  // Verifica que los datos existen antes de intentar ordenarlos
  const sortedData = Array.isArray(datos) ? [...datos].sort((a, b) => isAscending ? parseFloat(a.porcentaje) - parseFloat(b.porcentaje) : parseFloat(b.porcentaje) - parseFloat(a.porcentaje)) : []
  return (
    <section className='w-full flex flex-col gap-2 relative'>

      <section className='w-full flex items-center justify-center'>
        <button onClick={() => setIsAscending(!isAscending)} className='flex p-3 items-center justify-center bg-blue-600 text-lg rounded-md gap-4 text-white font-semibold hover:bg-blue-500'>
          <p className='text-center'>Cambiar Orden</p>
          <ArrowsIcon />
        </button>
      </section>

      <section className='grid grid-cols-4 gap-4 pt-2'>
        {
          sortedData !== null && sortedData !== undefined
            ? Object.values(sortedData).map(p => (
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

      <section className='flex'>
        <CodigoQR />
        <TableDatos />
      </section>

    </section>
  )
}
