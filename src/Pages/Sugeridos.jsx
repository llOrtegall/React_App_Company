import { ConsultarBoletasGanadas } from '../components/ConsultarBoletasGanadas.jsx'
import { ProgressSugerido } from '../components/ProgressSugerido.jsx'
import { useSugeridos2 } from '../hooks/useSugeridos2.js'
import { useSugeridos } from '../hooks/useSugeridos.js'

function Sugeridos ({ zone, user }) {
  const { data } = useSugeridos({ zone, user })
  const { data2 } = useSugeridos2({ zone, user })

  return (
    <section>
      <h1 className='text-center text-3xl font-semibold py-2'>Sugeridos Del Día </h1>

      <article className='grid grid-cols-1 2xl:grid-cols-2 gap-2 2xl:gap-6'>
        <ProgressSugerido data={data} />
      </article>

      <article>
        <ProgressSugerido data={data2} />
      </article>

      <footer className='py-2'>
        <ConsultarBoletasGanadas codigo={user.codigo} user={user.username} names={user.nombres}/> 
      </footer>

    </section>
  )
}

export default Sugeridos
