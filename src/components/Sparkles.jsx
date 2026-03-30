import React, { useMemo } from 'react';

const Sparkles = () => {
  // Generamos una configuración única para 50 destellos
  // useMemo asegura que no se regeneren al hacer scroll, ahorrando batería
  const sparklesConfig = useMemo(() => {
    const count = 50; // Cantidad de destellos
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 3 + 1; // Tamaño entre 1px y 4px (muy pequeños)
      const isPurple = Math.random() > 0.4; // 60% lila, 40% blanco

      return {
        id: i,
        size: `${size}px`,
        // Colores lila pastel y blanco puro
        backgroundColor: isPurple ? '#d8b4fe' : '#ffffff', // purple-300 o white
        top: `${Math.random() * 100}%`, // Posición vertical aleatoria
        left: `${Math.random() * 100}%`, // Posición horizontal aleatoria
        // Tiempos de animación aleatorios (lentos) para efecto orgánico
        duration: `${Math.random() * 5 + 3}s`, // Parpadeo lento (3s a 8s)
        delay: `${Math.random() * 10}s`, // Retraso de inicio disperso
      };
    });
  }, []);

  return (
    // Contenedor fijo que cubre toda la pantalla
    // pointer-events-none: Importante para no bloquear clics
    // z-10: Queda detrás de todo el texto (que tiene z-10+ dentro de los componentes)
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden opacity-70">
      {sparklesConfig.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full animate-sparkle-twinkle"
          style={{
            width: s.size,
            height: s.size,
            backgroundColor: s.backgroundColor,
            top: s.top,
            left: s.left,
            // Agrega un brillo suave alrededor
            boxShadow: `0 0 ${parseFloat(s.size) * 2}px ${s.backgroundColor}`,
            animationDuration: s.duration,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;