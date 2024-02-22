import { getUtilidades } from '../services/getData'
import { useEffect, useState } from 'react'

export function TableDatos ({ cedula }) {
  const [data, setData] = useState([])

  useEffect(() => {
    getUtilidades(cedula)
      .then(data => setData(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <section className="w-full pb-8 mx-4">
      <h2 className='text-center font-semibold pb-2'>Utilidades Incluye Giros</h2>
      <table >
        <thead>
          <tr>
            <th>N° Documento</th>
            <th>Referencia</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            {
              data[0] && (
                <>
                  <td>{data[0].cc_asesor}</td>
                  <td>{data[0].comision}</td>
                </>
              )
            }
          </tr>
        </tbody>
      </table>
    </section>
  )
}
