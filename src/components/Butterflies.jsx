import React from 'react';

// NUEVO SVG: Diseño de mariposa mucho más detallado y elegante.
// Tiene alas con patrones internos y un cuerpo más estilizado.
const ButterflySVG = ({ className, color }) => (
  <svg 
    viewBox="0 0 100 100" // Aumentamos el viewBox para permitir más detalle
    fill="currentColor" 
    // Usamos drop-shadow para darles un poco de profundidad y que resalten
    className={`pointer-events-none drop-shadow-sm ${className} ${color}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Grupo que realiza el aleteo */}
    <g className="animate-flutter origin-center">
      
      {/* --- Cuerpo Central y Antenas --- */}
      {/* Cuerpo */}
      <path d="M50 35 C 52 35, 53 45, 53 55 C 53 65, 52 75, 50 75 C 48 75, 47 65, 47 55 C 47 45, 48 35, 50 35 Z" opacity="0.8" />
      {/* Antena Izquierda */}
      <path d="M49 36 Q 45 20, 38 15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
      {/* Antena Derecha */}
      <path d="M51 36 Q 55 20, 62 15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />

      {/* --- Ala Superior Izquierda --- */}
      <path d="M48 40 C 30 20, 10 25, 5 45 C 2 55, 15 60, 48 55 Z" opacity="0.9" />
      {/* Detalle interno ala superior izq */}
      <path d="M45 42 C 30 28, 15 35, 12 45 C 15 50, 30 52, 45 50 Z" fill="white" opacity="0.3" />

      {/* --- Ala Superior Derecha (Espejo) --- */}
      <path d="M52 40 C 70 20, 90 25, 95 45 C 98 55, 85 60, 52 55 Z" opacity="0.9" />
      {/* Detalle interno ala superior der */}
      <path d="M55 42 C 70 28, 85 35, 88 45 C 85 50, 70 52, 55 50 Z" fill="white" opacity="0.3" />


      {/* --- Ala Inferior Izquierda --- */}
      <path d="M48 58 C 25 60, 15 80, 25 90 C 35 98, 45 85, 48 70 Z" opacity="0.7" />
      {/* Detalle interno ala inferior izq */}
      <path d="M46 60 C 30 62, 25 75, 30 82 C 35 85, 42 75, 46 68 Z" fill="white" opacity="0.2" />

      {/* --- Ala Inferior Derecha (Espejo) --- */}
      <path d="M52 58 C 75 60, 85 80, 75 90 C 65 98, 55 85, 52 70 Z" opacity="0.7" />
      {/* Detalle interno ala inferior der */}
      <path d="M54 60 C 70 62, 75 75, 70 82 C 65 85, 58 75, 54 68 Z" fill="white" opacity="0.2" />

    </g>
  </svg>
);

const Butterflies = () => {
  const butterfliesConfig = [
    // Izquierda (Vuela hacia la derecha)
    { id: 1, animation: 'animate-fly1', delay: '-2s', size: 'w-16 h-16', color: 'text-purple-300', left: '10%' },
    // Centro (Sube serpenteando, la más grande)
    { id: 2, animation: 'animate-fly2', delay: '-15s', size: 'w-24 h-24', color: 'text-purple-400', left: '40%' }, 
    // Derecha (Vuela hacia la izquierda)
    { id: 3, animation: 'animate-fly3', delay: '-8s', size: 'w-20 h-20', color: 'text-indigo-300', left: '80%' },
    
    // Extras para llenar huecos
    { id: 4, animation: 'animate-fly1', delay: '-25s', size: 'w-14 h-14', color: 'text-fuchsia-300', left: '20%' },
    { id: 5, animation: 'animate-fly3', delay: '-35s', size: 'w-18 h-18', color: 'text-purple-300', left: '70%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {butterfliesConfig.map((b) => (
        <div 
            key={b.id}
            className={`absolute bottom-0 ${b.animation}`}
            style={{ 
                left: b.left,
                animationDelay: b.delay 
            }}
        >
            <ButterflySVG className={b.size} color={b.color} />
        </div>
      ))}
    </div>
  );
};

export default Butterflies;