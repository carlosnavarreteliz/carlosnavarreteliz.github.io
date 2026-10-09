// News, talks, interviews and things done — the homepage "news" section.
//
// Every entry is backed by a public page (UdeC news, Facultad de Ingeniería,
// CDIA, Radio UdeC), verified on 9 October 2026. Newest first.
//
// Deliberately left out: anything about StreamData (he left the company), and
// visits from named companies (client names stay off the site until he clears
// them — see src/data/industry.js).
//
// `date` is ISO. A "YYYY-MM" date is shown as month and year only, for items
// whose public record gives no exact day.

import {formatDate} from "./columns";

export const KINDS = {
  interview: {en: "Interview", es: "Entrevista"},
  talk: {en: "Talk", es: "Charla"},
  panel: {en: "Panel", es: "Panel"},
  workshop: {en: "Workshop", es: "Taller"},
  course: {en: "Course", es: "Curso"},
  project: {en: "Project", es: "Proyecto"},
  recognition: {en: "Recognition", es: "Reconocimiento"},
};

const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
};

export function newsDate(iso, language = "en") {
  const parts = iso.split("-");
  if (parts.length === 3) return formatDate(iso, language);
  const [y, m] = parts.map(Number);
  return `${MONTHS[language][m - 1]} ${y}`;
}

export const news = [
  {
    date: "2026-09-24",
    kind: "project",
    outlet: "Noticias UdeC",
    url: "https://noticias.udec.cl/udec-presenta-plataforma-para-fortalecer-la-gestion-y-seguimiento-de-los-minors/",
    en: {
      title: "A platform to track the university's Minors",
      note: "Built by four Industrial Engineering students under his and Jorge Maluenda's lead, and presented to the Office of Teaching so the whole university can follow each student's progress towards certification.",
    },
    es: {
      title: "Una plataforma para seguir los Minors de la UdeC",
      note: "Construida por cuatro estudiantes de Ingeniería Civil Industrial bajo su liderazgo y el de Jorge Maluenda, y presentada a la Dirección de Docencia para que toda la universidad siga el avance de cada estudiante hacia la certificación.",
    },
  },
  {
    date: "2026-09-21",
    kind: "interview",
    outlet: "Radio UdeC",
    url: "https://www.radioudec.cl/frenar-la-ia-especialista-aborda-riesgos-y-desafios-de-la-inteligencia-artificial/",
    en: {
      title: "AI as a geopolitical conflict",
      note: "On whether AI can be slowed down: a contest between the United States and China over whose companies hold our data, models able to find and exploit vulnerabilities, and a Latin America still outside the global conversation.",
    },
    es: {
      title: "La IA como conflicto geopolítico",
      note: "Sobre si se puede frenar la IA: una disputa entre Estados Unidos y China por quién se queda con nuestros datos, modelos capaces de encontrar y explotar vulnerabilidades, y una América Latina que aún no está en la conversación global.",
    },
  },
  {
    date: "2026-09-04",
    kind: "course",
    outlet: "CDIA UdeC",
    url: "https://cdia.udec.cl/2026/08/11/curso-agentes-de-ia-y-analisis-de-datos/",
    en: {
      title: "AI Agents and Data Analysis",
      note: "A full-day course for professionals at the UdeC Santiago campus: dashboards and exploratory analysis driven by AI agents.",
    },
    es: {
      title: "Agentes de IA y Análisis de Datos",
      note: "Curso de jornada completa para profesionales en el Campus Santiago de la UdeC: dashboards y análisis exploratorio impulsados por agentes de IA.",
    },
  },
  {
    date: "2026-06",
    kind: "course",
    outlet: "CDIA UdeC",
    url: "https://cdia.udec.cl/2026/06/04/curso-agentes-de-ia-y-machine-learning-i/",
    en: {
      title: "AI Agents and Machine Learning I",
      note: "The data-analytics module of the CDIA course, with AI agents doing the exploratory work alongside the analyst.",
    },
    es: {
      title: "Agentes de IA y Machine Learning I",
      note: "El módulo de analítica de datos del curso del CDIA, con agentes de IA haciendo el trabajo exploratorio junto al analista.",
    },
  },
  {
    date: "2026-06-01",
    kind: "interview",
    outlet: "Noticias UdeC",
    url: "https://noticias.udec.cl/ciberataques-mas-sofisticados-con-uso-de-ia-especialistas-analizan-escenario-de-riesgo-y-aprendizajes-para-la-seguridad-digital/",
    en: {
      title: "AI-driven cyberattacks are a structural shift",
      note: "The models that got good at solving problems also got good at finding holes: flaws that went unnoticed for fifteen or twenty years are exposed overnight.",
    },
    es: {
      title: "Ciberataques con IA: un cambio estructural",
      note: "Los modelos que aprendieron a resolver problemas también aprendieron a encontrar fallas: vulnerabilidades que pasaron 15 o 20 años inadvertidas quedan expuestas de la noche a la mañana.",
    },
  },
  {
    date: "2026-05-25",
    kind: "talk",
    outlet: "Facultad de Ingeniería UdeC",
    url: "https://fi.udec.cl/investigacion-impacto-e-inteligencia-artificial-centraron-jornada-de-publicaciones-cientificas-en-ingenieria-udec/",
    en: {
      title: "AI for writing, reviewing and finding research gaps",
      note: "With Ian Scott, at the Faculty's day on scientific publishing: AI tools for communicating results, spotting gaps in the literature and supporting editorial review.",
    },
    es: {
      title: "IA para escribir, revisar y encontrar brechas de investigación",
      note: "Junto a Ian Scott, en la jornada de publicaciones científicas de la Facultad: herramientas de IA para divulgar resultados, identificar nichos en la literatura y apoyar la revisión editorial.",
    },
  },
  {
    date: "2026-01-29",
    kind: "talk",
    outlet: "Facultad de Ingeniería UdeC",
    url: "https://fi.udec.cl/ingenieria-e-inteligencia-artificial-activan-el-dialogo-en-encuentro-alumni-udec-2026/",
    en: {
      title: "Data and AI, in front of the alumni",
      note: "At the UdeC Alumni Meeting 2026, with Karla Cerda, CDIA's director of operations: what data and AI change in processes, decisions and the industries that use them.",
    },
    es: {
      title: "Datos e IA, frente a los egresados",
      note: "En el Encuentro Alumni UdeC 2026, junto a Karla Cerda, directora de Operaciones del CDIA: qué cambian los datos y la IA en los procesos, las decisiones y las industrias que los usan.",
    },
  },
  {
    date: "2025-11-25",
    kind: "talk",
    outlet: "Noticias UdeC",
    url: "https://noticias.udec.cl/iii-encuentro-interprogramas-de-doctorados-en-linguistica-destaco-el-lenguaje-como-puente-interdisciplinario/",
    en: {
      title: "Real or artificial? AI and the way we communicate",
      note: "Opening keynote of the III Inter-programme Meeting of Doctorates in Linguistics: telling human text from machine text keeps getting harder, and that is the new normal.",
    },
    es: {
      title: "¿Real o artificial? El influjo de la IA en nuestras formas de comunicar",
      note: "Charla magistral inaugural del III Encuentro Interprogramas de Doctorados en Lingüística: distinguir un texto humano de uno generado por IA es cada vez más difícil, y esa es la nueva normalidad.",
    },
  },
  {
    date: "2025-11-25",
    kind: "talk",
    outlet: "Ingeniería Civil Industrial UdeC",
    url: "https://sites.google.com/view/marcelaparada/presentations",
    en: {
      title: "Talking economics, AI and politics",
      note: "A conversation for Industrial Engineering students, given jointly with economist Marcela Parada-Contzen.",
    },
    es: {
      title: "Conversando sobre economía, inteligencia artificial y política",
      note: "Una conversación para estudiantes de Ingeniería Civil Industrial, en conjunto con la economista Marcela Parada-Contzen.",
    },
  },
  {
    date: "2025-11-13",
    kind: "talk",
    outlet: "Facultad de Ingeniería UdeC",
    url: "https://fi.udec.cl/ingenieria-civil-industrial-fortalece-su-red-de-alumni-en-exitoso-dii-summit-2025/",
    en: {
      title: "What AI asks of Industrial Engineering",
      note: "At the DII Summit 2025, the department's alumni meeting: the challenges artificial intelligence now sets for its teaching and research.",
    },
    es: {
      title: "Lo que la IA le exige a la Ingeniería Industrial",
      note: "En el DII Summit 2025, el encuentro de egresados del Departamento: los desafíos que la inteligencia artificial le pone hoy a su docencia e investigación.",
    },
  },
  {
    date: "2025-08-20",
    kind: "workshop",
    outlet: "Facultad de Ingeniería UdeC",
    url: "https://fi.udec.cl/facultad-de-ingenieria-realizo-la-x-jornada-de-educacion-en-ingenieria/",
    en: {
      title: "AI in the classroom: uses and risks",
      note: "A workshop for faculty at the X Conference on Engineering Education.",
    },
    es: {
      title: "IA en el aula: usos y riesgos",
      note: "Taller para académicos en la X Jornada de Educación en Ingeniería.",
    },
  },
  {
    date: "2025-07-29",
    kind: "interview",
    outlet: "Noticias UdeC",
    url: "https://noticias.udec.cl/bots-y-polarizacion-academico-udec-analiza-impacto-de-la-desinformacion-digital-en-campanas-presidenciales/",
    en: {
      title: "Bots and polarisation in the presidential campaign",
      note: "How to recognise automated accounts, and why they never need to change anyone's mind: amplifying some narratives is enough to deepen the emotional rejection of those who think differently.",
    },
    es: {
      title: "Bots y polarización en la campaña presidencial",
      note: "Cómo reconocer cuentas automatizadas, y por qué no necesitan cambiarle la idea a nadie: basta con amplificar ciertas narrativas para profundizar el rechazo emocional hacia quien piensa distinto.",
    },
  },
  {
    date: "2025-06-13",
    kind: "panel",
    outlet: "Facultad de Ingeniería UdeC",
    url: "https://fi.udec.cl/repensar-los-sistemas-desde-la-complejidad-jeannette-von-wolfersdorff-presento-su-nuevo-libro-en-la-fi-udec/",
    en: {
      title: "Rethinking systems through complexity",
      note: "Panel at the launch of Jeannette von Wolfersdorff's book, with Marcela Angulo and Álvaro Ananías: how those ideas reach public policy, business and professional training.",
    },
    es: {
      title: "Repensar los sistemas desde la complejidad",
      note: "Panel en la presentación del libro de Jeannette von Wolfersdorff, junto a Marcela Angulo y Álvaro Ananías: cómo esas ideas llegan a la política pública, los negocios y la formación profesional.",
    },
  },
  {
    date: "2025-05-16",
    kind: "panel",
    outlet: "Noticias UdeC",
    url: "https://noticias.udec.cl/conversatorio-udec-abordo-los-desafios-y-oportunidades-del-uso-de-la-inteligencia-artificial-en-la-academia/",
    en: {
      title: "AI in academia",
      note: "Panellist on AI in teaching at the university-wide conversation organised by [genIA] UdeC, representing the Faculty of Engineering.",
    },
    es: {
      title: "La IA en la academia",
      note: "Panelista sobre IA en la docencia en el conversatorio organizado por [genIA] UdeC, en representación de la Facultad de Ingeniería.",
    },
  },
  {
    date: "2025-01-31",
    kind: "recognition",
    outlet: "Noticias UdeC",
    url: "https://noticias.udec.cl/ingenieria-udec-celebra-su-ix-encuentro-con-relevantes-hitos-y-proyeccion-de-futuro/",
    en: {
      title: "Teaching distinction, Faculty of Engineering",
      note: "Among the faculty recognised for their students' evaluations at the IX Engineering Meeting.",
    },
    es: {
      title: "Distinción docente, Facultad de Ingeniería",
      note: "Entre los académicos distinguidos por la evaluación de sus estudiantes en el IX Encuentro de Ingeniería.",
    },
  },
  {
    date: "2024-05-22",
    kind: "project",
    outlet: "Facultad de Ingeniería UdeC",
    url: "https://fi.udec.cl/cuanto-vale-tu-tiempo-con-la-plataforma-mo2-podras-saberlo/",
    en: {
      title: "mo2: how much is your time worth?",
      note: "With Sebastián Astroza and Juan Antonio Carrasco, a platform that records how people use their time and travel, and puts a value on it.",
    },
    es: {
      title: "mo2: ¿cuánto vale tu tiempo?",
      note: "Junto a Sebastián Astroza y Juan Antonio Carrasco, una plataforma que registra cómo las personas usan su tiempo y se desplazan, y le pone valor.",
    },
  },
];
