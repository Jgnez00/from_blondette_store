import { Link } from 'react-router-dom';


function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-8xl font-bold text-brand-primary mb-4">404</h1>
      <h2 className="text-h2 font-heading text-white mb-2">
        Página no encontrada
      </h2>
      <p className="text-text-secondary mb-8 max-w-md">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link
        to="/"
        className="btn-primary"
      >
        ← Volver al inicio
      </Link>
    </div>
  );
}


export default NotFoundPage;