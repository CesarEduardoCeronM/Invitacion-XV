import React from 'react';
import { RoyalBackground, RoyalDivider } from './Hero';

const TheQuinceanera = () => {
  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center overflow-hidden">
      
      <RoyalBackground />

      <div className="relative z-10 w-full max-w-4xl px-4 text-center">
        
        {/* Título de la sección */}
        <div className="mb-10">
          <h3 className="text-3xl md:text-4xl font-serif text-purple-900 font-bold tracking-widest mb-4">
            NUESTRA QUINCEAÑERA
          </h3>
          <RoyalDivider className="mx-auto w-48 mt-4" />
        </div>

        {/* Contenedor de la Foto Principal */}
        <div className="relative max-w-md mx-auto aspect-[4/5] rounded-[2rem] border-4 border-double border-purple-200 shadow-xl overflow-hidden group">
          
          {/* 📸 AQUÍ VA TU FOTO EDITADA */}
          {/* Instrucciones: Guarda tu foto como 'vestido.jpg' en la carpeta 'public/' */}
          <img 
            src="/vestido.jpeg" 
            alt="Karla Lizbeth - Quinceañera" 
            className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />

          {/* Sombra interna sutil para elegancia */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent z-10 pointer-events-none"></div>

        </div>

        {/* Texto opcional debajo de la foto */}
        <div className="mt-8 px-4 max-w-lg mx-auto">
            <p className="text-purple-800 font-serif italic text-lg leading-relaxed">
              "Hay momentos en la vida que representan un antes y un después. El comienzo y el fin de una etapa, y lo que los hace realmente especial, son las personas con las que se comparten."
            </p>
        </div>

      </div>
    </div>
  );
};

export default TheQuinceanera;