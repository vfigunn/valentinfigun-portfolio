
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Polyfill para IntersectionObserver en navegadores antiguos
if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
  // Import polyfill asynchronously
  import('intersection-observer').then(() => {
    console.log('IntersectionObserver polyfill loaded');
  });
}

createRoot(document.getElementById("root")!).render(<App />);
