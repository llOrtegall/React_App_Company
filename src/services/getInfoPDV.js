import axios from 'axios'

export const getInfoPDV = async (codigo) => {
  const response = await axios.post('/infoPuntoDeVenta', { codigo })
  try {
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}
