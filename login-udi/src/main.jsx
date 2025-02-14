import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPageUDI from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPageUDI />
  </StrictMode>,
)
