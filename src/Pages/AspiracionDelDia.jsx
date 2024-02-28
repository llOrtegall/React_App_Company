import { BarraProgresoPro } from '../components/progresoVenta'
import { useState } from 'react'

import { useAspiracionDiaActual } from '../hooks/useAspDiaActual.js'
import { TableDatos } from '../components/TableDatos.jsx'
import { ArrowsIcon } from '../components/icons/Icons.jsx'
import { GenerateQR } from '../components/GenerateQR.jsx'
import { MessageDisplay } from '../components/MessageDisplay.jsx'

function AspiracionDelDia ({ user, zone }) {
  const { codigo } = user

  const { datos, error } = useAspiracionDiaActual(codigo, zone)
  const [isAscending, setIsAscending] = useState(false)

  // Verifica que los datos existen antes de intentar ordenarlos
  const sortedData = Array.isArray(datos)
    ? [...datos]
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
        <h1 className='text-2xl font-semibold'>Aspiración Día Actual</h1>
        <button onClick={() => setIsAscending(!isAscending)} className='flex p-3 items-center justify-center bg-blue-600 text-lg rounded-md gap-4 text-white font-semibold hover:bg-blue-500'>
          <p className='text-center'>Cambiar Orden</p>
          <ArrowsIcon />
        </button>
      </section>

      <section className='grid grid-cols-2 gap-2 xl:grid-cols-3 xl:gap-3 2xl:grid-cols-4'>
        {
          sortedData !== null && sortedData !== undefined
            ? Object.values(sortedData).map(p => (
              <button key={p.id}
                className='hover:border border-black dark:hover:border-white'>
                <BarraProgresoPro key={p.id}
                  pruducto={p.producto}
                  aspiracionDia={p.aspiracionDia}
                  ventaActual={p.ventaActual}
                  percentage={p.porcentaje}
                  percentage2={p.porcentaje2}
                />
              </button>
            ))
            : (

              <h2 className='w-full col-span-4 rounded-lg bg-red-300 place-content-center text-center font-semibold py-4'>No Se Encontraron Datos De Venta </h2>
              )
        }
        {
          error && (
            <section className='col-span-2 py-4'>
              <MessageDisplay message={null} error={error}/>
            </section>
          )
        }
      </section>

      <section className='flex justify-around py-4'>
        <section className='p-4 1/2 dark:bg-gray-400 rounded-xl'>
          <GenerateQR usr={user} />
        </section>
        <section className='p-4 1/2 '>
          <TableDatos cedula={user.username} />
        </section>
      </section>

    </section>
  )
}

export default AspiracionDelDia
