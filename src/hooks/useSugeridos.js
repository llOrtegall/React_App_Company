import { calcularPorcentaje } from '../utils/progress'
import { useEffect, useState } from 'react'
import { getSugeridos1 } from '../services/getData.js'

const productMetaMap = {
  CHANCE: 1000,
  PAGAMAS: 1500,
  CHOLADITO: 650,
  PAGATODO: 1500,
  DOBLECHANCE: 4000,
  PATA_MILLONARIA: 6000,
  CHANCE_MILLONARIO: 5000,
  KASH: 500,
  GANE5: 2000
}

function DeterminarMeta (product, meta) {
  const divisor = productMetaMap[product]
  if (divisor) {
    return Math.floor(meta / divisor * 2)
  }
  return Math.floor(meta)
}

export const useSugeridos = ({ zone, user }) => {
  const { username, codigo } = user
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getSugeridos1(codigo, username, zone)
      .then(data => {
        setData(data)
      }).catch(error => {
        setError(error)
      })

    const intervalId = setInterval(getSugeridos1, 5 * 60 * 1000) // Fetch data every 5 minutes
    return () => clearInterval(intervalId) // Clear interval on component unmount
  }, [])

  const MetaSugerido = data ? DeterminarMeta(data?.SUGERIDO1, data?.META_SUGERIDO1) : 0
  const ImpresosActual = data ? DeterminarMeta(data?.SUGERIDO1, data?.VTA_SUGERIDO) : 0

  const percentage = Math.floor(calcularPorcentaje(ImpresosActual, MetaSugerido))

  return { data, MetaSugerido, ImpresosActual, error, percentage }
}
