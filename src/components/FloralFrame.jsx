import React from 'react';

const floralImg = "/flores.png";

const FloralFrame = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[100svh] z-40 pointer-events-none overflow-hidden">
      
      {/* Esquina Superior Izquierda */}
      <img 
        src={floralImg} 
        alt="Decoración floral" 
        // CAMBIO: Aumentamos de w-32 a w-48 (móvil) y de md:w-48 a md:w-72 (PC)
        className="absolute top-0 left-0 w-48 md:w-72 opacity-70 -translate-x-4 -translate-y-4"
      />

      {/* Esquina Superior Derecha */}
      <img 
        src={floralImg} 
        alt="Decoración floral" 
        className="absolute top-0 right-0 w-48 md:w-72 opacity-70 scale-x-[-1] translate-x-4 -translate-y-4"
      />

      {/* Esquina Inferior Izquierda */}
      <img 
        src={floralImg} 
        alt="Decoración floral" 
        className="absolute bottom-0 left-0 w-48 md:w-72 opacity-70 scale-y-[-1] -translate-x-4 translate-y-4"
      />

      {/* Esquina Inferior Derecha */}
      <img 
        src={floralImg} 
        alt="Decoración floral" 
        className="absolute bottom-0 right-0 w-48 md:w-72 opacity-70 rotate-180 translate-x-4 translate-y-4"
      />

    </div>
  );
};

export default FloralFrame;