import './assets/styles/global.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Values from './components/Values'
import Services from './components/Services'
import StarProgram from './components/StarProgram'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <AboutUs />
      <Values />
      <Services />
      <StarProgram />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <Contact />
      {/* Aquí seguirán las demás secciones: Footer, etc. */}
    </div>
  )
}

export default App