import { getDataAspDia } from '../services/getData'
import { useEffect, useState, useCallback } from 'react'

export function useAspiracionDiaActual (codigo, zone) {
  const [datos, setDatos] = useState({})
  const [error, setError] = useState(null)

  const fetchData = useCallback(() => {
    getDataAspDia(codigo, zone)
      .then(data => {
        setDatos(data)
      })
      .catch(error => {
        console.error(error)
        setError(error.message || 'Hubo un error al consultar los datos de aspiración del día actual.')
      })
  }, [codigo, zone])

  useEffect(() => {
    fetchData()

    const intervalId = setInterval(fetchData, 2 * 60 * 1000)

    return () => clearInterval(intervalId)
  }, [fetchData])

  return { datos, error }
}
