export const calcularPorcentaje = (actual, metaDia) => {
  const percentage = (actual * 100) / metaDia
  return Math.min(100, percentage).toFixed(2) // Limita el porcentaje a 100 y dos decimal
}

export const calcularPorcentajeSinLimite = (actual, metaDia) => {
  const percentage = (actual * 100) / metaDia
  return percentage.toFixed(2)
}

export const determineProgressColor = (percentage) => {
  if (percentage <= 49.99) return 'red'
  if (percentage <= 94.99) return 'yellow'
  if (percentage <= 99.99) return 'sky'
  // eslint-disable-next-line eqeqeq
  if (percentage == 100) return 'green'
  return 'gray'
}
