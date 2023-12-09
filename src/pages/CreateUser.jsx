export function CreateUser () {
  return (
    <main className="bg-blue-400 w-full h-screen flex items-center justify-center">
      <form>
        <h1 className="text-3xl text-white font-bold text-center">Crear Usuarios </h1>
        <div className="bg-white rounded-lg shadow-lg w-96 p-6 mt-10">
          <div className="flex flex-col space-y-4">
            <input type="text" placeholder="Nombres" className="border-2 rounded-lg p-3" />
            <input type="text" placeholder="Apellidos" className="border-2 rounded-lg p-3" />
            <input type="text" placeholder="N° Documento" className="border-2 rounded-lg p-3" />
            <input type="text" placeholder="N° Telefono" className="border-2 rounded-lg p-3" />
            <input type="email" placeholder="Correo" className="border-2 rounded-lg p-3" />
            <select name="" id="" className="border-2 rounded-lg p-3">
              <option>Selecione Empresa</option>
              <option value="">Multired / Servired</option>
              <option value="">- Multired -</option>
              <option value="">- Servired -</option>
            </select>
            <select name="proceso" id="" className="border-2 rounded-lg p-3">
              <option>Seleccione Proceso</option>
              <option value={1}>Técnología</option>
              <option value={2}>Contabilidad</option>
              <option value={3}>Comercial</option>
              <option value={4}>Administración</option>
              <option value={5}>Gestión Humana</option>
              <option value={6}>Gerencia</option>
              <option value={7}>Tesoreria</option>
              <option value={8}>Auditoria</option>
              <option value={9}>Cumplimiento</option>
            </select>
            <input type="text" placeholder="Rol / Cargo" className="border-2 rounded-lg p-3" />
            <button className="bg-blue-400 text-white rounded-lg p-3 font-bold">Crear Usuario</button>
          </div>
        </div>
      </form>
    </main>
  )
}
