import { useEffect, useState } from 'react'
import { getDataAspDia } from '../services/SolicitudDataAspDia.js'

export function useFetchData (codigo) {
  const [datos, setDatos] = useState({})

  useEffect(() => {
    getDataAspDia(codigo).then(data => {
      setDatos(data)
    })

    const intervalId = setInterval(() => {
      getDataAspDia(codigo).then(data => {
        setDatos(data)
      })
    }, 5 * 60 * 1000)

    return () => clearInterval(intervalId)
  }, [codigo])

  return datos
}
