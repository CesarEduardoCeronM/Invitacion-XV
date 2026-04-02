import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { RoyalBackground, RoyalDivider } from './Hero';

const AdminGuests = () => {
  const [confirmaciones, setConfirmaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchConfirmaciones = async () => {
      try {
        // Traemos todas las confirmaciones ordenadas por fecha (las más nuevas primero)
        const { data, error } = await supabase
          .from('confirmaciones')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        if (data) setConfirmaciones(data);
      } catch (error) {
        console.error("Error al cargar la lista:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchConfirmaciones();
  }, []);

  // Calculamos el total de lugares confirmados
  const totalLugares = confirmaciones.reduce((total, actual) => total + actual.lugares_confirmados, 0);

  return (
    <div className="min-h-screen relative w-full py-10 flex flex-col items-center overflow-x-hidden">
      <RoyalBackground />

      <div className="relative z-10 w-full max-w-6xl px-4">
        
        {/* Encabezado */}
        <div className="text-center mb-8 bg-white/60 backdrop-blur-md rounded-3xl py-6 px-4 shadow-sm border border-purple-100">
          <h2 className="text-3xl font-serif text-purple-900 font-bold tracking-widest mb-2">
            PANEL DE INVITADOS
          </h2>
          <RoyalDivider className="mx-auto w-32 mb-4 opacity-50" />
          
          <div className="inline-flex items-center gap-3 bg-purple-600 text-white px-6 py-3 rounded-full shadow-md">
            <span className="uppercase text-sm font-bold tracking-wider">Total Confirmados:</span>
            <span className="text-2xl font-serif font-bold">{totalLugares}</span>
          </div>
        </div>

        {/* Tabla de Resultados */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border-2 border-purple-200 overflow-hidden">
          
          {cargando ? (
            <div className="p-10 text-center text-purple-600 font-bold animate-pulse">
              Cargando lista de invitados...
            </div>
          ) : confirmaciones.length === 0 ? (
            <div className="p-10 text-center text-purple-500">
              Aún no hay confirmaciones registradas.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-purple-100 text-purple-900 text-sm uppercase tracking-wider">
                    <th className="p-4 font-bold border-b-2 border-purple-200">Invitado Original</th>
                    <th className="p-4 font-bold border-b-2 border-purple-200 text-center">Asignados</th>
                    <th className="p-4 font-bold border-b-2 border-purple-200 text-center">Confirmados</th>
                    <th className="p-4 font-bold border-b-2 border-purple-200">Nombres de Asistentes</th>
                    <th className="p-4 font-bold border-b-2 border-purple-200 text-right">Fecha</th>
                  </tr>
                </thead>
                <tbody className="text-purple-900 text-sm md:text-base">
                  {confirmaciones.map((conf, index) => (
                    <tr 
                      key={conf.id} 
                      className={`hover:bg-purple-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-purple-50/30'}`}
                    >
                      <td className="p-4 border-b border-purple-100 font-serif font-bold">
                        {conf.invitado_original}
                      </td>
                      <td className="p-4 border-b border-purple-100 text-center text-purple-400">
                        {conf.lugares_asignados}
                      </td>
                      <td className="p-4 border-b border-purple-100 text-center font-bold text-purple-700">
                        {conf.lugares_confirmados}
                      </td>
                      <td className="p-4 border-b border-purple-100">
                        {conf.nombres_asistentes || <span className="italic opacity-50">Sin especificar</span>}
                      </td>
                      <td className="p-4 border-b border-purple-100 text-right text-xs opacity-60">
                        {new Date(conf.created_at).toLocaleDateString('es-MX', {
                          day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        
        <div className="mt-6 text-center">
            <a href="/" className="text-purple-600 hover:text-purple-800 font-bold text-sm uppercase tracking-widest underline underline-offset-4 transition-colors">
                ← Volver a la invitación
            </a>
        </div>

      </div>
    </div>
  );
};

export default AdminGuests;