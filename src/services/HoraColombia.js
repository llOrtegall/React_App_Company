import axios from 'axios'

export const getColombiaTime = async () => {
  const response = await axios.get('http://worldtimeapi.org/api/timezone/America/Bogota')

  const fecha = response.data.datetime.split('T')[0]
  const hora = response.data.datetime.split('T')[1].split('.')[0]

  return { fecha, hora }
}
