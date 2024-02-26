import { useEffect, useState } from 'react'
import { getDataMesActual } from '../services/getData.js'

export function useAspiracionMesActual (codigo, zone) {
  const [datosMesAnt, setDatosMesAnt] = useState({})

  useEffect(() => {
    getDataMesActual(codigo, zone)
      .then(data => {
        setDatosMesAnt(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [codigo, zone])

  return datosMesAnt
}
