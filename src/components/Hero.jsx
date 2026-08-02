import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Cuidamos tu piel, transformamos tu confianza</h1>
          <p className="hero__subtitle">
            Diagnóstico, tratamiento, terapia y productos dermatológicos en un solo lugar.
            Atención personalizada para resultados visibles y duraderos.
          </p>
          <div className="hero__actions">
            <a
              href="https://chat.whatsapp.com/KCraZOBRqaQDitpuaUNOIH"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--primary"
            >
              Agenda tu cita
            </a>
            <a href="#servicios" className="hero__btn hero__btn--secondary">
              Conoce nuestros servicios
            </a>
          </div>
        </div>
        <div className="hero__image">
          <span>Imagen clínica</span>
        </div>
      </div>
    </section>
  )
}

export default Hero