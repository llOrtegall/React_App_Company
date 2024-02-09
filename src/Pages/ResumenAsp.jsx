import { Card, ProgressCircle, Title, Text, Callout } from '@tremor/react'

export function ResumenAsp () {
  const nombre = 'Jorge Andres Pineda'
  const porcentaje = 100
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
    <>
      <article className='text-gray-700 dark:text-white text-4xl text-center font-semibold border rounded-lg p-2 mb-2'>
        <h2>Bienvenid@ <span className='text-blue-700 pl-2 dark:text-yellow-600'>{nombre}</span></h2>
      </article>

      <section className='grid grid-cols-3 gap-2'>

        <article>
          <Card className='min-h-[247px] '>
            <Title className='text-center pb-3'>Porcentaje De Meta Realizada</Title>
            <ProgressCircle value={porcentaje} size='xl' strokeWidth={20} color={ColorPorcentaje(porcentaje)}>
              <span className="text-lg text-gray-700 dark:text-white font-medium">{`${porcentaje} %`}</span>
            </ProgressCircle>
          </Card>
        </article>

        <article >
          {
            informacionCartera === true
              ? (
                <Card className="min-h-[247px] flex flex-col items-center justify-center">
                  <Text className='font-semibold text-xl'><span className='text-black dark:text-white'>Información De Cartera</span></Text>
                  <Callout
                    className="mt-4 w-full"
                    title="Cartera Pendiente:"
                    icon={undefined}
                    color="rose"
                  >
                    Tu Cartera Es: $ 345.411
                  </Callout>
                </Card>
                )
              : (
                <Card className="min-h-[247px] flex flex-col items-center justify-center">
                  <Text className='font-semibold text-xl'><span className='text-black dark:text-white'>Información De Cartera</span></Text>
                  <Callout
                    className="mt-4 w-full"
                    title="Cartera:"
                    icon={undefined}
                    color="teal">
                    Actualmente No Tienes Reportes De Cartera
                  </Callout>
                </Card>
                )
          }

        </article>

        <article>
          <Card className="min-h-[247px] gap-4 dark:text-white flex flex-col items-center justify-center">
            <h2>VENTA ACTUAL CHANCE DEL DÍA: <span>$ - {valor1}</span></h2>
            <h2>META DEL DÍA PRODUCTOS CHANCE ES: <span>$ - {valor2}</span></h2>
          </Card>
        </article>

      </section>

      <figure className='flex flex-col items-center pt-20 justify-center bg-slate-300 dark:bg-slate-900 mt-2 rounded-md'>
        <img src="/diamante.png" width={250} alt="logo_punto" />
        <img src="/logos.png" width={600} alt="logos juegos" />
      </figure>
    </>
  )
}
