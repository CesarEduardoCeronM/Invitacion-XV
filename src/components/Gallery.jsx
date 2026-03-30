import React, { useState, useEffect } from 'react';
import { RoyalBackground, RoyalDivider } from './Hero';

const Gallery = () => {
  const images = [
    "/foto1.jpeg",
    "/foto2.jpeg",
    "/foto3.jpeg",
    "/foto4.jpeg",
    "/foto5.jpeg",
    "/foto6.jpeg",
    "/foto7.jpeg",
    "/foto8.jpeg",
    "/foto9.jpeg",
    "/foto10.jpeg",
    "/foto11.jpeg",
    "/foto12.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Efecto para cambiar la foto automáticamente cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center overflow-hidden">
      
      <RoyalBackground />

      <div className="relative z-10 w-full max-w-4xl px-4">
        
        {/* Título de la sección */}
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-serif text-purple-900 font-bold tracking-widest mb-4">
            GALERÍA
          </h3>
        </div>

        {/* Contenedor del Carrusel */}
        <div className="relative max-w-xl mx-auto aspect-[4/5] md:aspect-square rounded-[2rem] border-4 border-double border-purple-200 shadow-2xl overflow-hidden bg-purple-50 group">
          
          {/* Imágenes con efecto Fade */}
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Galería Karla ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
              }`}
            />
          ))}

          {/* Sombra interna para darle profundidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent z-10 pointer-events-none"></div>

          {/* Indicadores (Puntitos de abajo) */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-500 shadow-md ${
                  index === currentIndex 
                    ? 'bg-purple-500 w-8' 
                    : 'bg-white/70 w-2.5 hover:bg-white'
                }`}
                aria-label={`Ir a foto ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Gallery;