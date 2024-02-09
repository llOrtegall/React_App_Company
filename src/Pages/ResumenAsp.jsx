import { Card, ProgressCircle, Title } from '@tremor/react'

export function ResumenAsp () {
  const nombre = 'Jorge Andres Pineda'
  const porcentaje = 75

  return (
    <section>
      <article className='text-gray-700 dark:text-white '>
        <h2>Bienvenid@ {nombre}</h2>
      </article>

      <article className=''>
        <Card className='w-[560px]'>
          <Title className='text-center pb-3'>Porcentaje De Meta Realizada</Title>
          <ProgressCircle value={porcentaje} size='xl' strokeWidth={20} color="cyan">
            <span className="text-lg text-gray-700 dark:text-white font-medium">{`${porcentaje} %`}</span>
          </ProgressCircle>
        </Card>
      </article>
    </section>
  )
}
