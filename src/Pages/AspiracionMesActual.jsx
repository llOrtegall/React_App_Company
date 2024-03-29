import { useState } from 'react'
import { BarraProgresoPro } from '../components/progresoVenta'
import { useAspiracionMesActual } from '../hooks/useApsMesActual.js'
import { ArrowsIcon } from '../components/icons/Icons.jsx'
import { RenderizarMes } from '../components/ObtenerMes.jsx'

function AspiracionMesActual ({ user, zone }) {
  const { codigo } = user
  const [isAscending, setIsAscending] = useState(false)
  const datosMesAct = useAspiracionMesActual(codigo, zone)

  const sortedData = Array.isArray(datosMesAct)
    ? [...datosMesAct]
        .sort((a, b) => {
        // Siempre coloca el elemento con id 'especial' en primer lugar
          if (a.id === 17) return -1
          if (b.id === 17) return 1

          // Para todos los demás elementos, ordena por porcentaje
          return isAscending ? parseFloat(a.porcentaje) - parseFloat(b.porcentaje) : parseFloat(b.porcentaje) - parseFloat(a.porcentaje)
        })
    : []

  return (
    <section className='w-full flex flex-col gap-2 relative'>

      <section className='w-full flex items-center justify-center gap-10'>
        <h1 className='text-2xl font-semibold '>Aspiración Mes Actual: <RenderizarMes type={'actual'} /> </h1>
        <button onClick={() => setIsAscending(!isAscending)}
          className='flex p-3 items-center justify-center bg-blue-600 text-lg rounded-md gap-4 text-white font-semibold hover:bg-blue-500'>
          <p className='text-center'>Cambiar Orden</p>
          <ArrowsIcon />
        </button>
      </section>

      <section className='grid grid-cols-2 gap-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {
          sortedData !== null && sortedData !== undefined
            ? Object.values(sortedData).map(p => (
              <BarraProgresoPro key={p.id}
                pruducto={p.producto}
                aspiracionDia={p.aspiracionDia}
                ventaActual={p.ventaActual}
                percentage={p.porcentaje}
                percentage2={p.porcentaje2}
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

export default AspiracionMesActual
