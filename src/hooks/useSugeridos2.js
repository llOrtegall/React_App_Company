import { calcularPorcentaje } from '../utils/progress'
import { useEffect, useState } from 'react'
import axios from 'axios'

const productMetaMap = {
  CHANCE: 1000,
  PAGAMAS: 1500,
  CHOLADITO: 650,
  DOBLECHANCE: 4000,
  PATA: 3000,
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

export const useSugeridos2 = ({ zone, user }) => {
  const { username, codigo } = user
  const [data2, setData2] = useState(null)
  const [error2, setError2] = useState(null)

  useEffect(() => {
    const fetchData = () => {
      axios.post('/SugeridosSegundaConsulta', { codigo, user: username, zona: zone })
        .then((response) => {
          setData2(response.data)
        })
        .catch((error) => {
          setError2(error.response.data.message)
        })
    }
    fetchData()
    const intervalId = setInterval(fetchData, 5 * 60 * 1000) // Fetch data every 5 minutes
    return () => clearInterval(intervalId) // Clear interval on component unmount
  }, [])

  const MetaSugerido2 = data2 ? DeterminarMeta(data2?.SUGERIDO2, data2?.META_SUGERIDO1) : 0
  const ImpresosActual2 = data2 ? DeterminarMeta(data2?.SUGERIDO2, data2?.VTA_SUGERIDO) : 0

  const percentage2 = Math.floor(calcularPorcentaje(ImpresosActual2, MetaSugerido2))

  return { data2, MetaSugerido2, ImpresosActual2, error2, percentage2 }
}
