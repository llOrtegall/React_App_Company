export function App () {
  return (
    <section className="w-[100vw] h-[100vh] flex">
      <nav className="bg-black text-white w-[30vh] p-4 flex flex-col gap-8 items-center justify-between">
        <section className="flex flex-col gap-4 items-center">
          <figure className="py-12">
            <img src="ganeyumbo.png" width={100} alt="logo gane yumbo" />
          </figure>

          <ul className="flex flex-col gap-4 uppercase font-semibold">
            <li><a className="hover:text-yellow-400 hover:underline" href="#">Resumen De Aspiración</a></li>
            <li><a className="hover:text-yellow-400 hover:underline" href="#">Arpiración Del Día</a></li>
            <li><a className="hover:text-yellow-400 hover:underline" href="#">Aspiración Mes Actual</a></li>
            <li><a className="hover:text-yellow-400 hover:underline" href="#">Aspiración Mes Anterior</a></li>
            <li><a className="hover:text-yellow-400 hover:underline" href="#">Sugeridos</a></li>
          </ul>
        </section>

        <button className="bg-blue-800 p-3 font-semibold rounded-lg hover:bg-blue-600">
          Cerrar Sesión
        </button>

      </nav>

      <main>
        Aqui SERA LA SECTION MAIN
      </main>

    </section>
  )
}
