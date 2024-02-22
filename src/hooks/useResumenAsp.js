import { useEffect, useState, useCallback } from 'react'
import { getResumenDia } from '../services/getData.js'
import { calcularPorcentaje, determineProgressColor } from '../utils/progress'

export const useResumenAsp = (codigo) => {
  const [data, setData] = useState({})
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    try {
      const data = await getResumenDia({ codigo })
      setData(data)
    } catch (error) {
      setError(error)
    }
  }, [codigo])

  useEffect(() => {
    fetchData()
    const intervalId = setInterval(fetchData, 5 * 60 * 1000) // Solicita nuevamente los datos después de 5 minutos

    return () => clearInterval(intervalId)
  }, [fetchData])

  const porcentaje = calcularPorcentaje(data.venta_actual, data.asp_dia)
  const color = determineProgressColor(porcentaje)
  const cartera = false
  const { asp_dia: venta, venta_actual: aspiracion } = data

  return { porcentaje, color, cartera, venta, aspiracion, error }
}
