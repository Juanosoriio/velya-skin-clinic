import './Services.css'

const services = [
  {
    icon: '🩺',
    title: 'Servicios médicos',
    items: ['Consulta dermatológica', 'Procedimientos clínicos y quirúrgicos'],
    plus: false,
  },
  {
    icon: '✨',
    title: 'Servicios estéticos',
    items: ['Limpiezas faciales', 'Láser', 'Rejuvenecimiento'],
    plus: false,
  },
  {
    icon: '💆',
    title: 'Terapias dermatológicas',
    items: [
      'Tratamientos especializados post-acné',
      'Terapias para manchas, rosácea, etc.',
    ],
    plus: true,
  },
]

function Services() {
  return (
    <section id="servicios" className="services">
      <div className="services__container">
        <div className="services__header">
          <h2 className="services__title">Nuestros Servicios</h2>
          <div className="services__accent" />
          <p className="services__subtitle">
            VELYA SKIN CLINIC ofrece un modelo integral donde el paciente recibe diagnóstico,
            tratamiento, terapia y productos dermatológicos en un solo lugar, reduciendo tiempos,
            mejorando la adherencia al tratamiento y garantizando resultados más efectivos.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <div className="services__card" key={service.title}>
              <div className="services__card-header">
                <span className="services__card-icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="services__card-title">{service.title}</h3>
                {service.plus && <span className="services__badge">PLUS</span>}
              </div>
              <ul className="services__list">
                {service.items.map((item) => (
                  <li className="services__list-item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services