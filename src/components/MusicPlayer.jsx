import React, { useState } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "oLCj29g04oo"; 

  // Agregamos 'animate-pop-in delay-2000' al contenedor
  return (
    <div className="fixed bottom-4 left-4 z-50 animate-pop-in delay-2000">
      
      <div className="absolute opacity-0 w-0 h-0 overflow-hidden pointer-events-none">
        {isPlaying && (
          <iframe 
            width="560" height="315" 
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0`} 
            title="YouTube music player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        )}
      </div>

      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 border-2 border-white/50 backdrop-blur-sm ${isPlaying ? 'bg-purple-100/80 text-purple-600 animate-spin-slow' : 'bg-purple-600/90 text-white animate-bounce'}`}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
          </svg>
        )}
      </button>
      
      {!isPlaying && (
        <span className="absolute left-16 top-1 bg-white/90 text-purple-800 text-xs font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap animate-fade-in pointer-events-none">
          Reproduce mi canción 
        </span>
      )}
    </div>
  );
};

export default MusicPlayer;