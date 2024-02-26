import { UnificarDatosJamundi, UnificarDatosMesAntJamundi, UnificarDatosMesAntYumbo, UnificarDatosYumbo } from '../utils/Datos'
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

export const getDataMesActual = async (codigo, zone) => {
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

export const getDataMesAnt = async (codigo, zone) => {
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

export const getInfoPDV = async (codigo) => {
  try {
    const response = await axios.get('/infoPuntoDeVenta', { params: { codigo } })
    return response.data
  } catch (error) {
    throw new Error('Error Al Obtener Data PDV')
  }
}

export const getSugeridos1 = async (codigo, username, zona) => {
  const response = await axios.post('/SugeridosPrimeraConsulta', { codigo, user: username, zona })
  return response.data
}

export const getSugeridos2 = async (codigo, username, zona) => {
  const response = await axios.post('/SugeridosSegundaConsulta', { codigo, user: username, zona })
  return response.data
}

export const getUtilidades = async (cedula) => {
  try {
    const response = await axios.get('/ultilidadesGet', { params: { cedula } })
    return response.data
  } catch (error) {
    throw new Error('Error Al Obtener Data Utilidades')
  }
}

export async function getUserByToken (token) {
  try {
    const userResponse = await axios.get('/profile', { headers: { Authorization: `Bearer ${token}` } })
    return userResponse.data
  } catch (error) {
    console.log(error)
    throw error
  }
}
