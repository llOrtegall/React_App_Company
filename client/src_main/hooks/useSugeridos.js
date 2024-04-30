import { getSugeridos1 } from '../services/getData.js'
import { useEffect, useState } from 'react'

export const useSugeridos = ({ zone, user }) => {
  const { username, codigo } = user
  const [data, setData] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    getSugeridos1(codigo, username, zone)
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        setError(error.response.data.error || 'Error fetching data')
      })
  }, [])

  return { data, error }
}
