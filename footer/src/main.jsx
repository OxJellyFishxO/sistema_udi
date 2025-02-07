import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import FooterApp from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FooterApp />
  </StrictMode>,
)
