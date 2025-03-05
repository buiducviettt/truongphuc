import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './components/GlobalStyles/index.jsx';
import Lenis from '@studio-freight/lenis';
const lenis = new Lenis({
  duration: 1.2, // Tốc độ cuộn
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Hiệu ứng easing
  smooth: true, // Bật cuộn mượt
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </StrictMode>,
);
