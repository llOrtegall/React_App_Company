export const GetUserCookie = async (token) => {
  const response = await fetch('http://172.20.1.160:3000/profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
  const { user } = await response.json()
  return user
}
