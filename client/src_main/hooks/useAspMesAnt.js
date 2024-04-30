import { useEffect, useState } from 'react'
import { getDataMesAnt } from '../services/getData.js'

export function useAspiracionDiaActual (codigo, zone) {
  const [datosMesAnt, setDatosMesAnt] = useState({})

  useEffect(() => {
    getDataMesAnt(codigo, zone)
      .then(data => {
        setDatosMesAnt(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [codigo, zone])

  return datosMesAnt
}
