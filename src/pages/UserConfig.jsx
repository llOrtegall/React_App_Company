import { useAuth } from '../auth/AuthContext'

export function UserConfig () {
  const { user } = useAuth()

  return (
    user !== undefined || null
      ? <section className='w-full bg-blue-400 flex h-screen'>
        <div className='flex rounded-md bg-slate-800 border w-1/5 m-2 flex-col items-center py-6'>
          <figure className='flex justify-center items-center rounded-full text-3xl font-semibold w-20 h-20 bg-white'>
            {user.nombres[0] + user.apellidos[0]}
          </figure>
          <p className='text-center text-white text-2xl font-semibold py-2'>
            {user.nombres} {user.apellidos}
          </p>
          <p className='text-center text-white text-base font-semibold py-2'>
            <span>Usuario : </span>{user.username}
          </p>
          <p className='text-center text-white text-base font-semibold py-2'>
            <span>IAT : </span>{user.iat}
          </p>
        </div>
        <div className='w-4/5 m-2 flex flex-col rounded-md bg-slate-800'>
          <h2 className='text-center p-4 text-2xl text-white font-bold border-b-2'>Perfil De Usuario</h2>
          <section className='flex items-center justify-center py-4'>
            <div className='flex flex-col w-5/12 text-center gap-2 text-white'>
              <label className='p-2 font-semibold'>ID Unique :</label>
              <label className='p-2 font-semibold'>Nombres :</label>
              <label className='p-2 font-semibold'>Apellidos :</label>
              <label className='p-2 font-semibold'>Correo electronico :</label>
              <label className='p-2 font-semibold'>N° Documento :</label>
              <label className='p-2 font-semibold'>N° telefono :</label>
              <label className='p-2 font-semibold'>Empresa :</label>
              <label className='p-2 font-semibold'>Rol / Cargo :</label>
              <label className='p-2 font-semibold'>Fecha Registro :</label>
            </div>
            <div className='flex flex-col w-5/12 gap-2'>
              <input type='text' className='p-2 rounded-sm' readOnly value={user.id} />
              <input type='text' className='p-2 rounded-sm' readOnly value={user.nombres} />
              <input type='text' className='p-2 rounded-sm' readOnly value={user.apellidos} />
              <input type='text' className='p-2 rounded-sm' readOnly value={user.correo} />
              <input type='text' className='p-2 rounded-sm' readOnly value={user.documento} />
              <input type='text' className='p-2 rounded-sm' readOnly value={user.telefono} />
              <input type='text' className='p-2 rounded-sm' readOnly value={user.empresa} />
              <input type='text' className='p-2 rounded-sm' readOnly value={user.rol} />
              <input type='text' className='p-2 rounded-sm' readOnly value={user.fecha_creacion.split('T')[0]} />
            </div>
          </section>
        </div>
      </section>
      : null
  )
}
