import './Values.css'

const values = [
  {
    icon: '🤝',
    title: 'Compromiso',
    text: 'Trabajamos con dedicación para garantizar el bienestar de cada paciente.',
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