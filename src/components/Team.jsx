import './Team.css'

const teamMembers = [
  {
    cargo: 'Dermatólogo(a)',
    descripcion: 'Especialista principal. Diagnostica y trata enfermedades de la piel, cabello y uñas, con formación como médico especialista en dermatología.',
    icono: '🩺',
  },
  {
    cargo: 'Enfermero(a) Jefe',
    descripcion: 'Coordina los procedimientos clínicos y el apoyo a cada paciente durante su tratamiento.',
    icono: '💉',
  },
  {
    cargo: 'Cosmetólogo(a) / Especialista en Láser',
    descripcion: 'Maneja los equipos de tratamientos estéticos como depilación láser, manchas y rejuvenecimiento.',
    icono: '✨',
  },
  {
    cargo: 'Terapeuta Dermatólogo',
    descripcion: 'Se dedica al diagnóstico, tratamiento y prevención de enfermedades que afectan la piel, el cabello, las uñas y las membranas mucosas.',
    icono: '💆',
  },
  {
    cargo: 'Nutricionista',
    descripcion: 'Apoya los tratamientos relacionados con alimentación y salud de la piel.',
    icono: '🥗',
  },
  {
    cargo: 'Psicólogo(a)',
    descripcion: 'Acompaña a los pacientes, especialmente en el impacto emocional de las enfermedades de la piel.',
    icono: '💙',
  },
]

function Team() {
  return (
    <section id="equipo" className="team">
      <div className="team__container">
        <div className="team__header">
          <h2 className="team__title">Nuestro Equipo</h2>
          <div className="team__accent" />
          <p className="team__subtitle">
            Un equipo interdisciplinario que combina experiencia médica, estética y humana para brindarte una atención integral.
          </p>
        </div>

        <div className="team__grid">
          {teamMembers.map((member) => (
            <div className="team__card" key={member.cargo}>
              <div className="team__avatar" aria-hidden="true">
                {member.icono}
              </div>
              <h3 className="team__card-title">{member.cargo}</h3>
              <p className="team__card-text">{member.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team