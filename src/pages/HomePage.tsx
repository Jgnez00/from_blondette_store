/**
 * 🏠 Página Principal
 * Casa Professional BLONDETTE
 * 
 * Placeholder inicial - Se construirá en fases siguientes
 */

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-6">
          {/* Logo / Título */}
          <h1 className="text-display font-heading text-white">
            Casa Professional{' '}
            <span className="text-brand-primary">BLONDETTE</span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-text-secondary text-h3 font-light">
            Tu tienda de belleza profesional
          </p>
          
          {/* Barra decorativa */}
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full" />
          
          {/* Estado del proyecto */}
          <div className="mt-8 glass inline-block px-6 py-3">
            <p className="text-text-secondary text-sm">
              🚀 Fase 0: Setup completado
            </p>
          </div>
        </div>
      </main>
      
      {/* Footer mínimo temporal */}
      <footer className="text-center py-4 text-text-muted text-sm">
        <p>&copy; 2026 Casa Professional BLONDETTE</p>
      </footer>
    </div>
  );
}


export default HomePage;
