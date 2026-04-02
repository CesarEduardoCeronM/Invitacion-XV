import Hero from './components/Hero'
import Introduction from './components/Introduction'
import TheQuinceanera from './components/TheQuinceanera' // <--- IMPORTAR AQUÍ
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Details from './components/Details'
import RSVP from './components/RSVP'
import MusicPlayer from './components/MusicPlayer'
import ScrollReveal from './components/ScrollReveal'
import FloralFrame from './components/FloralFrame'

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-purple-200 flex flex-col min-h-screen relative">
      
      <FloralFrame />
      <MusicPlayer />
      
      <Hero />
      
      <ScrollReveal>
        <Introduction />
      </ScrollReveal>

      {/* NUEVA SECCIÓN: La Quinceañera con su Vestido */}
      <ScrollReveal>
        <TheQuinceanera />
      </ScrollReveal>

      <ScrollReveal>
        <Countdown />
      </ScrollReveal>

      <ScrollReveal>
        <Gallery />
      </ScrollReveal>

      <ScrollReveal>
        <Location />
      </ScrollReveal>

      <ScrollReveal>
        <Details />
      </ScrollReveal>

      <ScrollReveal>
        <RSVP />
      </ScrollReveal>
      
      <div className="py-20 flex flex-col items-center justify-center text-center text-sm bg-purple-200 relative z-20">
        
        <p className="text-purple-800/70 font-medium mb-3">
          Hecho con cariño para Karla
        </p>
        

        <a 
          href="https://wa.me/527711896342?text=Hola,%20me%20gustó%20mucho%20la%20invitación%20digital%20y%20me%20gustaría%20cotizar%20una." 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 mt-2 bg-white/40 hover:bg-white/80 border border-purple-200 rounded-full text-purple-700 transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5 group"
        >
          <span className="text-xs uppercase tracking-widest font-bold opacity-80 group-hover:opacity-100">
            ¿Te gustó esta invitación? Contáctame
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-80 group-hover:opacity-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>

      </div>

      <p></p>
      
    </div>
  )
}

export default App