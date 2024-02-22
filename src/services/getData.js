import { UnificarDatosJamundi, UnificarDatosYumbo } from '../utils/Datos'
import axios from 'axios'

export const getResumenDia = async ({ codigo }) => {
  const response = await axios.post('/metasDelDiaSucursal', { codigo })
  return response.data
}

export const getDataAspDia = async (codigo, zone) => {
  try {
    const response = await axios.get('/metarDiaxProducto', { params: { codigo, zona: zone } })
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
    console.error(error)
    throw new Error('Error fetching data')
  }
}
