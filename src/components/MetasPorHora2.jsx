import { AreaChart, Title } from '@tremor/react'

const chartdata = [
  { date: '6:00 am', 'Aspiración x Hora': 0, 'Venta Actual x Hora': 0 },
  { date: '7:00 am', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': 0 },
  { date: '8:00 am', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': 3000 },
  { date: '9:00 am', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': 0 },
  { date: '10:00 am', 'Aspiración x Hora': 6000, 'Venta Actual x Hora': 3000 },
  { date: '11:00 am', 'Aspiración x Hora': 9000, 'Venta Actual x Hora': 3000 },
  { date: '12:00 pm', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': 6000 },
  { date: '1:00 pm', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': 3000 },
  { date: '2:00 pm', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': 0 },
  { date: '3:00 pm', 'Aspiración x Hora': 6000, 'Venta Actual x Hora': 3000 },
  { date: '4:00 pm', 'Aspiración x Hora': 9000, 'Venta Actual x Hora': 3000 },
  { date: '5:00 pm', 'Aspiración x Hora': 6000, 'Venta Actual x Hora': 0 },
  { date: '6:00 pm', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': null },
  { date: '7:00 pm', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': null },
  { date: '8:00 pm', 'Aspiración x Hora': 9000, 'Venta Actual x Hora': null },
  { date: '9:00 pm', 'Aspiración x Hora': 3000, 'Venta Actual x Hora': null },
  { date: '10:00 pm', 'Aspiración x Hora': 6000, 'Venta Actual x Hora': null }
]

const dataFormatter = (number) =>
  `$ ${Intl.NumberFormat('CO').format(number).toString()}`

export function MetasxHora2 () {
  const nombreProducto = 'Pagamas'

  return (

    <section className='flex flex-col items-center gap-6'>
      <Title>
        Metas Por Hora Producto {nombreProducto }
      </Title>

      <AreaChart
        className="h-72"
        data={chartdata}
        index="date"
        categories={['Aspiración x Hora', 'Venta Actual x Hora']}
        colors={['indigo', 'rose']}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        onValueChange={(v) => console.log(v)}
      />
    </section>

  )
}
