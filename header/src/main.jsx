import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeaderApp from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderApp />
  </StrictMode>,
)
