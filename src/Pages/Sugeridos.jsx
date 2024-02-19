import { ConsultarBoletasGanadas } from '../components/ConsultarBoletasGanadas.jsx'
import { ProgressSugerido } from '../components/ProgressSugerido.jsx'
import { determineProgressColor } from '../utils/progress.js'
import { useSugeridos2 } from '../hooks/useSugeridos2.js'
import { useSugeridos } from '../hooks/useSugeridos.js'

export function Sugeridos ({ zone, user }) {
  const { data, MetaSugerido, ImpresosActual, percentage } = useSugeridos({ zone, user })
  const { data2, ImpresosActual2, MetaSugerido2, percentage2 } = useSugeridos2({ zone, user })
  const color = determineProgressColor(percentage)

  return (
    <section>
      <h1 className='text-center text-3xl font-semibold py-2'>Sugeridos Del Día </h1>

      <article className='grid grid-cols-1 2xl:grid-cols-2 gap-2 2xl:gap-6'>
        <ProgressSugerido percentage={percentage} data={data} MetaSugerido={MetaSugerido} ImpresosActual={ImpresosActual} color={color} user={user} />
        {
          data2
            ? (
              <ProgressSugerido percentage={percentage2} data={data2} MetaSugerido={MetaSugerido2} ImpresosActual={ImpresosActual2} color={determineProgressColor(percentage2)} user={user} />
              )
            : null
        }
      </article>

      <footer className='py-2'>
        <ConsultarBoletasGanadas codigo={user.codigo} user={user} />
      </footer>

    </section>
  )
}
