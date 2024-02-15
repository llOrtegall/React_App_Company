import { BarraProgresoPro } from '../components/progresoVenta'
import { InfoPuntCoord } from '../components/InfoPuntoCoor'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

import { useFetchData } from '../hooks/useFechtData.js'

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
          Object.values(datos).map(p => (
            <button key={p.id} onClick={handleClickCard.bind(null, p)}
              className='hover:border border-black dark:hover:border-white'>
              <BarraProgresoPro key={p.id}
                pruducto={p.producto}
                aspiracionDia={p.aspiracionDia}
                ventaActual={p.ventaActual}
              />
            </button>
          ))
        }
      </section>

    </section>
  )
}

{ /*

      <section className='w-full flex gap-4'>
        <figure className='w-1/2 flex flex-col justify-center items-center border p-2 rounded-md'>
          <h2 className='font-semibold'>Código Generado</h2>
          <img src="/qr.png" alt="codigo qr generado" width={200} />
        </figure>

      </section>

<section className='w-1/2 border p-2 rounded-md'>
<h2 className='text-center font-semibold pb-2'>Utilidades Incluye Giros</h2>
<table >
  <thead>
    <tr>
      <th>Periodo</th>
      <th>N° Documento</th>
      <th>Referencia</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <td>1.118.523</td>
      <td>1.118.523</td>
      <td>154674</td>
    </tr>
  </tbody>
</table>
</section> */ }
