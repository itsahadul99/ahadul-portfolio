import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LenisWrapper from './components/LenisWrapper.tsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <LenisWrapper>
    <App />
    <Toaster position='top-center' />
  </LenisWrapper>
)
