import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Toaster } from 'sonner';
import DisableInspect from './components/DisableInspect.tsx';
createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <Toaster position="top-center" />
    <DisableInspect />
  </>
);
