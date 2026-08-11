export const site = {
  name: "Instituto Incluidos",
  shortName: "IID",
  tagline: "Ciencia, investigación, derechos e inclusión.",
  description:
    "Centro de referencia en neurodivergencia, evaluación, diagnóstico e intervención interdisciplinaria basada en evidencia.",
  phone: "+56 9 1234 5678",
  email: "contacto@institutoincluidos.cl",
  instagram: "https://instagram.com/REEMPLAZAR",
  whatsapp: "https://wa.me/56REEMPLAZAR",
  reservo: "https://reservo.cl/REEMPLAZAR",
  address: "Dirección por confirmar · Viña del Mar, Chile",
  maps: "https://maps.google.com/REEMPLAZAR",
  hours: "Lunes a viernes · 09:00 a 19:00",
};

export const withBase = (path = "") => {
  const base = `${import.meta.env.BASE_URL.replace(/\/+$/, "")}/`;
  return `${base}${path.replace(/^\/+/, "")}`;
};

export const navigation = [
  { label: "Especialidades", href: withBase("#servicios") },
  { label: "Equipo", href: withBase("#equipo") },
  { label: "Testimonios", href: withBase("testimonios/") },
  { label: "Investigación", href: withBase("#trayectoria") },
  { label: "Contacto", href: withBase("#contacto") },
];
