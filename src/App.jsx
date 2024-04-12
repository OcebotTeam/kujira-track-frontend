import './output.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Page } from './components/ui/layout/Page'
import { Dashboard } from './routes/Dashboard'
import { Tokens } from './routes/Tokens'

export function App (props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page />}>
          <Route index element={<Dashboard />} />
          <Route path='tokens' element={<Tokens />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
