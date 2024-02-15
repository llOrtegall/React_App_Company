import { ProgresoProducto } from '../components/progresoVenta'
import { UnificarDatos } from '../utils/Datos.js'
import { InfoPuntCoord } from '../components/InfoPuntoCoor'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function AspiracionDelDia ({ user }) {
  const [datos, setDatos] = useState({})
  const [count, setCount] = useState(5 * 60) // Inicia la cuenta en 5 minutos (en segundos)
  const { codigo } = user

  useEffect(() => {
    const fetchData = () => {
      axios.post('/cumplimientoDiaProducto', { codigo })
        .then(res => {
          if (res.data) {
            UnificarDatos(res.data)
              .then(data => setDatos(data))
          }
        })
    }

    fetchData() // Llama a la función inmediatamente al montar el componente

    const intervalId = setInterval(() => {
      fetchData()
      setCount(5 * 60) // Reinicia la cuenta cada 5 minutos
    }, 5 * 60 * 1000) // Llama a la función cada 5 minutos

    return () => clearInterval(intervalId) // Limpia el intervalo al desmontar el componente
  }, [])

  useEffect(() => {
    const countdownId = count > 0 && setInterval(() => {
      setCount(count => count - 1) // Disminuye la cuenta en 1 cada segundo
    }, 1000)

    return () => clearInterval(countdownId) // Limpia el intervalo al desmontar el componente
  }, [])

  const minutes = Math.floor(count / 60)
  const seconds = count % 60

  const navigate = useNavigate()

  const handleClickCard = (producto) => {
    navigate(`/metas/producto/${producto.id}`, { state: { producto } })
  }

  return (
    <section className='w-full flex flex-col gap-2 relative'>

    <div className='absolute'>
      {/* Tu código de renderizado aquí */}
      {minutes}:{seconds < 10 ? '0' + seconds : seconds} hasta la próxima actualización
    </div>

      <InfoPuntCoord titulo='Aspiración Del Día' codigo={user.codigo}/>

      <section className='grid grid-cols-4 gap-4 pt-2'>
        {
          Object.keys(datos).length > 0 &&
          Object.values(datos).map(producto => (
            <button key={producto.id} className='hover:border border-black dark:hover:border-white' onClick={() => handleClickCard(producto)}>
              <ProgresoProducto key={producto.id} pruducto={producto.producto} porcentaje={producto.porcentaje} aspiracionDia={producto.aspiracionDia} ventaActual={producto.ventaActual} />
            </button>
          ))
        }
      </section>

      <section className='w-full flex gap-4'>
        <figure className='w-1/2 flex flex-col justify-center items-center border p-2 rounded-md'>
          <h2 className='font-semibold'>Código Generado</h2>
          <img src="/qr.png" alt="codigo qr generado" width={200} />
        </figure>

        <section className='w-1/2 border p-2 rounded-md'>
          <h2 className='text-center font-semibold pb-2'>Utilidades Incluye Giros</h2>
          <table >
            <thead>
              <tr>
                <th>Periodo</th>
                <th>N° Documento</th>
                <th>Referencia</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td>1.118.523</td>
                <td>1.118.523</td>
                <td>154674</td>
              </tr>
            </tbody>
          </table>
        </section>

      </section>

    </section>
  )
}
