import './StarProgram.css'

const plans = [
  {
    name: 'Plan Básico',
    items: ['Consulta dermatológica', 'Diagnóstico', 'Rutina básica recomendada', 'Descuento en producto'],
  },
  {
    name: 'Plan Intermedio',
    featured: true,
    items: ['Consulta', '2–3 terapias dermatológicas', 'Kit básico de productos', 'Seguimiento'],
  },
  {
    name: 'Plan Premium',
    items: ['Consulta especializada', '4–6 terapias (láser, peeling, etc.)', 'Kit completo de productos', 'Seguimiento personalizado'],
  },
]

const specializedPrograms = [
  {
    icon: '🎯',
    title: 'Programa Acné Control Total',
    items: ['Consulta + diagnóstico', 'Limpiezas + terapias', 'Kit de productos', 'Seguimiento'],
  },
  {
    icon: '✨',
    title: 'Programa Despigmentación',
    items: ['Evaluación dermatológica', 'Peelings / láser', 'Rutina personalizada', 'Control mensual'],
  },
  {
    icon: '💆',
    title: 'Programa Rejuvenecimiento Facial',
    items: ['Tratamientos estéticos', 'Terapias + productos', 'Plan progresivo'],
  },
]

function StarProgram() {
  const whatsappLink = 'https://chat.whatsapp.com/KCraZOBRqaQDitpuaUNOIH'

  return (
    <section id="programa" className="star-program">
      <div className="star-program__container">
        <div className="star-program__header">
          <h2 className="star-program__title">Programa Dermanova Piel Perfecta</h2>
          <div className="star-program__accent" />
          <p className="star-program__subtitle">
            No vendes consulta → vendes RESULTADOS. Un tratamiento integral que incluye consulta
            dermatológica, diagnóstico personalizado, plan de tratamiento, terapias dermatológicas,
            productos de la tienda propia, y seguimiento continuo.
          </p>
        </div>

        <blockquote className="star-program__quote">
          “Tenemos un programa completo que no solo diagnostica, sino que trata tu piel desde el
          primer día.”
        </blockquote>

        <div className="star-program__grid">
          {plans.map((plan) => (
            <div
              className={`star-program__card ${plan.featured ? 'star-program__card--featured' : ''}`}
              key={plan.name}
            >
              {plan.featured && <span className="star-program__badge">Más elegido</span>}
              <h3 className="star-program__plan-name">{plan.name}</h3>
              <ul className="star-program__list">
                {plan.items.map((item) => (
                  <li className="star-program__list-item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="star-program__cta"
              >
                Solicita información
              </a>
            </div>
          ))}
        </div>

        <div className="star-program__special">
          <h3 className="star-program__special-title">Programas especializados</h3>
          <p className="star-program__special-subtitle">
            Tratamientos específicos para cada necesidad de tu piel
          </p>
          <div className="star-program__special-grid">
            {specializedPrograms.map((program) => (
              <div className="star-program__mini-card" key={program.title}>
                <span className="star-program__mini-icon" aria-hidden="true">
                  {program.icon}
                </span>
                <h4 className="star-program__mini-title">{program.title}</h4>
                <ul className="star-program__mini-list">
                  {program.items.map((item) => (
                    <li className="star-program__mini-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StarProgram