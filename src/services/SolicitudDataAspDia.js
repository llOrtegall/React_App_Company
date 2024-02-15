import axios from 'axios'
import { UnificarDatos } from '../utils/Datos.js'

export const getDataAspDia = (codigo) => {
  return axios.post('/cumplimientoDiaProducto', { codigo })
    .then(res => {
      if (res.data) {
        return UnificarDatos(res.data)
      }
    })
    .catch(error => {
      console.error('Error fetching data: ', error)
      // Aquí puedes manejar el error como prefieras, por ejemplo, mostrando un mensaje al usuario
    })
}
