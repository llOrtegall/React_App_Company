import { useEffect, useState } from 'react'
import { UnificarDatosMesAntJamundi, UnificarDatosMesAntYumbo } from '../utils/Datos.js'
import axios from 'axios'

const getDataMesAnt = async (codigo, zone) => {
  try {
    const response = await axios.post('/cumplimientoMesAnteriorProducto', { codigo, zona: zone })

    let data
    if (zone === 39627) {
      data = await UnificarDatosMesAntYumbo(response.data)
    } else if (zone === 39628) {
      data = await UnificarDatosMesAntJamundi(response.data)
    } else {
      throw new Error('Zona no encontrada')
    }
    return data
  } catch (error) {
    console.error('Error fetching data: ', error)
    return new Error('Error fetching data')
  }
}

export function useAspiracionDiaActual (codigo, zone) {
  const [datosMesAnt, setDatosMesAnt] = useState({})

  useEffect(() => {
    getDataMesAnt(codigo, zone)
      .then(data => {
        // console.log(typeof data)
        // console.log(data)
        setDatosMesAnt(data)
      })
  }, [codigo, zone])

  return datosMesAnt
}
