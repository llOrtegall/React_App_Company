import { ProgressCircle } from '@tremor/react'

export function ProgressCircleComponen ({ color, porcentaje }) {
  return (
    <section className='py-2 rounded-md dark:border dark:border-gray-500
    bg-slate-300 dark:bg-slate-900 flex flex-col justify-around gap-2'>
      <h2 className='text-center text-md py-4 2xl:text-2xl'>Porcentaje De Meta Realizada</h2>
      <ProgressCircle value={porcentaje || 0} size='xl' strokeWidth={20} color={color} className='2xl:py-4'>
        <span className="text-xs text-gray-700 2xl:text-lg dark:text-white font-medium">{`${porcentaje} %` || '0'}</span>
      </ProgressCircle>
    </section>
  )
}
