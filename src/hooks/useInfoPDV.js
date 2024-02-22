import { useEffect, useState } from 'react'
import { getInfoPDV } from '../services/getData.js'

export function useInfoPDV ({ codigo }) {
  const [data, setData] = useState({})

  useEffect(() => {
    getInfoPDV(codigo)
      .then(res => setData(res))
      .catch(err => console.error(err))
  }, [codigo])

  const categoria = data.CATEGORIA
  const nombre = data.NOMBRE
  const supervisor = data.SUPERVISOR
  const version = data.VERSION
  const zona = data.zona

  return { categoria, nombre, supervisor, version, zona }
}
