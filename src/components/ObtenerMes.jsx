import { useState, useEffect } from 'react'
import { getColombiaTime } from '../services/getData.js'

const ObtenerMes = async (type) => {
  const res = await getColombiaTime()

  // Crear un objeto Date a partir de la fecha obtenida
  const date = new Date(`${res.fecha}T00:00:00`)

  // Ajustar el mes según el tipo
  if (type === 'anterior') {
    date.setMonth(date.getMonth() - 1)
  }

  // Obtener el nombre del mes en español
  const mes = date.toLocaleString('es-CO', { month: 'long' })

  return mes
}

export const RenderizarMes = ({ type }) => {
  const [mes, setMes] = useState(null)

  useEffect(() => {
    ObtenerMes(type).then(setMes)
  }, [type])

  return (
    <span className='uppercase'>{mes}</span>
  )
}
