import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LenisWrapper from './components/LenisWrapper.tsx'

createRoot(document.getElementById('root')!).render(
  <LenisWrapper>
    <App />
  </LenisWrapper>
)
