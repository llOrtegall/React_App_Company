import { useEffect, useState } from 'react'
import axios from 'axios'
import { RenderCategoria } from '../components/RenderCategoria'
import { getColombiaTime } from '../services/HoraColombia'

export function HistorialCategorias ({ codigo }) {
  const [historial, setHistorial] = useState([])
  const [ano, setAno] = useState(null)

  useEffect(() => {
    axios.post('/ConsultarHistorialCategorias', { codigo })
      .then(response => {
        setHistorial(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    getColombiaTime()
      .then(
        data => setAno(data.fecha)
      )
  }, [])

  const anoActual = ano?.split('-', 1)
  const anno = anoActual ? parseInt(anoActual[0]) : null
  const annoAnt = anno - 1

  // TODO: filtrar del array los elementos de este año
  const histFilAnt = historial?.filter(historial => historial.ANHO === annoAnt)
  const histFilAct = historial?.filter(historial => historial.ANHO === anno)

  const MapeoMes = {
    1: 'Enero',
    2: 'Febrero',
    3: 'Marzo',
    4: 'Abril',
    5: 'Mayo',
    6: 'Junio',
    7: 'Julio',
    8: 'Agosto',
    9: 'Septiembre',
    10: 'Octubre',
    11: 'Noviembre',
    12: 'Diciembre'
  }

  const ObjectxMes = histFilAnt.map(historial => {
    return {
      mes: MapeoMes[historial.MES],
      categoria: historial.CATEGORIA,
      version: historial.VERSION
    }
  })

  const ObjectxMes2 = histFilAct.map(hit => {
    return {
      mes: MapeoMes[hit.MES],
      categoria: hit.CATEGORIA,
      version: hit.VERSION
    }
  })

  return (
    <section className='flex w-full p-2'>
      <div className='w-1/2 p-2'>
        <h2 className='text-center font-semibold text-xl 2xl:text-2xl xl:grid-cols-2 pb-2'>Año Pasado {annoAnt}</h2>
        <ul className='grid grid-cols-1 xl:grid-cols-2'>
        {ObjectxMes.map((item, index) => (
            <li key={index} className='flex justify-between items-center w-56'>
              <span className='pb-8 font-semibold text-xl'>{item.mes}:</span>
              <RenderCategoria key={index} cat={item.categoria} ver={item.version} size={100} />
            </li>
        ))}
        </ul>
      </div>

      <div className='w-1/2 p-2'>
        <h2 className='text-center font-semibold text-xl 2xl:text-2xl xl:grid-cols-2 pb-2'>Año Actual {anno}</h2>
        <ul className='grid grid-cols-1 xl:grid-cols-2 '>
        {ObjectxMes2.map((item, index) => (
            <li key={index} className='flex justify-between items-center w-56'>
              <span className='pb-8 font-semibold text-xl'>{item.mes}:</span>
              <RenderCategoria key={index} cat={item.categoria} ver={item.version} size={100} />
            </li>
        ))}
        </ul>
      </div>
    </section>
  )
}
