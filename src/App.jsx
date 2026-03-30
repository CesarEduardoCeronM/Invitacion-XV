import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Countdown from './components/Countdown'
import Location from './components/Location'
import Details from './components/Details'
import MusicPlayer from './components/MusicPlayer'
import ScrollReveal from './components/ScrollReveal'
import FloralFrame from './components/FloralFrame'

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-purple-200 flex flex-col min-h-screen relative">
      
      {/* Elementos de fondo fijos (z-index bajos) */}
      <FloralFrame />
      
      {/* Elementos de UI fijos (z-index altos) */}
      <MusicPlayer />
      
      {/* Contenido (con z-index relativos superiores al fondo) */}
      <Hero />
      
      <ScrollReveal>
        <Introduction />
      </ScrollReveal>

      <ScrollReveal>
        <Countdown />
      </ScrollReveal>

      <ScrollReveal>
        <Location />
      </ScrollReveal>

      <ScrollReveal>
        <Details />
      </ScrollReveal>
      
      <div className="py-10 text-center text-purple-800/60 text-sm bg-purple-200 relative z-20">
        Hecho con cariño para Karla
      </div>
      
    </div>
  )
}

export default App