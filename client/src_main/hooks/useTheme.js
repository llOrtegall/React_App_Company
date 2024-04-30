import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider.jsx' // Asegúrate de reemplazar esto con la ruta correcta a tu archivo ThemeProvider

export function useTheme () {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
