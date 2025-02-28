import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      document.querySelectorAll('img').forEach((img) => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
