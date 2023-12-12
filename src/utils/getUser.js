import { API } from '../App.jsx'

export const GetUserCookie = async (token) => {
  const response = await fetch(`${API}/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
  const { user } = await response.json()
  return user
}
