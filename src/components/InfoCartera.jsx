import { Callout } from '@tremor/react'

export function Cartera ({ resports }) {
  return (
    resports === true
      ? (
        <Callout color="rose" title='Cartera' className='col-span-1 dark:border dark:border-gray-500 text-sm xl:text-lg 2xl:text-2xl'>
          <span className='text-sm xl:text-lg 2xl:text-2xl'>Tu Cartera Es: $ 345.411</span>
        </Callout>
        )
      : (
        <Callout color="green" title='Cartera' className='col-span-1 dark:border dark:border-gray-500 text-sm xl:text-lg 2xl:text-2xl'>
          <span className='text-sm xl:text-lg 2xl:text-2xl'>No tienes reportes</span>
        </Callout>
        )
  )
}
