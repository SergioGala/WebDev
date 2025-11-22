import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import './variables.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Notificaciones Globales irian aqui como componente*/}
    {/*Router */}
   <RouterProvider router={router} />
  </StrictMode>,
)
