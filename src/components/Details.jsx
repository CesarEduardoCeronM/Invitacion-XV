import React from 'react';
import { RoyalBackground, RoyalDivider } from './Hero';

const Details = () => {
  return (
    <div className="relative w-full py-12 flex flex-col items-center justify-center overflow-hidden">
      
      <RoyalBackground />

      <div className="relative z-10 w-full max-w-5xl px-4">
        
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-serif text-purple-900 font-bold tracking-widest mb-4">
            DETALLES
          </h3>
          <RoyalDivider className="mx-auto w-48 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Tarjeta 1: Código de Vestimenta */}
          <div className="bg-white/60 backdrop-blur-md rounded-[2rem] border-4 border-double border-purple-200 shadow-xl p-8 text-center transform hover:scale-[1.02] transition-transform duration-300">
            
            <div className="mb-6 inline-block p-4 bg-purple-50 rounded-full border border-purple-100 shadow-sm">
              <img 
                src="https://img.icons8.com/ios-filled/100/7e22ce/suit.png" 
                alt="Traje Formal" 
                className="w-12 h-12"
              />
            </div>

            <h4 className="text-2xl font-serif font-bold text-purple-900 mb-2">
              Código de Vestimenta
            </h4>
            
            <p className="text-xl text-purple-800 font-sans font-semibold uppercase tracking-widest mb-4">
              Formal
            </p>

            <div className="bg-purple-100/50 rounded-xl p-4 border border-purple-200/50 mx-2">
                <p className="text-purple-900 font-serif italic text-sm md:text-base">
                  Por favor, reservar el color <span className="font-bold text-purple-700">Lila</span> exclusivamente para la festejada.
                </p>
            </div>
          </div>

          {/* Tarjeta 2: Regalos (ACTUALIZADA) */}
          <div className="bg-white/60 backdrop-blur-md rounded-[2rem] border-4 border-double border-purple-200 shadow-xl p-8 text-center transform hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-center items-center">
            
            <div className="mb-6 inline-block p-4 bg-purple-50 rounded-full border border-purple-100 shadow-sm">
              {/* Nuevo Icono de Cajita de Regalo */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-purple-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
            </div>

            <h4 className="text-2xl font-serif font-bold text-purple-900 mb-2">
              Sugerencia de Regalos
            </h4>

            <div className="px-2 space-y-3 mt-2">
                <p className="text-purple-800 font-sans text-sm md:text-base leading-relaxed opacity-90 font-medium">
                  Tu presencia es mi mayor regalo.
                </p>
                <div className="bg-purple-100/50 rounded-xl p-4 border border-purple-200/50 mx-2">
                  <p className="text-purple-900 font-serif italic text-sm md:text-base">
                    Si nace de tu corazón tener un detalle, contaremos con una <span className="font-bold text-purple-900">mesa de regalos</span> y un <span className="font-bold text-purple-900">buzón para sobres</span> en la recepción.
                  </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Details;