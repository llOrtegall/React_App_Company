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
    <section className='w-full'>

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

    </section>
  )
}
