import { getDataAspDia } from '../services/getData'
import { useEffect, useState } from 'react'

export function useAspiracionDiaActual (codigo, zone) {
  const [datos, setDatos] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    getDataAspDia(codigo, zone)
      .then(data => {
        setDatos(data)
      })
      .catch(error => {
        console.log(error)
        setError('Hubo un error al consultar los datos de aspiración del día actual.')
      })

    const intervalId = setInterval(() => {
      getDataAspDia(codigo, zone).then(data => {
        setDatos(data)
      }).catch(error => {
        console.log(error)
        setError('error fetching data')
      })
    }, 2 * 60 * 1000)

    return () => clearInterval(intervalId)
  }, [codigo, zone])

  return { datos, error }
}
