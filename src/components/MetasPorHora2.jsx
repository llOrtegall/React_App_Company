import { AreaChart, Title } from '@tremor/react'

const chartdata = [
  { date: '6:00 am', 'Aspiración x Hora': 2890, 'Venta Actual x Hora': 2338 },
  { date: '7:00 am', 'Aspiración x Hora': 2756, 'Venta Actual x Hora': 2103 },
  { date: '8:00 am', 'Aspiración x Hora': 3322, 'Venta Actual x Hora': 2194 },
  { date: '9:00 am', 'Aspiración x Hora': 3470, 'Venta Actual x Hora': 2108 },
  { date: '10:00 am', 'Aspiración x Hora': 3475, 'Venta Actual x Hora': 1812 },
  { date: '11:00 am', 'Aspiración x Hora': 3129, 'Venta Actual x Hora': 1726 },
  { date: '12:00 pm', 'Aspiración x Hora': 3490, 'Venta Actual x Hora': 1982 },
  { date: '1:00 pm', 'Aspiración x Hora': 2903, 'Venta Actual x Hora': 2012 },
  { date: '2:00 pm', 'Aspiración x Hora': 2643, 'Venta Actual x Hora': 2342 },
  { date: '3:00 pm', 'Aspiración x Hora': 2837, 'Venta Actual x Hora': 2473 },
  { date: '4:00 pm', 'Aspiración x Hora': 2954, 'Venta Actual x Hora': null },
  { date: '5:00 pm', 'Aspiración x Hora': 3239, 'Venta Actual x Hora': null },
  { date: '6:00 pm', 'Aspiración x Hora': 3239, 'Venta Actual x Hora': null },
  { date: '7:00 pm', 'Aspiración x Hora': 3239, 'Venta Actual x Hora': null },
  { date: '8:00 pm', 'Aspiración x Hora': 3239, 'Venta Actual x Hora': null },
  { date: '9:00 pm', 'Aspiración x Hora': 3239, 'Venta Actual x Hora': null },
  { date: '10:00 pm', 'Aspiración x Hora': 3239, 'Venta Actual x Hora': null }
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
        className="h-80"
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
