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
      
      <div className="py-20 text-center text-purple-800/60 text-sm bg-purple-200 relative z-20">
        Hecho con cariño para Karla
      </div>

      <p></p>
      
    </div>
  )
}

export default App