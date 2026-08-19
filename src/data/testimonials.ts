export const featuredTestimonial = {
  quote:
    "IID cambió nuestras vidas. Nos sentimos escuchados, comprendidos y acompañados en cada paso del proceso.",
  author: "Familia R.",
  context: "Experiencia familiar",
  rating: 5,
};

export const testimonialPlaceholders = [
  {
    quote:
      "La evaluación nos permitió entender mejor lo que estaba ocurriendo y tomar decisiones con mayor tranquilidad.",
    author: "Familia A.",
    context: "Evaluación especializada",
    title: "Comprender para tomar mejores decisiones",
    description:
      "Espacio reservado para una experiencia validada sobre el proceso de evaluación y la claridad de sus resultados.",
    rating: 5,
  },
  {
    quote:
      "Desde la primera sesión sentimos que nuestra experiencia era escuchada con respeto y sin prejuicios.",
    author: "Persona adulta",
    context: "Acompañamiento clínico",
    title: "Una atención donde la persona se siente escuchada",
    description:
      "Espacio reservado para un testimonio autorizado sobre el vínculo con el equipo profesional.",
    rating: 5,
  },
  {
    quote:
      "Recibimos herramientas claras que pudimos aplicar en casa y conversar con el entorno educativo.",
    author: "Familia M.",
    context: "Orientación a familias",
    title: "Herramientas para acompañar con más confianza",
    description:
      "Espacio reservado para relatar cómo la orientación recibida se traduce en la vida cotidiana.",
    rating: 5,
  },
  {
    quote:
      "La modalidad online nos permitió acceder a un equipo especializado sin importar nuestra ubicación.",
    author: "Familia de región",
    context: "Atención online",
    title: "Especialización accesible desde otras regiones",
    description: "Espacio reservado para una experiencia autorizada sobre atención remota.",
    rating: 5,
  },
  {
    quote:
      "El informe fue claro y nos ayudó a comprender tanto las necesidades como las fortalezas observadas.",
    author: "Familia C.",
    context: "Evaluación cognitiva",
    title: "Resultados comprensibles y útiles",
    description: "Espacio reservado para una experiencia validada sobre devolución de resultados.",
    rating: 5,
  },
];

export const allTestimonials = [
  { ...featuredTestimonial, validated: true },
  ...testimonialPlaceholders.map((item) => ({ ...item, validated: false })),
];
