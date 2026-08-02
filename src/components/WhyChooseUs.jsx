import './WhyChooseUs.css'

const differentiators = [
  {
    icon: '🏥',
    title: 'Todo en un solo lugar',
    text: 'El paciente recibe diagnóstico, tratamiento, terapia y productos dermatológicos sin salir de la clínica, reduciendo tiempos y mejorando la adherencia al tratamiento.',
  },
  {
    icon: '💙',
    title: 'Acompañamiento integral',
    text: 'Contamos con acompañamiento psicológico y nutricional para pacientes, entendiendo que el impacto de las enfermedades de la piel también es emocional.',
  },
  {
    icon: '⚡',
    title: 'Tecnología e innovación',
    text: 'Incorporamos tecnología avanzada y talento humano calificado, con equipos modernos visibles y procesos de vanguardia en cada consulta.',
  },
  {
    icon: '✅',
    title: 'Resultados, no solo consultas',
    text: 'No vendes una consulta, vendes resultados: cada programa incluye diagnóstico, tratamiento, terapia y seguimiento hasta ver el cambio real en la piel del paciente.',
  },
]

const modelSteps = [
  { icon: '🩺', text: 'Diagnóstico médico' },
  { icon: '✨', text: 'Tratamiento' },
  { icon: '💆', text: 'Terapia dermatológica' },
  { icon: '🛍️', text: 'Compra del producto' },
]

function WhyChooseUs() {
  return (
    <section id="diferenciadores" className="why-choose-us">
      <div className="why-choose-us__container">
        <div className="why-choose-us__header">
          <h2 className="why-choose-us__title">¿Por Qué Elegirnos?</h2>
          <div className="why-choose-us__accent" />
          <p className="why-choose-us__headline">No solo tratamos la piel, tratamos la confianza</p>
          <div className="why-choose-us__tags">
            <span className="why-choose-us__tag">Confianza médica</span>
            <span className="why-choose-us__tag">Innovación</span>
            <span className="why-choose-us__tag">Bienestar</span>
            <span className="why-choose-us__tag">Belleza natural</span>
          </div>
        </div>

        <div className="why-choose-us__grid">
          {differentiators.map((item) => (
            <div className="why-choose-us__card" key={item.title}>
              <span className="why-choose-us__card-icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="why-choose-us__card-title">{item.title}</h3>
              <p className="why-choose-us__card-text">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="why-choose-us__model">
          <h3 className="why-choose-us__model-title">Modelo Vélya Skin</h3>
          <div className="why-choose-us__flow">
            {modelSteps.map((step, index) => (
              <>
                <div className="why-choose-us__step" key={`step-${step.text}`}>
                  <div className="why-choose-us__step-circle">
                    {step.icon}
                  </div>
                  <span className="why-choose-us__step-text">{step.text}</span>
                </div>
                {index < modelSteps.length - 1 && (
                  <span className="why-choose-us__arrow" key={`arrow-${step.text}`} aria-hidden="true">
                    →
                  </span>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs