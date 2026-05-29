import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';


const HomePage = lazy(() => import('./pages/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));


function App() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-brand-primary text-lg animate-pulse">
          ✨ Cargando...
        </div>
      </div>
    }>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}


export default App;
