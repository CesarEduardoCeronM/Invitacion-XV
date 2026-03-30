import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { guestsData } from '../data/guests';
import { RoyalBackground, RoyalDivider } from './Hero';

const RSVP = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGuests, setFilteredGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  
  const [confirmedCount, setConfirmedCount] = useState('');
  const [attendeeNames, setAttendeeNames] = useState([]);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [alreadyConfirmedGuests, setAlreadyConfirmedGuests] = useState([]);

  useEffect(() => {
    const fetchConfirmations = async () => {
      try {
        const { data, error } = await supabase
          .from('confirmaciones')
          .select('invitado_original');
        if (error) throw error;
        if (data) {
          const confirmedNames = data.map(row => row.invitado_original);
          setAlreadyConfirmedGuests(confirmedNames);
        }
      } catch (error) {
        console.error("Error al cargar confirmaciones previas:", error);
      }
    };
    fetchConfirmations();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.length > 2) {
      const results = guestsData.filter(g => 
        g.name.toLowerCase().includes(term.toLowerCase()) &&
        !alreadyConfirmedGuests.includes(g.name)
      );
      setFilteredGuests(results);
    } else {
      setFilteredGuests([]);
    }
  };

  const handleSelectGuest = (guest) => {
    setSelectedGuest(guest);
    setSearchTerm('');
    setFilteredGuests([]);
    
    // MEJORA: Si solo tiene 1 lugar, lo seteamos automáticamente
    if (guest.tickets === 1) {
      setConfirmedCount(1);
      setAttendeeNames(['']);
    } else {
      setConfirmedCount('');
      setAttendeeNames([]);
    }
  };

  const handleCountChange = (e) => {
    const count = parseInt(e.target.value);
    setConfirmedCount(count);
    setAttendeeNames(Array(count).fill(''));
  };

  const handleNameChange = (index, value) => {
    const newNames = [...attendeeNames];
    newNames[index] = value;
    setAttendeeNames(newNames);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('confirmaciones')
        .insert([
          {
            invitado_original: selectedGuest.name,
            lugares_asignados: selectedGuest.tickets,
            lugares_confirmados: confirmedCount,
            nombres_asistentes: attendeeNames.join(', ') 
          }
        ]);

      if (error) throw error;
      setAlreadyConfirmedGuests(prev => [...prev, selectedGuest.name]);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error al guardar confirmación:', error);
      alert('Hubo un error al confirmar. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center overflow-x-hidden">
      <RoyalBackground />

      <div className="relative z-10 w-full max-w-2xl px-4">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-serif text-purple-900 font-bold tracking-widest mb-4">
            CONFIRMAR ASISTENCIA
          </h3>
          <p className="text-purple-700 font-sans tracking-wide uppercase text-sm md:text-base mb-4">
            Busca tu nombre en la lista
          </p>
          <p className="text-purple-600/80 font-serif italic text-sm md:text-base max-w-md mx-auto mb-4">
            Queremos compartir este día contigo. Ayúdanos confirmando tu asistencia, ya que el acceso a la recepción será exclusivamente mediante confirmación previa.
          </p>
          <RoyalDivider className="mx-auto w-48" />
        </div>

        <div className="bg-white/70 backdrop-blur-md rounded-[2rem] border-4 border-double border-purple-200 shadow-xl p-6 md:p-10 relative">
          
          {isSuccess ? (
            <div className="text-center py-8 animate-fade-in-up">
              <div className="text-5xl mb-4">✨</div>
              <h4 className="text-2xl font-serif font-bold text-purple-900 mb-2">¡Confirmación Exitosa!</h4>
              <p className="text-purple-700 font-sans">Muchísimas gracias por acompañarnos en este día tan especial.</p>
            </div>
          ) : (
            <>
              {!selectedGuest ? (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Escribe tu nombre o apellido..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full px-6 py-4 rounded-full border-2 border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-100 text-purple-900 font-sans shadow-inner transition-all relative z-30"
                  />
                  
                  {filteredGuests.length > 0 && (
                    <div className="absolute w-full mt-2 bg-white border border-purple-100 rounded-2xl shadow-2xl overflow-hidden z-50 max-h-60 overflow-y-auto">
                      {filteredGuests.map((guest, idx) => (
                        <div 
                          key={idx}
                          onClick={() => handleSelectGuest(guest)}
                          className="px-6 py-4 hover:bg-purple-50 cursor-pointer border-b border-purple-50 last:border-0 transition-colors"
                        >
                          <p className="font-serif font-bold text-purple-900">{guest.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {searchTerm.length > 2 && filteredGuests.length === 0 && (
                     <div className="absolute w-full mt-2 bg-white border border-purple-100 rounded-2xl shadow-xl p-4 text-center z-50">
                        <p className="text-purple-600 font-sans text-sm">
                          No encontramos coincidencias o este invitado ya ha confirmado su asistencia.
                        </p>
                     </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="animate-fade-in-up space-y-6">
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-center">
                    <p className="text-sm text-purple-600 uppercase tracking-widest mb-1">Invitación para</p>
                    <p className="text-xl font-serif font-bold text-purple-900">{selectedGuest.name}</p>
                    <p className="text-sm text-purple-700 mt-2">
                      {selectedGuest.tickets === 1 ? 'Tienes 1 lugar reservado.' : `Tienes ${selectedGuest.tickets} lugares reservados.`}
                    </p>
                  </div>

                  {/* MEJORA: Solo mostramos el selector si hay más de 1 lugar */}
                  {selectedGuest.tickets > 1 && (
                    <div>
                      <label className="block text-purple-800 font-bold mb-2 ml-2">¿Cuántos lugares vas a utilizar?</label>
                      <select 
                        required
                        value={confirmedCount}
                        onChange={handleCountChange}
                        className="w-full px-6 py-4 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-100 text-purple-900 bg-white"
                      >
                        <option value="" disabled>Selecciona la cantidad...</option>
                        {Array.from({ length: selectedGuest.tickets }, (_, i) => i + 1).map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'lugar' : 'lugares'}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {confirmedCount > 0 && (
                    <div className="space-y-4 pt-4 border-t border-purple-100">
                      <label className="block text-purple-800 font-bold ml-2">
                        {selectedGuest.tickets === 1 ? 'Confirma tu nombre completo:' : 'Nombre de los asistentes:'}
                      </label>
                      {attendeeNames.map((name, index) => (
                        <input
                          key={index}
                          required
                          type="text"
                          placeholder={selectedGuest.tickets === 1 ? "Escribe tu nombre aquí" : `Nombre del asistente ${index + 1}`}
                          value={name}
                          onChange={(e) => handleNameChange(index, e.target.value)}
                          className="w-full px-6 py-3 rounded-xl border-2 border-purple-100 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-100 text-purple-900 text-sm shadow-sm"
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <button 
                      type="button"
                      onClick={() => setSelectedGuest(null)}
                      className="flex-1 py-3 px-4 text-purple-600 font-bold hover:bg-purple-50 rounded-full transition-colors"
                    >
                      Cancelar
                    </button>
                    <button 
                      type="submit"
                      disabled={isSubmitting || confirmedCount === ''}
                      className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:-translate-y-1 transition-all"
                    >
                      {isSubmitting ? 'Guardando...' : 'Confirmar'}
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RSVP;