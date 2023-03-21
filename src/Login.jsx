import { useState } from "react";

export function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}
          type="email" placeholder="correo@correo.com"
          id="email" name="email" />
        <label htmlFor="password">password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)}
          type="password" placeholder="*******"
          id="password" name="password" />
        <button>Log In</button>
      </form>
      <button onClick={() => props.onFormSwitch('register')} >Don't have an account ? register Here</button>
    </>
  )
}