import { useEffect, useState } from 'react'
import { UnificarDatos } from '../utils/Datos.js'
import axios from 'axios'

const getDataAspDia = async (codigo) => {
  try {
    const res = await axios.post('/cumplimientoDiaProducto', { codigo })

    if (res.data) {
      return UnificarDatos(res.data)
    }
  } catch (error) {
    console.error('Error fetching data: ', error)
    // Aquí puedes manejar el error como prefieras, por ejemplo, mostrando un mensaje al usuario
  }
}

export function useFetchData (codigo) {
  const [datos, setDatos] = useState({})

  console.log(datos)

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
