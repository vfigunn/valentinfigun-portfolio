
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Polyfill para IntersectionObserver en navegadores antiguos
if (!('IntersectionObserver' in window)) {
  import('intersection-observer');
}

createRoot(document.getElementById("root")!).render(<App />);
