import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'

import { ResumenAsp } from './Pages/ResumenAsp'

export function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/metas/resumen' element={<ResumenAsp />} />
        </Route>
      </Routes>
    </>
  )
}
