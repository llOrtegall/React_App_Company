import { useEffect, useState } from 'react'
import { UnificarDatosMesAntJamundi, UnificarDatosMesAntYumbo } from '../utils/Datos.js'
import axios from 'axios'

const getDataActualAnt = async (codigo, zone) => {
  try {
    const response = await axios.post('/CumplimientoMesActualProducto', { codigo, zona: zone })

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

export function useAspiracionMesActual (codigo, zone) {
  const [datosMesAnt, setDatosMesAnt] = useState({})

  useEffect(() => {
    getDataActualAnt(codigo, zone)
      .then(data => {
        // console.log(typeof data)
        // console.log(data)
        setDatosMesAnt(data)
      })
  }, [codigo, zone])

  return datosMesAnt
}
