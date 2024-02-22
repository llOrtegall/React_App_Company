import { useEffect, useState } from 'react'
import { getResumenDia } from '../services/getData.js'
import { calcularPorcentaje, determineProgressColor } from '../utils/progress'

export const useResumenAsp = (codigo) => {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const data = await getResumenDia({ codigo })
      setData(data)
      setTimeout(fetchData, 5 * 60 * 1000) // Solicita nuevamente los datos después de 5 minutos
    }

    fetchData()
  }, [codigo])

  const porcentaje = calcularPorcentaje(data.venta_actual, data.asp_dia)
  const color = determineProgressColor(porcentaje)
  const cartera = false
  const { asp_dia: venta, venta_actual: aspiracion } = data

  return { porcentaje, color, cartera, venta, aspiracion }
}
