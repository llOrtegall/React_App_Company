import { Card, ProgressCircle } from '@tremor/react'

export function ResumenAsp () {
  const nombre = 'Jorge Andres Pineda'
  const porcentaje = 20

  return (
    <section>
      <article>
        <h2>Bienvenid@ {nombre}</h2>
      </article>

      <article>
        <Card className='w-[560px]'>
          <ProgressCircle value={porcentaje} size='xl' strokeWidth={20} color="cyan">
            <span className="text-lg text-gray-700 font-medium">{`${porcentaje} %`}</span>
          </ProgressCircle>
        </Card>
      </article>
    </section>
  )
}
