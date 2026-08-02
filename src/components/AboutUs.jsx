import './AboutUs.css'

function AboutUs() {
  return (
    <section id="nosotros" className="about">
      <div className="about__container">
        <div className="about__header">
          <h2 className="about__title">Sobre Nosotros</h2>
          <div className="about__accent" />
        </div>

        <blockquote className="about__story">
          “VÉ” evoca belleza, visión y estética. “LYA” aporta un sonido suave, femenino y
          elegante. En conjunto, VÉLYA suena a marca exclusiva, moderna y delicada, tipo europea.
          Se percibe como belleza elevada, cuidado fino de la piel y armonía estética.
        </blockquote>

        <div className="about__cards">
          <article className="about__card">
            <span className="about__card-icon" aria-hidden="true">🎯</span>
            <h3 className="about__card-title">Misión</h3>
            <p className="about__card-text">
              Brindar atención integral en dermatología a través de servicios clínicos, estéticos y
              terapéuticos, ofreciendo diagnósticos precisos, tratamientos personalizados y
              prevención de enfermedades de la piel, el cabello y las uñas. Con acceso directo a
              productos dermatológicos en nuestra tienda especializada. De esta manera nos
              comprometemos con la seguridad, la innovación y la humanización del servicio para
              mejorar la calidad de vida de nuestros pacientes mediante tecnología avanzada,
              talento humano calificado y un trato ético y cercano.
            </p>
          </article>

          <article className="about__card">
            <span className="about__card-icon" aria-hidden="true">🚀</span>
            <h3 className="about__card-title">Visión</h3>
            <p className="about__card-text">
              Para el año 2030, ser una clínica dermatológica líder en Colombia, reconocida por su
              modelo integral de atención que combina servicios médicos, terapias especializadas y
              farmacia dermatológica propia, destacándose por la innovación, el compromiso con la
              salud, resultados clínicos de alta calidad, el bienestar y la experiencia del
              paciente.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutUs