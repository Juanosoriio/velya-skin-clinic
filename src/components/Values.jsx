import './Values.css'

const values = [
  {
    icon: '🤝',
    title: 'Compromiso',
    text: 'Trabajamos con dedicación para garantizar el bienestar de cada paciente.',
  },
  {
    icon: '⚖️',
    title: 'Ética',
    text: 'Actuamos con transparencia, responsabilidad y respeto en todos nuestros procesos.',
  },
  {
    icon: '✨',
    title: 'Calidad',
    text: 'Ofrecemos servicios con altos estándares científicos y tecnológicos.',
  },
  {
    icon: '💙',
    title: 'Humanización',
    text: 'Brindamos una atención cálida, empática y centrada en el paciente.',
  },
  {
    icon: '🚀',
    title: 'Innovación',
    text: 'Incorporamos nuevas tecnologías y tratamientos dermatológicos avanzados.',
  },
  {
    icon: '👥',
    title: 'Trabajo en equipo',
    text: 'Fomentamos la colaboración entre profesionales de la salud.',
  },
  {
    icon: '🌱',
    title: 'Responsabilidad social',
    text: 'Promovemos el cuidado de la piel y la prevención en la comunidad.',
  },
]

function Values() {
  return (
    <section id="valores" className="values">
      <div className="values__container">
        <div className="values__header">
          <h2 className="values__title">Nuestros Valores</h2>
          <div className="values__accent" />
          <p className="values__subtitle">
            Los principios que guían cada atención en VELYA SKIN CLINIC
          </p>
        </div>

        <div className="values__grid">
          {values.map((value) => (
            <div className="values__card" key={value.title}>
              <span className="values__card-icon" aria-hidden="true">
                {value.icon}
              </span>
              <h3 className="values__card-title">{value.title}</h3>
              <p className="values__card-text">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values