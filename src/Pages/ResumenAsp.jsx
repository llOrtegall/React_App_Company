import { Card, ProgressCircle, Title, Text, Callout } from '@tremor/react'

export function ResumenAsp () {
  const nombre = 'Jorge Andres Pineda'
  const porcentaje = 10
  const informacionCartera = true
  const valor1 = 984.345
  const valor2 = 928.699

  function ColorPorcentaje (porcentaje) {
    if (porcentaje < 30) {
      return 'red'
    } else if (porcentaje >= 30 && porcentaje < 60) {
      return 'cyan'
    } else if (porcentaje >= 60 && porcentaje < 99) {
      return 'yellow'
    } else {
      return 'green'
    }
  }

  return (
    <div className='text-gray-700 h-full dark:text-white grid grid-cols-3 text-4xl text-center font-semibold rounded-lg gap-2'>

      <Title className='col-span-3 rounded-lg text-3xl flex items-center justify-center bg-slate-300 dark:bg-slate-900 '>
        Bienvenid@ <span className='text-blue-700 dark:text-yellow-400 pl-2'>{nombre}</span>
      </Title>

      <Card className='col-span-1 bg-slate-300 dark:bg-slate-900 flex flex-col justify-around'>
        <Title className='text-center'>Porcentaje De Meta Realizada</Title>
        <ProgressCircle value={porcentaje} size='xl' strokeWidth={20} color={ColorPorcentaje(porcentaje)}>
          <span className="text-lg text-gray-700 dark:text-white font-medium">{`${porcentaje} %`}</span>
        </ProgressCircle>
      </Card>

      {
        informacionCartera === true
          ? (
            <Card className="col-span-1 bg-slate-300 dark:bg-slate-900 flex flex-col">
              <Text className='font-semibold text-2xl pb-2 text-center'><span className='text-black dark:text-white'>Información De Cartera</span></Text>
              <Callout className="w-full h-full text-3xl"
                title="Cartera Pendiente:"
                icon={undefined}
                color="rose"
              >
                <span className='text-lg'>Tu Cartera Es: $ 345.411</span>
              </Callout>
            </Card>
            )
          : (
            <Card className="col-span-1 bg-slate-300 dark:bg-slate-900 flex flex-col">
              <Text className='font-semibold text-2xl pb-2 text-center'><span className='text-black dark:text-white'>Información De Cartera</span></Text>
              <Callout className="w-full h-full text-3xl"
                title="Cartera:"
                icon={undefined}
                color="teal">
                <span className='text-lg'>Actualmente No Tienes Reportes De Cartera</span>
              </Callout>
            </Card>
            )
      }

      <Card className="gap-4 dark:text-white flex flex-col items-center justify-center col-span-1 bg-slate-300 dark:bg-slate-900">
        <h2>VENTA ACTUAL CHANCE DEL DÍA: <span>$ - {valor1}</span></h2>
        <h2>META DEL DÍA PRODUCTOS CHANCE ES: <span>$ - {valor2}</span></h2>
      </Card>

      <figure className='col-span-3 flex flex-col items-center justify-center bg-slate-300 dark:bg-slate-900 rounded-md '>
        <img src="/diamante.png" width={250} alt="logo_punto" />
        <img src="/logos.png" width={600} alt="logos juegos" />
      </figure>
    </div>
  )
}
