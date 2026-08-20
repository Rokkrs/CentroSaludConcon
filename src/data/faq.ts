import { site } from "./site";

export const faq = [
  {
    question: "¿Atienden online en todo Chile?",
    answer: "Sí. Ofrecemos atención online para personas y familias de todo Chile, según la especialidad y la pertinencia clínica de cada atención.",
    action: { label: "Reservar atención online", href: site.reservo },
  },
  {
    question: "¿Dónde está ubicado el centro?",
    answer: `Nuestro centro realiza atención presencial en ${site.address}, además de atención online para otras regiones de Chile.`,
    action: { label: "Ver en el mapa", href: site.maps },
  },
  {
    question: "¿Qué atenciones y evaluaciones ofrecen?",
    answer: "Contamos con atención en psiquiatría, psicología, terapia ocupacional y fonoaudiología, además de evaluaciones especializadas como ADOS-2, WISC-V, Perfil sensorial y otros.",
  },
  {
    question: "¿Para qué edades atienden?",
    answer: "Trabajamos con niños, adolescentes y adultos, con evaluación e intervención adaptada a cada etapa.",
  },
  {
    question: "¿Es necesario tener un diagnóstico previo para atenderse?",
    answer: "No necesariamente. Si no cuentas con un diagnóstico previo o no sabes qué atención necesitas, puedes contactar a nuestro equipo para recibir orientación antes de reservar.",
  },
  {
    question: "¿Qué formas de pago están disponibles?",
    answer: "Aceptamos transferencia electrónica. Se entrega boleta para reembolso en Isapres y seguros complementarios.",
  },
  {
    question: "¿Cómo puedo solicitar una hora?",
    answer: "Puedes agendar directamente desde la página web o escribirnos por WhatsApp. Te responderemos a la brevedad para coordinar una hora según tu disponibilidad.",
    action: { label: "Escribir por WhatsApp", href: site.whatsapp },
  },
];
