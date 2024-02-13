import { LineChart, Title } from '@tremor/react'

const chartdata = [
  { hora: '6:00 am', 'Aspiracion x Hora': 10000, 'Venta Actual': 5870 },
  { hora: '7:00 am', 'Aspiracion x Hora': 20000, 'Venta Actual': 1000 },
  { hora: '8:00 am', 'Aspiracion x Hora': 30000, 'Venta Actual': 2456 },
  { hora: '9:00 am', 'Aspiracion x Hora': 40000, 'Venta Actual': 2108 },
  { hora: '10:00 am', 'Aspiracion x Hora': 50000, 'Venta Actual': 14150 },
  { hora: '11:00 am', 'Aspiracion x Hora': 50000, 'Venta Actual': 13260 },
  { hora: '12:00 pm', 'Aspiracion x Hora': 50000, 'Venta Actual': 30000 },
  { hora: '1:00 pm', 'Aspiracion x Hora': 30000, 'Venta Actual': 25000 },
  { hora: '2:00 pm', 'Aspiracion x Hora': 20000, 'Venta Actual': 2342 },
  { hora: '3:00 pm', 'Aspiracion x Hora': 50000, 'Venta Actual': 2473 },
  { hora: '4:00 pm', 'Aspiracion x Hora': 50000, 'Venta Actual': 3848 },
  { hora: '5:00 pm', 'Aspiracion x Hora': 50000, 'Venta Actual': 3736 },
  { hora: '6:00 pm', 'Aspiracion x Hora': 50000, 'Venta Actual': 35705 },
  { hora: '7:00 pm', 'Aspiracion x Hora': 50000, 'Venta Actual': 3736 },
  { hora: '8:00 pm', 'Aspiracion x Hora': 50000, 'Venta Actual': 3736 },
  { hora: '9:00 pm', 'Aspiracion x Hora': 50000, 'Venta Actual': 3736 },
  { hora: '10:00 pm', 'Aspiracion x Hora': 50000, 'Venta Actual': 3736 }
]

const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`

export function MetasPorHora () {
  return (
    <section className='flex flex-col items-center p-4 '>

      <Title>
        Metas Por Hora Producto Pagamas
      </Title>
      <LineChart
        className="h-80"
        data={chartdata}
        index="hora"
        categories={['Aspiracion x Hora', 'Venta Actual']}
        colors={['indigo', 'rose']}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        onValueChange={(v) => console.log(v)}
      />
    </section>
  )
}
