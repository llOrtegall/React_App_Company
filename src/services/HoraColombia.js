import axios from 'axios'

export const getColombiaTime = async () => {
  const response = await axios.get('/dataTime')

  const { fecha, hora } = response.data

  return { fecha, hora }
}
