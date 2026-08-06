import './assets/styles/global.css'
import OffersBanner from './components/OffersBanner'
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
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <OffersBanner />
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
      <Footer />
    </div>
  )
}

export default App