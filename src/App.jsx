import { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

export function App() {

  const [currentForm, setCurrentForm] = useState('login')
  const toggleForm = (forName) => {
    setCurrentForm(forName)
  }

  return (
    <>
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </>
  )
}