import { Route, Routes } from 'react-router-dom'

import links from '@app/links'

export default () => {
  return (
    <Routes>
      {Object.values(links).map((route) => (
        <Route path={route.path} key={route.path} element={route.element} />
      ))}
    </Routes>
  )
}
