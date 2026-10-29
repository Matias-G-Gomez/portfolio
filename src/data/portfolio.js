// Todo el contenido de la web está acá.
// Para actualizar el portfolio, editá este archivo y no hace falta tocar los componentes.

export const profile = {
  name: 'Matías Germán Gómez',
  role: 'Desarrollador de Software Trainee',
  focus: 'Full stack y backend con React, Node.js, Java y Python',
  location: 'Quilmes, Buenos Aires, Argentina',
  summary: [
    'Soy estudiante avanzado de la Tecnicatura en Desarrollo de Software en UADE y curso en paralelo la Licenciatura en Gestión de Tecnología de la Información. Desarrollé proyectos full stack y backend con APIs REST, autenticación con JWT, bases de datos SQL y NoSQL, Git y Docker.',
    'Busco mi primera posición como Desarrollador Trainee o Junior para aportar código prolijo y mantenible, aprender de equipos con experiencia y seguir creciendo en el área de IT. Me apropio de mis desafíos, aprendo rápido y disfruto trabajar en equipo.',
  ],
  email: 'matiasggomez2001@gmail.com',
  github: 'https://github.com/Matias-G-Gomez',
  // Cuando cambies tu URL personalizada de LinkedIn, reemplazala acá.
  linkedin: 'https://www.linkedin.com/in/matias-german-gomez/',
  cv: '/CV_Matias_German_Gomez.pdf',
}

// Cada proyecto puede tener, además del código:
//   demo:  link a la versión publicada (ej. 'https://turnos-medicos.vercel.app')
//   image: captura de pantalla guardada en public/projects/ (ej. '/projects/turnos.png')
// Si dejás alguno vacío, la web simplemente no lo muestra.
export const projects = [
  {
    title: 'Sistema de Gestión de Turnos Médicos',
    description:
      'Aplicación web full stack para un consultorio de traumatología. Tiene inicio de sesión con JWT, permisos por rol para administración y secretaría, reserva y cancelación de turnos, gestión de obras sociales y avisos automáticos por email.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Nodemailer'],
    repo: 'https://github.com/Matias-G-Gomez/Medical-Appointment-System',
    demo: '',
    image: '',
  },
  {
    title: 'Sistema de Planificación de Rutas',
    description:
      'Backend en Spring Boot que planifica y optimiza recorridos modelados como grafos en Neo4j. Implementa distintos algoritmos sobre grafos y los expone mediante una API REST.',
    stack: ['Java', 'Spring Boot', 'API REST', 'Neo4j'],
    repo: 'https://github.com/Matias-G-Gomez/progra3-tpo-rutas',
    demo: '',
    image: '',
  },
  {
    title: 'Plataforma de Datos Multimodelo',
    description:
      'Red profesional estilo LinkedIn construida sobre cuatro bases de datos, cada una elegida según su caso de uso. Incluye CRUD completo, 7 casos de uso y una carga de 600 usuarios con unas 520 conexiones cada uno.',
    stack: ['Python', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Redis', 'Docker'],
    repo: 'https://github.com/Matias-G-Gomez/Multidb-LinkedIn-UADE-Ingenieria-Datos-2',
    demo: '',
    image: '',
  },
  {
    title: 'EstoyBien, app de detección de caídas',
    status: 'En desarrollo',
    description:
      'Proyecto en equipo: app Android para adultos mayores y personas con movilidad reducida que detecta caídas y alerta a contactos de emergencia.',
    stack: ['Kotlin', 'Android'],
    repo: 'https://github.com/Matias-G-Gomez/estoybien-app',
    demo: '',
    image: '',
  },
]

export const experience = [
  {
    role: 'Administrativo y Atención al Cliente',
    company: 'Inmobiliaria en Quilmes',
    period: 'Oct 2024 – Mar 2025',
    mode: 'Presencial',
    tasks: [
      'Atención de clientes y acompañamiento en visitas a departamentos, casas y locales.',
      'Gestión y publicación de propiedades en venta y alquiler en Mercado Libre.',
      'Creación de contenido para redes sociales, con publicaciones y reels para promocionar propiedades.',
      'Cobro de alquileres y seguimiento administrativo de las propiedades.',
    ],
  },
  {
    role: 'Pasante de Soporte Técnico',
    company: 'GAOTEK',
    period: 'Mar 2024 – Sep 2024',
    mode: 'Remoto',
    tasks: [
      'Seguimiento, análisis y documentación de incidencias técnicas hasta su resolución.',
      'Control de calidad y validación de información en plataformas web antes de su publicación.',
      'Desarrollo y entrega de páginas web en WordPress según estándares definidos.',
      'Coordinación de tareas con equipos internacionales distribuidos.',
    ],
  },
]

export const education = [
  {
    degree: 'Tecnicatura en Desarrollo de Software',
    school: 'UADE',
    progress: 95,
    detail: 'Egreso previsto en 2026',
  },
  {
    degree: 'Licenciatura en Gestión de Tecnología de la Información',
    school: 'UADE',
    progress: 63,
    detail: 'En curso',
  },
]

export const skills = [
  { group: 'Lenguajes', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Kotlin', 'SQL'] },
  { group: 'Frontend', items: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Spring Boot', 'APIs REST', 'JWT'] },
  { group: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'Neo4j', 'Cassandra'] },
  { group: 'Herramientas', items: ['Git', 'GitHub', 'Docker', 'Postman', 'Jira', 'VS Code', 'IntelliJ IDEA'] },
  { group: 'Datos y calidad', items: ['Apache Spark', 'Jupyter', 'Testing manual', 'Validación funcional'] },
]

export const certifications = [
  { name: 'Testing QA Manual', issuer: 'Coderhouse', year: 2025 },
  { name: 'Python para Análisis de Datos', issuer: 'EducaciónIT', year: 2024 },
  { name: 'Introducción a Bases de Datos y SQL', issuer: 'EducaciónIT', year: 2023 },
]

export const languages = [
  { name: 'Inglés', level: 'Intermedio' },
  { name: 'Alemán', level: 'Básico' },
]
