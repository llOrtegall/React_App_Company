import { ProgressBarUsageExample } from '../components/progresoVenta'
import { InfoPuntCoord } from '../components/InfoPuntoCoor'
import { useNavigate } from 'react-router-dom'

export function AspiracionDelDia () {
  const productos = [
    {
      id: 1,
      producto: 'Juegos Azar',
      ventaActual: 40000,
      aspiracionDia: 35000
    },
    {
      id: 2,
      producto: 'Chance 4 y 3 Cifras',
      ventaActual: 444567,
      aspiracionDia: 452000
    },
    {
      id: 3,
      producto: 'Pagamas',
      ventaActual: 22000,
      aspiracionDia: 55678
    },
    {
      id: 4,
      producto: 'Paga Todo',
      ventaActual: 34423,
      aspiracionDia: 50323
    },
    {
      id: 5,
      producto: 'Gane 5',
      ventaActual: 34423,
      aspiracionDia: 50323
    },
    {
      id: 6,
      producto: 'Pata Millonaria',
      ventaActual: 513050,
      aspiracionDia: 50000
    },
    {
      id: 7,
      producto: 'Doble chance',
      ventaActual: 34423,
      aspiracionDia: 50323
    },
    {
      id: 8,
      producto: 'Chance Millonario',
      ventaActual: 34423,
      aspiracionDia: 50323
    },
    {
      id: 9,
      producto: 'Astros',
      ventaActual: 34423,
      aspiracionDia: 50323
    },
    {
      id: 10,
      producto: 'Loteria Fisica',
      ventaActual: 34423,
      aspiracionDia: 50323
    },
    {
      id: 11,
      producto: 'Loteria Virtual',
      ventaActual: 34423,
      aspiracionDia: 50323
    },
    {
      id: 12,
      producto: 'BetPlay',
      ventaActual: 34423,
      aspiracionDia: 50323
    },
    {
      id: 13,
      producto: 'Giros TX',
      ventaActual: 41000,
      aspiracionDia: 523523
    },
    {
      id: 14,
      producto: 'Baloto',
      ventaActual: 651241,
      aspiracionDia: 773427
    },
    {
      id: 15,
      producto: 'Reargas',
      ventaActual: 11512,
      aspiracionDia: 378745
    },
    {
      id: 16,
      producto: 'Raspe y Listo',
      ventaActual: 123141,
      aspiracionDia: 154000
    }
  ]

  const navigate = useNavigate()

  const handleClickCard = (producto) => {
    navigate(`/metas/producto/${producto.id}`, { state: { producto } })
  }

  return (
    <section className='w-full flex flex-col gap-2'>

      <InfoPuntCoord title={'Aspiración Del Día'} />

      <section className='grid grid-cols-4 gap-4 pt-2'>
        {
          productos.map((producto, index) => {
            return (
              <button key={index} className='hover:border border-black' onClick={() => handleClickCard(producto)}>
                <ProgressBarUsageExample key={index} pruducto={producto.producto}
                  ventaActual={producto.ventaActual} aspiracionDia={producto.aspiracionDia} />
              </button>
            )
          })
        }
      </section>

      <section className='w-full flex gap-4'>
        <figure className='w-1/2 flex flex-col justify-center items-center border p-2 rounded-md'>
          <h2 className='font-semibold'>Código Generado</h2>
          <img src="/qr.png" alt="codigo qr generado" width={200}/>
        </figure>

        <section className='w-1/2 border p-2 rounded-md'>
          <h2 className='text-center font-semibold pb-2'>Utilidades Incluye Giros</h2>
          <table >
            <thead>
              <th>Periodo</th>
              <th>N° Documento</th>
              <th>Referencia</th>

            </thead>
            <tbody >
              <td>1.118.523</td>
              <td>1.118.523</td>
              <td>154674</td>
            </tbody>
          </table>
        </section>

      </section>

    </section>
  )
}
