export function Login() {
  return (
    <form action="">
      <label htmlFor="email">email</label>
      <input type="email" placeholder="correo@correo.com" id="email" name="email" />
      <label htmlFor="password">password</label>
      <input type="password" placeholder="*******" id="password" name="password" />
    </form>
  )
}