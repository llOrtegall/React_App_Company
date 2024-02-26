import { useEffect, useState } from 'react'
import { getDataMesActualAnt } from '../services/getData.js'

export function useAspiracionMesActual (codigo, zone) {
  const [datosMesAnt, setDatosMesAnt] = useState({})

  useEffect(() => {
    getDataMesActualAnt(codigo, zone)
      .then(data => {
        setDatosMesAnt(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [codigo, zone])

  return datosMesAnt
}
