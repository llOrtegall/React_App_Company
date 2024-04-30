import { ConsultarBoletasGanadas } from '../components/ConsultarBoletasGanadas.jsx'
import { ProgressSugerido } from '../components/ProgressSugerido.jsx'
import { useSugeridos2 } from '../hooks/useSugeridos2.js'
import { useSugeridos } from '../hooks/useSugeridos.js'

function Sugeridos ({ zone, user }) {
  const { data } = useSugeridos({ zone, user })
  const { data2 } = useSugeridos2({ zone, user })

  return (
    <section className='flex flex-col'>
      <h1 className='text-center text-3xl font-semibold py-2'>Sugeridos Del Día </h1>

      <main className='2xl:flex items-center gap-4'>
        <article className='2xl:grid-cols-2 gap-2 2xl:gap-6'>
          <ProgressSugerido data={data} />
        </article>

        {
          data2
            ? (
              <article className='2xl:grid-cols-2 gap-2 2xl:gap-6'>
                <ProgressSugerido data={data2} />
              </article>
              )
            : null
        }
      </main>

      <footer className='py-2'>
        <ConsultarBoletasGanadas codigo={user.codigo} user={user.username} names={user.nombres} />
      </footer>

    </section>
  )
}

export default Sugeridos
