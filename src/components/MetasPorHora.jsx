import { AreaChart } from '@tremor/react'
import { useLocation } from 'react-router-dom';

const chartdata = [
  { date: '6:00 am', 'Aspiración x Hora': 0, 'Venta Actual x Hora': 0 },
  { date: '7:00 am', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': 1500 },
  { date: '8:00 am', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': 3500 },
  { date: '9:00 am', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': null },
  { date: '10:00 am', 'Aspiración x Hora': 6000, 'Venta Actual x Hora': null },
  { date: '11:00 am', 'Aspiración x Hora': 9000, 'Venta Actual x Hora': null },
  { date: '12:00 pm', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': null },
  { date: '1:00 pm', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': null },
  { date: '2:00 pm', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': null },
  { date: '3:00 pm', 'Aspiración x Hora': 6000, 'Venta Actual x Hora': null },
  { date: '4:00 pm', 'Aspiración x Hora': 9000, 'Venta Actual x Hora': null },
  { date: '5:00 pm', 'Aspiración x Hora': 6000, 'Venta Actual x Hora': null },
  { date: '6:00 pm', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': null },
  { date: '7:00 pm', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': null },
  { date: '8:00 pm', 'Aspiración x Hora': 9000, 'Venta Actual x Hora': null },
  { date: '9:00 pm', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': null },
  { date: '10:00 pm', 'Aspiración x Hora': 6000, 'Venta Actual x Hora': null }
]

const dataFormatter = (number) =>
  `$ ${Intl.NumberFormat('CO').format(number).toString()}`

export function MetasxHora () {
  const location = useLocation()
  const producto = location.state.producto

  console.log(producto)
  const nombreProducto = producto.producto || 'Producto'

  return (

    <section className='flex flex-col gap-6 pt-2'>
      <h2 className='text-2xl font-semibold text-center'>Metas Producto {nombreProducto}</h2>

      <article className='flex items-center gap-4 border p-4 rounded-lg w-80 justify-center'>
        <h3 className="text-black dark:text-white text-xl font-semibold">Meta Del Día: </h3>
        <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,567</p>
      </article>

      <AreaChart
        className="h-80"
        data={chartdata}
        index="date"
        categories={['Aspiración x Hora', 'Venta Actual x Hora']}
        colors={['indigo', 'rose']}
        valueFormatter={dataFormatter}
        yAxisWidth={70}
        onValueChange={(v) => console.log(v)}
      />
    </section>

  )
}
