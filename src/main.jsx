import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './components/GlobalStyles/index.jsx';
import Lenis from '@studio-freight/lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from 'react-scroll-to-top';
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
// Khi có sự kiện scroll từ Lenis, cập nhật AOS
lenis.on('scroll', AOS.refresh);

AOS.init({
  once: true, // Đảm bảo AOS chỉ chạy một lần cho mỗi phần tử
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle>
      <ScrollToTop
        smooth
        color="var(--secondary-color)"
        style={{ backgroundColor: 'var(--primary-color)' }}
      />
      <App />
    </GlobalStyle>
  </StrictMode>,
);
