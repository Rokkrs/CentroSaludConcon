export const site = {
  name: "Instituto Incluidos",
  shortName: "IID",
  tagline: "Ciencia, investigación, derechos e inclusión.",
  description:
    "Centro especializado en neurodivergencia en Viña del Mar, con atención presencial y online para niños, adolescentes y adultos de todo Chile.",
  phone: "+56 9 1234 5678",
  email: "contacto@institutoincluidos.cl",
  instagram: "https://instagram.com/REEMPLAZAR",
  whatsapp: "https://wa.me/56REEMPLAZAR",
  reservo: "https://agendamiento.reservo.cl/makereserva/agenda/O09DXf40G0dkZg1o7f77F916t0T9Cp",
  boxReservo: "https://agendamiento.reservo.cl/makereserva/agenda/T0O8zLZ0d0ivjT5g7t47y5j6u3V9Fv",
  address: "Dirección por confirmar · Viña del Mar, Chile",
  maps: "https://maps.google.com/REEMPLAZAR",
  hours: "Lunes a viernes · 09:00 a 19:00",
};

export const withBase = (path = "") => {
  const base = `${import.meta.env.BASE_URL.replace(/\/+$/, "")}/`;
  return `${base}${path.replace(/^\/+/, "")}`;
};

export const homePath = "preview/";

export const navigation = [
  { label: "Especialidades", href: withBase(`${homePath}#servicios`) },
  { label: "Equipo", href: withBase(`${homePath}#equipo`) },
  { label: "Testimonios", href: withBase("testimonios/") },
  { label: "Investigación", href: withBase(`${homePath}#trayectoria`) },
  { label: "Contacto", href: withBase(`${homePath}#contacto`) },
];
