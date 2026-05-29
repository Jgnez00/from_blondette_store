/**
 * 🎨 Sistema de Diseño - Paleta de Colores
 * Casa Professional BLONDETTE
 * 
 * Estos tokens están sincronizados con el tema de TailwindCSS v4
 * definido en src/index.css (directiva @theme)
 */

export const colors = {
  // Colores principales de marca
  brand: {
    primary: '#f0a3c2',      // Rosa principal - Botones, acentos
    secondary: '#c44569',    // Rojo oscuro - Hover states
    accent: '#aa3bff',       // Púrpura acento
    dark: '#16171d',         // Fondo oscuro principal
    darker: '#0a0a0a',       // Fondo más oscuro (gradientes)
  } as const,

  // Texto
  text: {
    primary: '#f3f4f6',      // Texto principal (dark mode)
    secondary: '#9ca3af',    // Texto secundario
    heading: '#f3f4f6',      // Títulos
    muted: '#6b6375',        // Texto muted
    dark: '#08060d',         // Texto dark (light mode)
  } as const,

  // Fondos y superficies
  surface: {
    card: 'rgba(20, 20, 20, 0.7)',
    border: 'rgba(255, 255, 255, 0.08)',
    hover: 'rgba(255, 255, 255, 0.05)',
    overlay: 'rgba(0, 0, 0, 0.7)',
    glass: 'rgba(20, 20, 20, 0.85)',
  } as const,

  // Estados y feedback
  state: {
    success: '#38ef7d',
    warning: '#f39c12',
    error: '#ff6b6b',
    info: '#667eea',
  } as const,

  // Categorías de productos
  categories: {
    all: '#f0a3c2',
    tintes: '#e84393',
    decoloracion: '#fdcb6e',
    keratinas: '#6c5ce7',
    champu: '#00cec9',
    tratamientos: '#fd79a8',
    nail: '#d63031',
  } as const,

  // Gradientes (usando clases de TailwindCSS v4)
  gradients: {
    primary: 'bg-gradient-to-r from-brand-primary to-brand-secondary',
    dark: 'bg-gradient-to-b from-brand-darker to-brand-dark',
    card: 'bg-gradient-to-b from-brand-dark/90 to-brand-dark/70',
    sales: {
      income: 'bg-gradient-to-r from-[#667eea] to-[#764ba2]',
      total: 'bg-gradient-to-r from-[#11998e] to-state-success',
      products: 'bg-gradient-to-r from-[#ee5a24] to-state-warning',
    },
  } as const,
} as const;

/** Tipo para tokens de color de categoría */
export type CategoryColorKey = keyof typeof colors.categories;

/**
 * Obtiene el color de una categoría por su ID
 * @param categoryId - ID de la categoría (ej: 'tintes', 'keratinas')
 * @returns Código hexadecimal del color
 */
export function getCategoryColor(categoryId: string): string {
  const key = categoryId as CategoryColorKey;
  return colors.categories[key] || colors.categories.all;
}

/**
 * Obtiene el color de una categoría como clase de TailwindCSS
 * @param categoryId - ID de la categoría
 * @returns Clase de TailwindCSS para el color de fondo
 */
export function getCategoryBgClass(categoryId: string): string {
  const colorMap: Record<string, string> = {
    all: 'bg-cat-all',
    tintes: 'bg-cat-tintes',
    decoloracion: 'bg-cat-decoloracion',
    keratinas: 'bg-cat-keratinas',
    champu_acond: 'bg-cat-champu',
    tratamientos: 'bg-cat-tratamientos',
    nail: 'bg-cat-nail',
  };
  return colorMap[categoryId] || colorMap.all;
}
