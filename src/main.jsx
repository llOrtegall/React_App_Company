import { AuthProvider } from './auth/AuthContext'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import React from 'react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
