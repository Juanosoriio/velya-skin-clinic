import { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../data/testimonialsData'

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1))
  }

  const current = testimonialsData[currentIndex]

  const renderStars = (count) => '★'.repeat(count)

  const resolveSrc = (path) => {
    if (!path) return ''
    try {
      return new URL(path, import.meta.url).href
    } catch {
      return path
    }
  }

  return (
    <section id="testimonios" className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">Resultados que Hablan por Sí Solos</h2>
          <div className="testimonials__accent" />
          <p className="testimonials__subtitle">
            Historias reales de pacientes que transformaron su piel y su confianza
          </p>
        </div>

        <div className="testimonials__carousel">
          <div className="testimonials__track">
            {testimonialsData.map((item, index) => (
              <div
                className={`testimonials__slide ${
                  index === currentIndex ? 'testimonials__slide--active' : ''
                }`}
                key={index}
              >
                <div className="testimonials__card">
                  <div className="testimonials__images">
                    <div className="testimonials__image-wrapper">
                      {item.imagenAntes ? (
                        <img
                          src={resolveSrc(item.imagenAntes)}
                          alt="Antes"
                          className="testimonials__image"
                        />
                      ) : (
                        <span className="testimonials__image-placeholder">Antes</span>
                      )}
                    </div>
                    <div className="testimonials__image-wrapper">
                      {item.imagenDespues ? (
                        <img
                          src={resolveSrc(item.imagenDespues)}
                          alt="Después"
                          className="testimonials__image"
                        />
                      ) : (
                        <span className="testimonials__image-placeholder">Después</span>
                      )}
                    </div>
                  </div>

                  <p className="testimonials__quote">"{item.texto}"</p>

                  <div className="testimonials__meta">
                    <div>
                      <div className="testimonials__name">{item.nombre}</div>
                      <div className="testimonials__treatment">{item.tratamiento}</div>
                    </div>
                    <div className="testimonials__stars">{renderStars(item.estrellas)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials__nav">
            <button
              className="testimonials__btn"
              onClick={goToPrev}
              aria-label="Testimonio anterior"
            >
              ←
            </button>
            <span className="testimonials__count">
              {currentIndex + 1} / {testimonialsData.length}
            </span>
            <button
              className="testimonials__btn"
              onClick={goToNext}
              aria-label="Testimonio siguiente"
            >
              →
            </button>
          </div>
        </div>

        <p className="testimonials__disclaimer">
          * Resultados pueden variar según cada paciente. Testimonios ilustrativos.
        </p>
      </div>
    </section>
  )
}

export default Testimonials
