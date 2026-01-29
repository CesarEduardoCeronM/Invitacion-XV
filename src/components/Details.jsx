import React from 'react';
import { RoyalBackground, RoyalDivider } from './Hero';

const Details = () => {
  return (
    <div className="relative w-full py-20 flex flex-col items-center justify-center overflow-hidden">
      
      <RoyalBackground />

      <div className="relative z-10 w-full max-w-5xl px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-serif text-purple-900 font-bold tracking-widest mb-4">
            DETALLES
          </h3>
          <RoyalDivider className="mx-auto w-48 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

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


          {/* --- TARJETA 2: LLUVIA DE SOBRES --- */}
          <div className="bg-white/60 backdrop-blur-md rounded-[2rem] border-4 border-double border-purple-200 shadow-xl p-8 text-center transform hover:scale-[1.02] transition-transform duration-300">
            
            {/* Icono Sobre */}
            <div className="mb-6 inline-block p-4 bg-purple-50 rounded-full border border-purple-100 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-purple-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>

            <h4 className="text-2xl font-serif font-bold text-purple-900 mb-2">
              Lluvia de Sobres
            </h4>

            <div className="px-2">
                <p className="text-purple-800 font-sans text-sm md:text-base leading-relaxed opacity-80">
                  Tu presencia es mi mayor regalo. <br/>
                  Si deseas tener un detalle conmigo, contaremos con un buzón para depositar tu sobre en la recepción.
                </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Details;