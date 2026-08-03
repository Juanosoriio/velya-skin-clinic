import { useState } from 'react'
import './Testimonials.css'

import antes1 from '../assets/images/Acne-antes.jpeg'
import despues1 from '../assets/images/Acne-despues.jpeg'
import antes2 from '../assets/images/Manchas-antes.jpeg'
import despues2 from '../assets/images/Manchas-despues.jpeg'
import antes3 from '../assets/images/Cicatrices-acne.jpeg'
import despues3 from '../assets/images/Cicatrices-acne-despues.jpeg'

const testimonialsData = [
  {
    nombre: 'Paciente VELYA',
    tratamiento: 'Tratamiento de acné',
    texto: 'Después de años de probar productos sin resultado, en VELYA me dieron un plan real. Mi piel cambió y mi confianza también. El acompañamiento fue increíble.',
    estrellas: 5,
    imagenAntes: antes1,
    imagenDespues: despues1,
  },
  {
    nombre: 'M.R.',
    tratamiento: 'Despigmentación',
    texto: 'Llegué con manchas muy notorias y en pocas sesiones vi una diferencia enorme. No solo me ayudaron con mi piel, sino que me explicaron cada paso del tratamiento.',
    estrellas: 5,
    imagenAntes: antes2,
    imagenDespues: despues2,
  },
  {
    nombre: 'Paciente de 28 años',
    tratamiento: 'Rejuvenecimiento facial',
    texto: 'El equipo de VELYA entendió exactamente lo que quería. Mi piel se ve más fresca y luminosa. Me sentí en buenas manos desde la primera consulta.',
    estrellas: 5,
    imagenAntes: antes3,
    imagenDespues: despues3,
  },
]

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
                          src={item.imagenAntes}
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
                          src={item.imagenDespues}
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
