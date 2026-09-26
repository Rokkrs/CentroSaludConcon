export interface ServicePageFaq {
  question: string;
  answer: string;
}

export interface ServicePage {
  slug: string;
  label: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  headingEmphasis: string;
  lead: string;
  about: string;
  audience: string[];
  includes: { title: string; text: string }[];
  specialists: string[];
  faqs: ServicePageFaq[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "evaluacion-autismo-tea-vina-del-mar",
    label: "Evaluación de autismo (TEA)",
    title: "Evaluación de Autismo (TEA) y ADOS-2 en Viña del Mar",
    description:
      "Evaluación diagnóstica de autismo (TEA) con ADOS-2 en Viña del Mar y online. Niños, adolescentes y adultos, con equipo interdisciplinario especializado.",
    eyebrow: "Trastorno del espectro autista",
    heading: "Evaluación de autismo",
    headingEmphasis: "(TEA) en Viña del Mar",
    lead:
      "Evaluación diagnóstica del espectro autista para niños, adolescentes y adultos, con profesionales acreditadas en ADOS-2 y un equipo que trabaja de manera coordinada.",
    about:
      "Una evaluación de autismo busca comprender cómo una persona se comunica, se relaciona y procesa su entorno, identificando tanto sus necesidades de apoyo como sus fortalezas. En nuestro centro combinamos la evaluación psicológica con ADOS-2, la mirada de terapia ocupacional y, cuando corresponde, el diagnóstico diferencial en psiquiatría.",
    audience: [
      "Familias que observan diferencias en la comunicación, el juego o la interacción social de sus hijos.",
      "Adolescentes y adultos que sospechan ser autistas y buscan una evaluación formal.",
      "Personas derivadas por colegios, equipos PIE u otros profesionales.",
      "Quienes necesitan un diagnóstico diferencial con TDAH, altas capacidades u otras condiciones.",
    ],
    includes: [
      { title: "Evaluación ADOS-2", text: "Evaluación estandarizada para el diagnóstico del espectro autista, realizada por psicólogas acreditadas." },
      { title: "Evaluación integral de TEA", text: "Evaluación funcional desde terapia ocupacional para comprender necesidades, fortalezas y participación cotidiana." },
      { title: "Perfil sensorial", text: "Evaluación del procesamiento sensorial para orientar apoyos y estrategias de autorregulación." },
      { title: "Diagnóstico diferencial", text: "Evaluación psiquiátrica cuando se requiere distinguir entre TEA, TDAH, altas capacidades u otras condiciones." },
    ],
    specialists: ["Isabel Gamboa", "Daniela Vásquez", "Carolina Jiménez", "Natacha Loubies"],
    faqs: [
      {
        question: "¿Evalúan autismo en adultos?",
        answer: "Sí. Realizamos evaluaciones de autismo en niños, adolescentes y adultos, adaptando el proceso a cada etapa de vida.",
      },
      {
        question: "¿Qué es el ADOS-2?",
        answer: "Es un instrumento estandarizado de observación que se utiliza en la evaluación diagnóstica del espectro autista. En nuestro centro lo aplican psicólogas acreditadas en su uso.",
      },
      {
        question: "¿Necesito una derivación para evaluarme?",
        answer: "No necesariamente. Si no sabes qué evaluación corresponde, puedes escribirnos por WhatsApp y te orientamos antes de reservar.",
      },
    ],
  },
  {
    slug: "evaluacion-tdah-vina-del-mar",
    label: "Evaluación de TDAH",
    title: "Evaluación de TDAH en Niños y Adultos en Viña del Mar",
    description:
      "Evaluación de TDAH y TDA para niños, adolescentes y adultos en Viña del Mar y online. Psiquiatría, psicología y terapia ocupacional coordinadas.",
    eyebrow: "TDAH y TDA",
    heading: "Evaluación de TDAH",
    headingEmphasis: "en niños y adultos",
    lead:
      "Evaluación y acompañamiento del TDAH y TDA con psiquiatría, psicología y terapia ocupacional, presencial en Viña del Mar y online para todo Chile.",
    about:
      "El TDAH se expresa de formas muy distintas según la edad, el contexto y la persona. Por eso evaluamos no solo la atención y la impulsividad, sino también las funciones ejecutivas, el desempeño en la vida diaria y las condiciones que pueden presentarse en paralelo, como el autismo o las altas capacidades.",
    audience: [
      "Niños y adolescentes con dificultades de atención, organización o regulación que afectan su día a día.",
      "Adultos que sospechan tener TDAH y nunca fueron evaluados.",
      "Mujeres con sospecha de TDAH, que con frecuencia se diagnostica tarde.",
      "Personas con diagnóstico previo que buscan una segunda opinión o seguimiento.",
    ],
    includes: [
      { title: "Evaluación psiquiátrica", text: "Diagnóstico diferencial en TEA, TDAH y altas capacidades, con tratamiento médico cuando corresponde." },
      { title: "Evaluación integral de TDAH", text: "Evaluación del desempeño ocupacional, funciones ejecutivas y necesidades de apoyo desde terapia ocupacional." },
      { title: "Evaluación WISC-V", text: "Evaluación cognitiva completa para niños y adolescentes, útil para comprender su perfil de funcionamiento." },
      { title: "Psicología", text: "Evaluación e intervención para el bienestar emocional y el desarrollo personal." },
    ],
    specialists: ["Natacha Loubies", "Carolina Jiménez", "Isabel Gamboa", "Daniela Vásquez"],
    faqs: [
      {
        question: "¿Evalúan TDAH en adultos?",
        answer: "Sí. Nuestra psiquiatra de adultos se dedica al diagnóstico diferencial en TEA, TDAH y altas capacidades, incluyendo formación específica en TDAH femenino.",
      },
      {
        question: "¿La evaluación puede ser online?",
        answer: "Parte de las atenciones se pueden realizar online para personas de todo Chile, según la especialidad y la pertinencia clínica de cada caso.",
      },
      {
        question: "¿Entregan boleta para reembolso?",
        answer: "Sí. Se entrega boleta para reembolso en Isapres y seguros complementarios.",
      },
    ],
  },
  {
    slug: "altas-capacidades-vina-del-mar",
    label: "Altas capacidades (AACC)",
    title: "Evaluación de Altas Capacidades (AACC) en Viña del Mar",
    description:
      "Evaluación integral de altas capacidades cognitivas (AACC) y WISC-V en Viña del Mar y online. Orientación para familias, colegios y adultos.",
    eyebrow: "Altas capacidades cognitivas",
    heading: "Evaluación de",
    headingEmphasis: "altas capacidades",
    lead:
      "Evaluación integral de altas capacidades cognitivas (AACC) para orientar apoyos educativos, emocionales y clínicos, en Viña del Mar y online.",
    about:
      "Las altas capacidades no se reducen a un puntaje. Una evaluación integral considera el perfil cognitivo, el desarrollo emocional y el contexto de cada persona, y ayuda a distinguir las altas capacidades de otras condiciones con las que a veces se confunden o coexisten, como el TDAH o el autismo (doble excepcionalidad).",
    audience: [
      "Familias de niños con aprendizaje muy rápido, intereses intensos o desajuste con su entorno escolar.",
      "Colegios y equipos que necesitan orientación para adaptar apoyos.",
      "Adolescentes y adultos que quieren comprender su perfil de funcionamiento.",
      "Personas con sospecha de doble excepcionalidad.",
    ],
    includes: [
      { title: "Evaluación integral AACC", text: "Evaluación de altas capacidades cognitivas para orientar apoyos y decisiones clínicas." },
      { title: "Evaluación WISC-V", text: "Evaluación cognitiva completa para niños y adolescentes." },
      { title: "Diagnóstico diferencial", text: "Evaluación psiquiátrica cuando se requiere distinguir altas capacidades de TDAH, TEA u otras condiciones." },
    ],
    specialists: ["Isabel Gamboa", "Natacha Loubies"],
    faqs: [
      {
        question: "¿Qué diferencia hay entre una evaluación WISC-V y una evaluación integral de AACC?",
        answer: "El WISC-V es una prueba cognitiva. La evaluación integral de AACC la incluye dentro de un proceso más amplio que considera el desarrollo emocional y el contexto de la persona.",
      },
      {
        question: "¿Puede una persona tener altas capacidades y TDAH o autismo a la vez?",
        answer: "Sí, es lo que se conoce como doble excepcionalidad. Por eso es importante una evaluación que considere ambas posibilidades.",
      },
    ],
  },
  {
    slug: "terapia-ocupacional-integracion-sensorial-vina-del-mar",
    label: "Terapia ocupacional e integración sensorial",
    title: "Terapia Ocupacional e Integración Sensorial en Viña del Mar",
    description:
      "Terapia ocupacional con certificación en integración sensorial en Viña del Mar: perfil sensorial, selectividad alimentaria (ARFID) y remediación cognitiva.",
    eyebrow: "Terapia ocupacional",
    heading: "Terapia ocupacional e",
    headingEmphasis: "integración sensorial",
    lead:
      "Acompañamiento para favorecer la autonomía y la participación en la vida diaria, con certificación internacional en integración sensorial.",
    about:
      "La terapia ocupacional ayuda a que cada persona participe con mayor autonomía en las actividades que son importantes para ella: el juego, el colegio, el trabajo, la alimentación o el autocuidado. En neurodivergencia trabajamos especialmente el procesamiento sensorial, las funciones ejecutivas y los desafíos de alimentación.",
    audience: [
      "Niños con alta sensibilidad o búsqueda sensorial (ruidos, texturas, movimiento).",
      "Familias con desafíos de alimentación o selectividad alimentaria.",
      "Personas con TEA o TDAH que buscan mayor autonomía y autorregulación.",
      "Adolescentes y adultos que necesitan estrategias para organizarse y adaptarse a los cambios.",
    ],
    includes: [
      { title: "Perfil sensorial", text: "Evaluación del procesamiento sensorial para orientar apoyos y estrategias de autorregulación." },
      { title: "Selectividad alimentaria / TERIA / ARFID", text: "Evaluación e intervención en desafíos de alimentación desde terapia ocupacional." },
      { title: "Remediación cognitiva", text: "Intervención orientada a fortalecer estrategias cognitivas y la flexibilidad ante los cambios." },
      { title: "Evaluaciones integrales de TEA y TDAH", text: "Evaluación funcional de necesidades, fortalezas y participación cotidiana." },
    ],
    specialists: ["Carolina Jiménez"],
    faqs: [
      {
        question: "¿Atienden adultos en terapia ocupacional?",
        answer: "Sí. La atención de terapia ocupacional es infanto-juvenil y también para adultos.",
      },
      {
        question: "¿Qué es la selectividad alimentaria?",
        answer: "Es una dificultad para aceptar variedad de alimentos que puede afectar la nutrición y la vida familiar. La abordamos desde terapia ocupacional, considerando los aspectos sensoriales de la alimentación.",
      },
    ],
  },
  {
    slug: "fonoaudiologia-vina-del-mar",
    label: "Fonoaudiología",
    title: "Fonoaudiología en TEA y TDAH en Viña del Mar",
    description:
      "Fonoaudiología en Viña del Mar: lenguaje, habla infantil y comunicación en TEA y TDAH, estimulación temprana y adultos. Trabajo con familias y colegios.",
    eyebrow: "Fonoaudiología",
    heading: "Fonoaudiología para",
    headingEmphasis: "comunicar y participar",
    lead:
      "Evaluación e intervención en comunicación, lenguaje, habla y deglución, con experiencia en TEA, TDAH y estimulación temprana.",
    about:
      "La comunicación es la base para participar en la familia, el colegio y la comunidad. Acompañamos procesos de lenguaje y habla desde la primera infancia hasta la adultez, trabajando de forma coordinada con familias, equipos PIE y establecimientos educacionales.",
    audience: [
      "Niños con retraso en el inicio del lenguaje o dificultades para hacerse entender.",
      "Niños, adolescentes y adultos autistas o con TDAH que necesitan apoyo en comunicación.",
      "Familias que buscan estimulación temprana.",
      "Adultos con necesidades de habla, lenguaje o deglución.",
    ],
    includes: [
      { title: "Lenguaje y habla infantil", text: "Evaluación e intervención en el desarrollo del lenguaje y la articulación." },
      { title: "Comunicación en TEA y TDAH", text: "Apoyo a la comunicación social y funcional según las necesidades de cada persona." },
      { title: "Estimulación temprana", text: "Acompañamiento en las primeras etapas del desarrollo comunicativo." },
      { title: "Trabajo con colegios", text: "Coordinación con familias, equipos PIE y establecimientos educacionales." },
    ],
    specialists: ["Carolina Parra"],
    faqs: [
      {
        question: "¿Desde qué edad atienden en fonoaudiología?",
        answer: "Atendemos desde la estimulación temprana hasta la adultez. Si tienes dudas sobre si corresponde consultar, escríbenos y te orientamos.",
      },
    ],
  },
  {
    slug: "psiquiatria-adultos-vina-del-mar",
    label: "Psiquiatría de adultos",
    title: "Psiquiatra de Adultos en TEA, TDAH y AACC en Viña del Mar",
    description:
      "Psiquiatría de adultos en Viña del Mar y online: diagnóstico diferencial en autismo (TEA), TDAH y altas capacidades, con enfoque basado en evidencia.",
    eyebrow: "Psiquiatría de adultos",
    heading: "Psiquiatría de adultos en",
    headingEmphasis: "neurodivergencia",
    lead:
      "Evaluación diagnóstica y tratamiento médico integral para adultos, con foco en el diagnóstico diferencial de TEA, TDAH y altas capacidades.",
    about:
      "Muchas personas llegan a la adultez sin un diagnóstico que explique su experiencia. La evaluación psiquiátrica permite distinguir entre condiciones que se superponen, como el autismo, el TDAH y las altas capacidades, y definir un tratamiento basado en evidencia, con un enfoque humano y respetuoso.",
    audience: [
      "Adultos que sospechan ser autistas o tener TDAH.",
      "Personas con diagnósticos previos que no terminan de explicar su experiencia.",
      "Mujeres con sospecha de TDAH o autismo de diagnóstico tardío.",
      "Personas que necesitan tratamiento farmacológico o seguimiento médico.",
    ],
    includes: [
      { title: "Evaluación diagnóstica", text: "Evaluación psiquiátrica integral con foco en neurodivergencia." },
      { title: "Diagnóstico diferencial", text: "Distinción entre TEA, TDAH, altas capacidades y otras condiciones de salud mental." },
      { title: "Tratamiento y seguimiento", text: "Tratamiento médico integral basado en evidencia, coordinado con el resto del equipo." },
    ],
    specialists: ["Natacha Loubies"],
    faqs: [
      {
        question: "¿La atención psiquiátrica puede ser online?",
        answer: "Ofrecemos atención online para personas de todo Chile, según la pertinencia clínica de cada caso.",
      },
      {
        question: "¿Atienden niños en psiquiatría?",
        answer: "Nuestra psiquiatra atiende adultos. Para niños y adolescentes contamos con evaluación psicológica, terapia ocupacional y fonoaudiología; escríbenos y te orientamos.",
      },
    ],
  },
];
