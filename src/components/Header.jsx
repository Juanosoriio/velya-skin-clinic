import { useState } from 'react'
import './Header.css'
import logoImage from '/src/assets/images/logo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__container">

        <a href="#inicio" className="header__logo">
          <img src={logoImage} alt="VELYA SKIN CLINIC" className="header__logo-img" />
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul>
          <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
          <li><a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
          <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
          </ul>

          <a href="https://chat.whatsapp.com/KCraZOBRqaQDitpuaUNOIH" target="_blank" rel="noopener noreferrer" className="header__cta">Agenda tu cita</a>
        </nav>

        <button className="header__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  )
}

export default Header