import axios from 'axios'

export const getResumenDia = async ({ codigo }) => {
  const response = await axios.post('/metasDelDiaSucursal', { codigo })
  return response.data
}
