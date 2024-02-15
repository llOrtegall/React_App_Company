export function CodigoQR () {
  return (
    <figure className='w-1/2 flex flex-col justify-center items-center border p-2 rounded-md'>
      <h2 className='font-semibold'>Código Generado</h2>
      <img src="/qr.png" alt="codigo qr generado" width={200} />
    </figure>
  )
}
