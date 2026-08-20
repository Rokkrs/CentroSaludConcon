export const featuredTestimonial = {
  quote: "Un personal altamente capacitado con calidad humana y atención personalizada.",
  author: "Allison Escoto",
  context: "Atención del equipo",
  rating: 5,
};

export const testimonialPlaceholders = [
  {
    quote: "Excelente espacio para aprender y crecer. ¡Felicitaciones!",
    author: "Carla Casas-Cordero",
    context: "Experiencia general",
    rating: 5,
  },
  {
    quote:
      "Quiero agradecer profundamente el trabajo de Isabel Gamboa, psicóloga del centro, con mi hija. Desde el primer momento demostró una gran calidad humana, empatía y profesionalismo, generando un ambiente de confianza que permitió que mi hija se sintiera segura y cómoda durante todo el proceso. Es un lugar donde se nota la vocación y el cariño por lo que hacen; lo recomiendo con total confianza a las familias que busquen un espacio serio, humano y comprometido.",
    author: "Madre de paciente",
    context: "Acompañamiento psicológico",
    rating: 5,
  },
  {
    quote:
      "Me encantó. Como adulta buscaba un lugar donde me acogieran y tuvieran paciencia; ser neurodivergente no es fácil, y ahora estoy mucho mejor. ¡Muchas gracias al equipo!",
    author: "Josefa Soto",
    context: "Atención a adultos",
    rating: 5,
  },
  {
    quote:
      "Quisiera agradecerles por su trabajo: vino la abuela de Máximo de visita y no podía creer que ahora come verduras, ¡algo impensado para todos! Muchísimas gracias por su linda labor, en especial a su terapeuta ocupacional.",
    author: "Familia de Máximo",
    context: "Terapia ocupacional",
    rating: 5,
  },
];

export const allTestimonials = [
  { ...featuredTestimonial, validated: true },
  ...testimonialPlaceholders.map((item) => ({ ...item, validated: true })),
];
