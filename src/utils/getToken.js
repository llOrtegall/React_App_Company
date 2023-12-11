export function getCookie (name) {
  const cookies = document.cookie.split(';')
  const cookie = cookies.find(cookie => cookie.startsWith(name))
  if (cookie) {
    const [, token] = cookie.split('=')
    return token
  }
  return null
}
