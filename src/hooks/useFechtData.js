import { useEffect, useState } from 'react'
import { UnificarDatosYumbo } from '../utils/Datos.js'
import axios from 'axios'

const getDataAspDia = async (codigo) => {
  try {
    const res = await axios.post('/cumplimientoDiaProducto', { codigo })

    if (res.data) {
      return UnificarDatosYumbo(res.data)
    }
  } catch (error) {
    console.error('Error fetching data: ', error)
    // Aquí puedes manejar el error como prefieras, por ejemplo, mostrando un mensaje al usuario
  }
}

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
