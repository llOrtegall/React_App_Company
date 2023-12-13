import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// eslint-disable-next-line react/prop-types
export function BarChart ({ info, info2 }) {
  const data = {
    labels: info,
    datasets: [
      {
        label: 'N° Empleados por Proceso',
        data: info2,
        backgroundColor: 'rgba(56, 99, 132, 0.8)',
        LinearScale: 1
      }
    ]
  }

  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    },
    scales: {
      x: {
        grid: {
          display: false // Esto quita las rejillas del eje x
        }
      },
      y: {
        grid: {
          display: false // Esto quita las rejillas del eje y
        }
      }
    }
  }
  return <Bar data={data} options={options}/>
}

// eslint-disable-next-line react/prop-types
export function BarChart2 ({ info, info2 }) {
  const data = {
    labels: info,
    datasets: [
      {
        label: 'N° Empleados Por Empresa',
        data: info2,
        backgroundColor: 'rgba(56, 99, 132, 0.8)',
        LinearScale: 1
      }
    ]
  }

  const options = {
    indexAxis: 'x',
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    },
    scales: {
      x: {
        grid: {
          display: false // Esto quita las rejillas del eje x
        }
      },
      y: {
        grid: {
          display: false // Esto quita las rejillas del eje y
        }
      }
    }
  }
  return <Bar data={data} options={options}/>
}
