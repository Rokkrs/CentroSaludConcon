export const site = {
  name: "Instituto Incluidos",
  shortName: "IID",
  tagline: "Ciencia, investigación, derechos e inclusión.",
  description:
    "Centro especializado en neurodivergencia en Viña del Mar, con atención presencial y online para niños, adolescentes y adultos de todo Chile.",
  phone: "+56 9 4801 1273",
  email: "incluidosporderecho@gmail.com",
  instagram: "https://www.instagram.com/icneurodivergencia",
  whatsapp: "https://wa.me/56948011273",
  reservo: "https://agendamiento.reservo.cl/makereserva/agenda/O09DXf40G0dkZg1o7f77F916t0T9Cp",
  boxReservo: "https://agendamiento.reservo.cl/makereserva/agenda/T0O8zLZ0d0ivjT5g7t47y5j6u3V9Fv",
  address: "7 norte 645, Edificio Centro Libertad, Oficina 409, Viña del Mar, Chile",
  maps: "https://www.google.com/maps/search/?api=1&query=7%20Nte.%20645%2C%20Vi%C3%B1a%20del%20Mar%2C%20Valpara%C3%ADso",
  hours: ["Lunes a viernes · 08:00 a 20:45", "Sábados · 08:00 a 14:00"],
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
  { label: "Arriendo de box", href: site.boxReservo, external: true },
  { label: "Contacto", href: withBase(`${homePath}#contacto`) },
];
