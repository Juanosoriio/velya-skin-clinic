import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__logo">
              <img src="/src/assets/images/logo.png" alt="VELYA SKIN CLINIC" className="footer__logo-img" />
              <span>VELYA SKIN CLINIC</span>
            </h3>
            <p className="footer__tagline">Cuidamos tu piel, transformamos tu confianza</p>
            <a
              href="https://chat.whatsapp.com/KCraZOBRqaQDitpuaUNOIH"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__whatsapp"
            >
              <span aria-hidden="true">💬</span> Escríbenos por WhatsApp
            </a>
          </div>

          <div className="footer__nav">
            <h4 className="footer__nav-title">Navegación</h4>
            <ul className="footer__nav-list">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4 className="footer__contact-title">Contacto</h4>
            <ul className="footer__contact-list">
              <li>
                <span className="footer__contact-icon" aria-hidden="true">📍</span>
                <span>Dirección de la clínica (próximamente)</span>
              </li>
              <li>
                <span className="footer__contact-icon" aria-hidden="true">📞</span>
                <a href="tel:+573000000000">+57 300 000 0000</a>
              </li>
              <li>
                <span className="footer__contact-icon" aria-hidden="true">✉️</span>
                <a href="mailto:contacto@velyaskinclinic.com">contacto@velyaskinclinic.com</a>
              </li>
              <li>
                <span className="footer__contact-icon" aria-hidden="true">🕒</span>
                <span>Lunes a Sábado: 8:00 am - 6:00 pm</span>
              </li>
            </ul>
          </div>

          <div className="footer__social">
            <h4 className="footer__social-title">Redes sociales</h4>
            <div className="footer__social-links">
              {/* Reemplaza estos href por las URLs reales de Instagram y TikTok cuando la clínica las proporcione */}
              <a href="#" className="footer__social-link" aria-label="Instagram" title="Próximamente">
                <span aria-hidden="true">📸</span>
              </a>
              <a href="#" className="footer__social-link" aria-label="TikTok" title="Próximamente">
                <span aria-hidden="true">🎵</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} VELYA SKIN CLINIC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
