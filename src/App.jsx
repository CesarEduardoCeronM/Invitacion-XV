import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Countdown from './components/Countdown'
import Location from './components/Location'
import Details from './components/Details'
import MusicPlayer from './components/MusicPlayer'
import ScrollReveal from './components/ScrollReveal'
import FloralFrame from './components/FloralFrame'
import Butterflies from './components/Butterflies' // <--- Importar

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-purple-200 flex flex-col min-h-screen relative">
      
      <Hero />
      <MusicPlayer />
      
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
      
      <div className="py-10 text-center text-purple-800/60 text-sm bg-purple-200">
        Hecho con cariño para Karla
      </div>

      <FloralFrame />
      
    </div>
  )
}

export default App