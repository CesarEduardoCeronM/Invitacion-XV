import React, { useState, useEffect } from 'react';
import { RoyalBackground, RoyalDivider } from './Hero'; 

const SmallHeaderOrnament = () => (
    <svg className="w-12 h-12 text-purple-400 mb-2 opacity-80" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 10 C 30 30, 10 30, 10 50 C 10 70, 30 70, 50 90 C 70 70, 90 70, 90 50 C 90 30, 70 30, 50 10 Z M 50 30 C 60 40, 70 40, 75 50 C 70 60, 60 60, 50 70 C 40 60, 30 60, 25 50 C 30 40, 40 40, 50 30 Z" />
    </svg>
);

const Countdown = () => {
  const targetDate = new Date('2026-06-27T14:30:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-md p-4 rounded-2xl shadow-md border-2 border-purple-200 ring-4 ring-purple-50 ring-offset-0 w-20 md:w-28 h-24 md:h-32 mx-1 md:mx-3 transform hover:-translate-y-1 transition-all duration-300">
      <span className="text-3xl md:text-5xl font-serif font-bold text-purple-800 drop-shadow-sm">
        {value}
      </span>
      <span className="text-[0.6rem] md:text-xs uppercase tracking-widest text-purple-600 mt-2 font-sans font-bold bg-purple-100 px-2 py-1 rounded-full">
        {label}
      </span>
    </div>
  );

  return (
    <div className="relative w-full py-12 flex flex-col items-center justify-center overflow-hidden">
      
      <RoyalBackground />
      
      <div className="relative z-10 flex flex-col items-center px-4">
        
        {/* Encabezado decorado */}
        <SmallHeaderOrnament />
        <h3 className="text-2xl md:text-3xl font-serif text-purple-900 tracking-[0.2em] font-bold text-center">
          SOLO FALTAN
        </h3>
        <RoyalDivider className="mb-10 md:w-64 h-6 opacity-60" />
        
        
        {/* Contenedor de las cajitas */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          <TimeBox value={timeLeft.days} label="Días" />
          <TimeBox value={timeLeft.hours} label="Horas" />
          <TimeBox value={timeLeft.minutes} label="Min" />
          <TimeBox value={timeLeft.seconds} label="Seg" />
        </div>
      </div>
    </div>
  );
};

export default Countdown;