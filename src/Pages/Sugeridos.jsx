import { determineProgressColor } from '../utils/progress.js'
import { useSugeridos } from '../hooks/useSugeridos.js'
import { ProgressSugerido } from '../components/ProgressSugerido.jsx'
import { ConsultarBoletasGanadas } from '../components/ConsultarBoletasGanadas.jsx'

export function Sugeridos ({ zone, user }) {
  const { data, MetaSugerido, ImpresosActual, percentage } = useSugeridos({ zone, user })
  const color = determineProgressColor(percentage)

  return (
    <section>
      <h1 className='text-center text-3xl font-semibold py-2'>Sugeridos Del Día </h1>

      <div className='grid grid-cols-1 gap-4'>
        <ProgressSugerido percentage={percentage} data={data} MetaSugerido={MetaSugerido} ImpresosActual={ImpresosActual} color={color} user={user} />
      </div>

      <div className='pt-4'>
        <ConsultarBoletasGanadas codigo={user.codigo} user={user} />
      </div>

    </section>
  )
}
