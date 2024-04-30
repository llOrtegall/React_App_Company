export function VentasDiaResumen ({ venta, aspiracion }) {
  return (
    <article className="gap-4 py-3 flex flex-col rounded-md justify-around dark:text-white bg-slate-300 dark:bg-slate-900 dark:border dark:border-gray-500 2xl:py-6">
    <p className='text-xs gap-2 w-full flex justify-between px-4 '>
      <span className='font-bold xl:text-lg'>VENTA ACTUAL:</span>
      <span className='font-semibold xl:text-lg'>
        {(venta || 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
      </span>
    </p>
    <p className='text-xs gap-2 w-full flex justify-between px-4'>
      <span className='font-bold xl:text-lg'>META DÍA:</span>
      <span className='font-semibold xl:text-lg'>
        {(aspiracion || 0).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
      </span>
    </p>
  </article>
  )
}
