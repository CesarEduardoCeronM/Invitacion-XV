import React from 'react';

// --- ELEMENTOS COMPARTIDOS ---
export const RoyalBackground = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-b from-purple-200 via-purple-50 to-purple-200"></div>
    <div 
      className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%239333ea' stroke-width='1' /%3E%3Cpath d='M30 10 L50 30 L30 50 L10 30 Z' fill='none' stroke='%23c084fc' stroke-width='0.5' /%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}
    ></div>
  </>
);

const FrameCorner = ({ className }) => (
  <svg viewBox="0 0 100 100" className={`absolute w-16 h-16 md:w-24 md:h-24 text-purple-400/80 pointer-events-none z-20 ${className}`} fill="currentColor">
    <path d="M95,5 C95,45 65,85 15,95 L15,80 C55,70 80,40 80,5 L95,5 Z" />
    <path d="M5,95 C45,95 85,65 95,15 L80,15 C70,55 40,80 5,80 L5,95 Z" />
    <circle cx="88" cy="12" r="4" />
    <circle cx="12" cy="88" r="4" />
  </svg>
);

export const RoyalDivider = ({ className = "" }) => (
  <svg className={`w-full max-w-xs md:max-w-md h-8 md:h-12 text-purple-400/80 my-3 ${className}`} viewBox="0 0 400 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M200 45C150 45 100 25 0 25V30C100 30 150 50 200 50C250 50 300 30 400 30V25C300 25 250 45 200 45Z" fill="currentColor"/>
    <path d="M200 5C250 5 300 25 400 25V20C300 20 250 0 200 0C150 0 100 20 0 20V25C100 25 150 5 200 5Z" fill="currentColor"/>
    <circle cx="200" cy="25" r="5" fill="currentColor"/>
  </svg>
);

// --- COMPONENTE HERO ---
const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-12">
      <RoyalBackground />

      <div className="relative z-10 w-full max-w-2xl mx-4 md:mx-auto">
        
        {/* ANIMACIÓN 1: El Marco se dibuja (aparece abriéndose) */}
        <div className="relative p-1 animate-draw-frame"> 
            
            <div className="absolute inset-0 border-4 border-double border-purple-300/60 rounded-[2.5rem] bg-white/50 backdrop-blur-sm shadow-xl z-0"></div>
            
            <FrameCorner className="-top-3 -left-3" />
            <FrameCorner className="-bottom-3 -right-3 rotate-180" />
            <FrameCorner className="-top-3 -right-3 rotate-90" />
            <FrameCorner className="-bottom-3 -left-3 -rotate-90" />

            <div className="relative z-10 flex flex-col items-center text-center py-16 px-6 md:px-12">
                
                {/* ANIMACIÓN 2: Textos en cascada (cada uno con más delay) */}
                <p className="text-base md:text-xl tracking-[0.25em] uppercase font-light mb-6 text-purple-700 font-sans font-semibold animate-fade-in-up delay-500">
                    Estás invitado a mis
                </p>

                <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold mb-4 text-purple-900 drop-shadow-[0_4px_4px_rgba(120,50,160,0.25)] leading-tight animate-fade-in-up delay-700">
                    XV Años
                </h1>

                <div className="animate-fade-in-up delay-1000 w-full flex justify-center">
                   <RoyalDivider />
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium text-purple-800 py-2 animate-fade-in-up delay-1000">
                    Karla
                </h2>

                <div className="animate-fade-in-up delay-1000 w-full flex justify-center">
                    <RoyalDivider className="rotate-180" />
                </div>

                <p className="text-sm md:text-lg font-bold tracking-[0.2em] text-purple-800 font-sans uppercase mt-6 animate-fade-in-up delay-1500">
                    Sábado 27 de Junio, 2026
                </p>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;