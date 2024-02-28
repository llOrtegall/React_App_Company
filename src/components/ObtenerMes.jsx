import { useState, useEffect } from 'react'
import { getColombiaTime } from '../services/getData.js'

const ObtenerMes = async (type) => {
  const res = await getColombiaTime()
  const date = new Date(res.fecha)

  if (type === 'anterior') {
    date.setMonth(date.getMonth() - 1)
  }
  return date.toLocaleString('CO', { month: 'long' })
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
