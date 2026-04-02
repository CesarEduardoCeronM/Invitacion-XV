import React from 'react';
import { RoyalBackground, RoyalDivider } from './Hero';

const Introduction = () => {
  return (
    <div className="relative w-full py-10 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Fondo compartido para continuidad */}
        <RoyalBackground />

        <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Texto de Introducción */}
            <h3 className="text-xl md:text-3xl font-serif text-purple-900 leading-relaxed italic mb-8 font-light">
                Con la Bendición de Dios, el apoyo de mis padres y toda mi Familia, hoy celebro el paso de mi niñez a mi adolescencia, por ello te invito a celebrar conmigo
            </h3>

            {/* Sección Padres */}
            <div className="space-y-4">
                <p className="text-sm md:text-base font-sans font-bold tracking-[0.2em] text-purple-500 uppercase">
                    En compañía de mis padres
                </p>

                <div className="font-serif text-2xl md:text-4xl text-purple-900 font-medium flex flex-col gap-2">
                    <p>Julio César Cerón Vázquez</p>
                    <span className="text-purple-400 text-lg md:text-xl font-light">&</span>
                    <p>Patricia Martínez Cervantes</p>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Introduction;