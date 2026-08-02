import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Conectar con Formspree, EmailJS o un backend propio para enviar el formulario real.
    setEnviado(true)
    setFormData({ nombre: '', correo: '', mensaje: '' })
  }

  return (
    <section id="contacto" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__title">Visítanos o Escríbenos</h2>
          <div className="contact__accent" />
          <p className="contact__subtitle">
            Estamos aquí para resolver tus dudas y agendar tu cita. Contáctanos por el medio que prefieras.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <ul className="contact__list">
              <li className="contact__list-item">
                <span className="contact__list-icon" aria-hidden="true">📍</span>
                <span>Dirección de la clínica (próximamente)</span>
              </li>
              <li className="contact__list-item">
                <span className="contact__list-icon" aria-hidden="true">📞</span>
                <span>+57 300 000 0000</span>
              </li>
              <li className="contact__list-item">
                <span className="contact__list-icon" aria-hidden="true">✉️</span>
                <span>contacto@velyaskinclinic.com</span>
              </li>
              <li className="contact__list-item">
                <span className="contact__list-icon" aria-hidden="true">🕒</span>
                <span>Lunes a Sábado: 8:00 am - 6:00 pm</span>
              </li>
            </ul>

            <a
              href="https://chat.whatsapp.com/KCraZOBRqaQDitpuaUNOIH"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__whatsapp"
            >
              <span aria-hidden="true">💬</span>
              Escríbenos por WhatsApp
            </a>

            <div className="contact__socials">
              {/* Reemplaza estos href por las URLs reales de Instagram y TikTok cuando la clínica las proporcione */}
              <a href="#" className="contact__social-link" aria-label="Instagram" title="Próximamente">
                <span aria-hidden="true">📸</span>
              </a>
              <a href="#" className="contact__social-link" aria-label="TikTok" title="Próximamente">
                <span aria-hidden="true">🎵</span>
              </a>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              <h3 className="contact__form-title">Envíanos un mensaje</h3>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="contact__input"
                required
              />
              <input
                type="email"
                name="correo"
                placeholder="Correo o teléfono"
                value={formData.correo}
                onChange={handleChange}
                className="contact__input"
                required
              />
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="contact__textarea"
                required
              />
              <button type="submit" className="contact__submit">
                Enviar mensaje
              </button>
              {enviado && (
                <p className="contact__success">
                  ¡Gracias! Te contactaremos pronto.
                </p>
              )}
            </form>
          </div>

          <div className="contact__map">
            {/* Reemplaza el src por la URL de embed de Google Maps de la ubicación real de la clínica cuando la tengan */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.823!2d-74.072!3d4.711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzcnMDAuMCJOIDc0wrAyNScyMC4wIlc!5e0!3m2!1ses!2sco!4v1690000000000"
               title="Ubicación de VELYA SKIN CLINIC"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
