import { useEffect, useState } from 'react'
import { UnificarDatosYumbo, UnificarDatosJamundi } from '../utils/Datos.js'
import axios from 'axios'

const getDataAspDia = async (codigo, zone) => {
  try {
    const response = await axios.post('/cumplimientoDiaProducto', { codigo, zona: zone })
    let data
    if (zone === 39627) {
      data = await UnificarDatosYumbo(response.data)
    } else if (zone === 39628) {
      data = await UnificarDatosJamundi(response.data)
    } else {
      throw new Error('Zona no encontrada')
    }

    return data
  } catch (error) {
    console.error('Error fetching data: ', error)
    // Aquí puedes manejar el error como prefieras, por ejemplo, mostrando un mensaje al usuario
  }
}

export function useFetchData (codigo, zone) {
  const [datos, setDatos] = useState({})

  useEffect(() => {
    getDataAspDia(codigo, zone)
      .then(data => {
        setDatos(data)
      })

    const intervalId = setInterval(() => {
      getDataAspDia(codigo, zone).then(data => {
        setDatos(data)
      })
    }, 2 * 60 * 1000)

    return () => clearInterval(intervalId)
  }, [codigo, zone])

  return datos
}
