import React from 'react';
import { RoyalBackground, RoyalDivider } from './Hero';

const Location = () => {
  // Enlace directo a Google Maps con el Place ID del salón
  const mapLink = "https://www.google.com/maps/search/?api=1&query=Ex+Hacienda+la+Providencia&query_place_id=ChIJ_a2oAuOm0YURRXPP4bKoyLU";

  return (
    <div className="relative w-full py-20 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Fondo Unificado */}
      <RoyalBackground />

      <div className="relative z-10 w-full max-w-4xl px-4">
        
        {/* Título de la Sección */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-serif text-purple-900 font-bold tracking-widest mb-4">
            UBICACIÓN
          </h3>
          <p className="text-purple-700 font-sans tracking-wide uppercase text-sm md:text-base">
            Ceremonia y Recepción
          </p>
          <RoyalDivider className="mx-auto w-48 mt-4" />
        </div>

        {/* Tarjeta del Salón (Estilo consistente con Hero) */}
        <div className="relative max-w-2xl mx-auto">
          {/* Fondo de tarjeta tipo vidrio */}
          <div className="bg-white/60 backdrop-blur-md rounded-[2rem] border-4 border-double border-purple-200 shadow-xl p-8 md:p-12 text-center relative overflow-hidden group hover:border-purple-300 transition-colors duration-500">
            
            {/* Pequeño adorno superior */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>

            {/* Icono animado */}
            <div className="mb-6 inline-block p-4 bg-purple-50 rounded-full border border-purple-100 shadow-sm animate-pulse-slow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-purple-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>

            <h4 className="text-3xl md:text-4xl font-serif font-bold text-purple-900 mb-4">
              Ex Hacienda La Providencia
            </h4>

            <p className="text-purple-800 font-sans text-lg leading-relaxed mb-8 px-4">
              Santa Cecilia, Fraccionamiento La Providencia<br />
              Mineral de la Reforma, Hidalgo.
            </p>

            {/* Botón de Acción */}
            <a 
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-sans font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              <span>Ver En Mapa</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>

          </div>

          {/* Sombra decorativa en el piso de la tarjeta */}
          <div className="absolute -bottom-4 left-10 right-10 h-4 bg-purple-900/10 blur-xl rounded-[50%]"></div>
        </div>

      </div>
    </div>
  );
};

export default Location;