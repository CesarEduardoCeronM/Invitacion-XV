import React from 'react';

const floralImg = "/flores.png";

const FloralFrame = () => {
  return (
    <>
      {/* --- GRUPO SUPERIOR (Pegado al techo) --- */}
      <div className="fixed top-0 left-0 w-full z-40 pointer-events-none">
        
        {/* Esquina Izquierda Arriba */}
        <img 
          src={floralImg} 
          alt="Decoración floral" 
          className="absolute top-0 left-0 w-48 md:w-72 opacity-95 -translate-x-4 -translate-y-4"
        />

        {/* Esquina Derecha Arriba */}
        <img 
          src={floralImg} 
          alt="Decoración floral" 
          className="absolute top-0 right-0 w-48 md:w-72 opacity-95 scale-x-[-1] translate-x-4 -translate-y-4"
        />
      </div>

      {/* --- GRUPO INFERIOR (Pegado al piso) --- */}
      {/* Al usar 'bottom-0' sin definir height, se pega al borde visible del navegador inmediatamente */}
      <div className="fixed bottom-0 left-0 w-full z-40 pointer-events-none">
        
        {/* Esquina Izquierda Abajo */}
        <img 
          src={floralImg} 
          alt="Decoración floral" 
          className="absolute bottom-0 left-0 w-48 md:w-72 opacity-95 scale-y-[-1] -translate-x-4 translate-y-4"
        />

        {/* Esquina Derecha Abajo */}
        <img 
          src={floralImg} 
          alt="Decoración floral" 
          className="absolute bottom-0 right-0 w-48 md:w-72 opacity-95 rotate-180 translate-x-4 translate-y-4"
        />
      </div>
    </>
  );
};

export default FloralFrame;