import { Card, ProgressCircle, Callout } from '@tremor/react'

export function ResumenAsp () {
  const nombre = 'Jorge Andres Pineda'
  const porcentaje = 100
  const informacionCartera = false
  const valor1 = 984.345
  const valor2 = 928.699

  function ColorPorcentaje (porcentaje) {
    if (porcentaje < 30) {
      return 'red'
    } else if (porcentaje >= 30 && porcentaje < 60) {
      return 'cyan'
    } else if (porcentaje >= 60 && porcentaje < 99.999) {
      return 'yellow'
    } else {
      return 'green'
    }
  }

  return (
    <div className='text-gray-700 dark:text-white grid grid-cols-3 text-4xl text-center font-semibold rounded-lg gap-2'>

      <h3 className='col-span-3 py-4 rounded-lg text-3xl flex items-center justify-center bg-slate-300 dark:bg-slate-900 '>
        Bienvenid@ <span className='text-blue-700 dark:text-yellow-400 pl-2'>{nombre}</span>
      </h3>

      <Card className='col-span-1 bg-slate-300 dark:bg-slate-900 flex flex-col justify-around'>
        <h2 className='text-center text-sm pb-2 0xl:text-lg'>Porcentaje De Meta Realizada</h2>
        <ProgressCircle value={porcentaje} size='xl' strokeWidth={20} color={ColorPorcentaje(porcentaje)}>
          <span className="text-xl text-gray-700 dark:text-white font-medium">{`${porcentaje} %`}</span>
        </ProgressCircle>
      </Card>

      {
        informacionCartera === true
          ? (
            <Card className="col-span-1 bg-slate-300 dark:bg-slate-900 flex flex-col 0xl:justify-around">
              <p className='font-semibold text-lg pb-2 text-center'><span className='text-black dark:text-white'>Información De Cartera</span></p>
              <Callout className="text-lg"
                title="Cartera Pendiente:"
                icon={undefined}
                color="rose"
              >
                <span className='text-xs'>Tu Cartera Es: $ 345.411</span>
              </Callout>
            </Card>
            )
          : (
            <Card className="col-span-1 bg-slate-300 dark:bg-slate-900 flex flex-col 0xl:justify-around">
              <p className='font-semibold text-lg pb-2 text-center'><span className='text-black dark:text-white'>Información De Cartera</span></p>
              <Callout className="text-lg"
                title="Cartera:"
                icon={undefined}
                color="teal">
                <span className='text-xs'>Actualmente No Tienes Reportes De Cartera</span>
              </Callout>
            </Card>
            )
      }

      <Card className="gap-4 p-0 dark:text-white flex flex-col items-center justify-center col-span-1 bg-slate-300 dark:bg-slate-900">
        <p className='text-xs flex flex-col items-center gap-2 w-full 0xl:text-lg'>VENTA ACTUAL CHANCE DEL DÍA: <span>$  {valor1}</span></p>
        <p className='text-xs flex flex-col items-center gap-2 w-full 0xl:text-lg'>META DEL DÍA PRODUCTOS CHANCE ES: <span>$  {valor2}</span></p>
      </Card>

      <figure className='col-span-3 flex flex-col items-center justify-center bg-slate-300 dark:bg-slate-900 rounded-md '>
        <img src="/diamante.png" alt="logo_punto" width={100} loading='lazy' className='w-60 0xl:py-6 '/>
        <img src="/logos.png" alt="logos juegos" width={400} loading='lazy' className='w-60 0xl:py-6 '/>
      </figure>
    </div>
  )
}
