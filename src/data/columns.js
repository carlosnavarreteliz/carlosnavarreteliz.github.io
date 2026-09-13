// Opinion columns in El Mostrador — single source of truth for both the
// homepage excerpt and /op-ed/.
//
// Verified against https://www.elmostrador.cl/autor/carlos-navarrete/
// on 13 September 2026 (17 columns, March 2025 → August 2026).
//
// `title` is always the Spanish original, because the articles are in Spanish.
// `titleEn` is a faithful gloss shown on the English site; the link still leads
// to the Spanish piece, which is why rows carry an "ES" marker there.

export const THEMES = {
  ai: {
    en: "AI, work & inequality",
    es: "IA, trabajo y desigualdad",
  },
  democracy: {
    en: "Democracy & elections",
    es: "Democracia y elecciones",
  },
  education: {
    en: "Education & mobility",
    es: "Educación y movilidad",
  },
};

export const columns = [
  {
    date: "2026-08-17",
    theme: "ai",
    title: "Primero existe la inteligencia artificial, luego pienso",
    titleEn: "First artificial intelligence exists, then I think",
    lede:
      "Lo que debemos cuestionarnos es cómo formamos ese pensamiento crítico y cómo aprendemos a convivir con el error. Mientras midamos solo la perfección de la respuesta y pasemos por alto la forma de razonar, habremos condenado ese «pienso» que Descartes puso en el centro a viajar como vagón de cola.",
    ledeEn:
      "What we should be asking is how we build critical thinking, and how we learn to live with error. As long as we measure only the perfection of the answer and overlook the reasoning behind it, we will have condemned the «I think» Descartes placed at the centre to ride in the last carriage.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/08/17/primero-existe-la-inteligencia-artificial-luego-pienso/",
  },
  {
    date: "2026-07-17",
    theme: "ai",
    title: "El costo de dar las gracias",
    titleEn: "The cost of saying thank you",
    lede:
      "Por primera vez en la historia, millones de personas sostienen a diario conversaciones con un ente que habla como humano, pero no lo es. Ese espacio se está convirtiendo en el lugar donde practicamos, sin darnos cuenta, cómo tratamos a quien nos responde.",
    ledeEn:
      "For the first time in history, millions of people hold daily conversations with something that speaks like a human but is not one. That space is quietly becoming where we rehearse how we treat whoever answers us.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/07/17/el-costo-de-dar-las-gracias/",
  },
  {
    date: "2026-05-24",
    theme: "ai",
    title: "¿Serán las licencias de inteligencia artificial el nuevo impuesto al empleo?",
    titleEn: "Will AI licences become the new tax on employment?",
    lede:
      "La combinación de mayor costo de acceso, menor poder de negociación salarial y percepción de una brecha de productividad insalvable configura un terreno fértil para el descontento social y el auge de narrativas populistas.",
    ledeEn:
      "Higher access costs, weaker bargaining power over wages and the sense of an unbridgeable productivity gap together make fertile ground for social discontent and the rise of populist narratives.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/05/24/seran-las-licencias-de-inteligencia-artificial-el-nuevo-impuesto-al-empleo/",
  },
  {
    date: "2026-03-31",
    theme: "education",
    title: "Fin de la gratuidad para mayores de 30 años: un portazo a la clase media técnica",
    titleEn: "Ending free tuition for over-30s: a door slammed on the technical middle class",
    lede:
      "Un adulto de 30 años que estudia una carrera técnica no solo busca un título; está sacrificando tiempo de crianza o trabajo para mejorar su futuro en un sistema que hoy le cierra la puerta.",
    ledeEn:
      "A 30-year-old studying for a technical degree is not only after a credential; they are giving up time with their children or at work to improve their future, in a system that is now closing the door on them.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/03/31/fin-de-la-gratuidad-para-mayores-de-30-anos-un-portazo-a-la-clase-media-tecnica/",
  },
  {
    date: "2026-03-16",
    theme: "ai",
    title: "La rebelión de la humanidad contra las máquinas: ¿un futuro distópico?",
    titleEn: "Humanity's rebellion against the machines: a dystopian future?",
    lede:
      "El temor al reemplazo por la inteligencia artificial no es infundado; se percibe cotidianamente, especialmente en zonas alejadas del desarrollo tecnológico.",
    ledeEn:
      "The fear of being replaced by artificial intelligence is not unfounded; it is felt daily, especially far from the places where the technology is being built.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/03/16/la-rebelion-de-la-humanidad-contra-las-maquinas-un-futuro-distopico/",
  },
  {
    date: "2026-01-28",
    theme: "education",
    title: "El laberinto de la movilidad social y el rol de las universidades regionales",
    titleEn: "The maze of social mobility and the role of regional universities",
    lede:
      "El lugar de origen de un estudiante dicta el destino: mientras los estudiantes con mejores condiciones preexistentes cuentan con todas las ventajas estructurales, otros deben compensar con un desempeño excepcional las carencias de un sistema escolar desigual.",
    ledeEn:
      "Where a student comes from dictates where they end up: those who start with the best conditions enjoy every structural advantage, while the rest must offset an unequal school system with exceptional performance.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/01/28/el-laberinto-de-la-movilidad-social-y-el-rol-de-las-universidades-regionales/",
  },
  {
    date: "2026-01-13",
    theme: "education",
    title: "La silenciosa erosión de la educación pública",
    titleEn: "The quiet erosion of public education",
    lede:
      "Cifras más o cifras menos, siempre podemos contarnos la historia que deseemos. En medio de la disputa ideológica, los datos se utilizan con frecuencia para confirmar visiones de mundo preexistentes, más que para enfrentar los problemas estructurales que revelan.",
    ledeEn:
      "Give or take a figure, we can always tell ourselves the story we want. Inside an ideological dispute, data is used to confirm existing worldviews far more often than to confront the structural problems it reveals.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/01/13/la-silenciosa-erosion-de-la-educacion-publica/",
  },
  {
    date: "2026-01-02",
    theme: "ai",
    title: "Yo, humano",
    titleEn: "I, human",
    lede:
      "Si no actuamos ahora para anticipar y distribuir de manera equitativa sus costos y beneficios, la IA puede convertirse en un potente catalizador de descontento social. En ese vacío prosperarán discursos populistas anti-IA, que encontrarán en esta tecnología un enemigo ideal.",
    ledeEn:
      "If we do not act now to anticipate its costs and benefits and distribute them fairly, AI can become a powerful catalyst for social discontent. Anti-AI populist rhetoric will thrive in that vacuum, finding an ideal enemy in the technology.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/01/02/yo-humano/",
  },
  {
    date: "2025-12-11",
    theme: "democracy",
    title: "El destino de dirigir a Chile",
    titleEn: "The task of governing Chile",
    lede:
      "Gobernar Chile con una mirada regional no consiste solo en anunciar el fin de los delegados presidenciales o en prometer más infraestructura pública en regiones.",
    ledeEn:
      "Governing Chile with a regional eye is not just about announcing the end of presidential delegates or promising more public infrastructure outside the capital.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/12/11/el-destino-de-dirigir-a-chile/",
  },
  {
    date: "2025-12-03",
    theme: "ai",
    title: "Inteligencia artificial, desigualdad real: el costo social de un acceso desigual a la IA",
    titleEn: "Artificial intelligence, real inequality: the social cost of unequal access",
    lede:
      "Si no abordamos la discusión con ambición y políticas capaces de permear más allá de nichos empresariales y académicos, la expansión de la IA corre el riesgo de ser un amplificador de desigualdades.",
    ledeEn:
      "Unless we take up the debate with ambition and policies that reach beyond corporate and academic niches, the spread of AI risks becoming an amplifier of inequality.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/12/03/inteligencia-artificial-desigualdad-real-el-costo-social-de-un-acceso-desigual-a-la-ia/",
  },
  {
    date: "2025-11-18",
    theme: "democracy",
    title: "Elecciones: Chile es un pueblo al sur y al norte de Santiago",
    titleEn: "Elections: Chile is a country south and north of Santiago",
    lede:
      "La historia es clara en esto: los movimientos extremos no emergen porque la ciudadanía se vuelva súbitamente más radical, sino porque las élites centralistas dejan de dar respuestas.",
    ledeEn:
      "History is clear on this: extreme movements do not emerge because citizens suddenly turn radical, but because centralist elites stop providing answers.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/11/18/elecciones-chile-es-un-pueblo-al-sur-y-al-norte-de-santiago/",
  },
  {
    date: "2025-11-08",
    theme: "ai",
    title: "La indiferencia frente a la verdad en la era digital",
    titleEn: "Indifference to the truth in the digital age",
    lede:
      "Este fenómeno no nació con la inteligencia artificial ni con las redes sociales: primero fueron las teorías conspirativas; hoy es la aceptación pasiva de información sin reflexión ni contraste.",
    ledeEn:
      "This did not begin with artificial intelligence or social media: first came conspiracy theories; today it is the passive acceptance of information without reflection or cross-checking.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/11/08/la-indiferencia-frente-a-la-verdad-en-la-era-digital/",
  },
  {
    date: "2025-11-02",
    theme: "ai",
    title: "La inteligencia artificial y la destrucción de empleos en Chile",
    titleEn: "Artificial intelligence and the destruction of jobs in Chile",
    lede:
      "Tal vez el verdadero debate de esta elección no sea cuántos empleos se crean o se destruyen hoy, sino qué tipo de trabajos podrán generarse mañana.",
    ledeEn:
      "Perhaps the real debate in this election is not how many jobs are created or destroyed today, but what kind of work can be generated tomorrow.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/11/02/la-inteligencia-artificial-y-la-destruccion-de-empleos-en-chile/",
  },
  {
    date: "2025-10-28",
    theme: "democracy",
    title: "Regiones vs. Santiago: la segunda lectura de las presidenciales",
    titleEn: "Regions vs. Santiago: the second reading of the presidential race",
    lede:
      "Cuando conozcamos los resultados del 16 de noviembre, la conversación no será solo sobre quién gane, sino sobre dónde gana.",
    ledeEn:
      "When the results of 16 November come in, the conversation will not only be about who wins, but about where they win.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/10/28/regiones-vs-santiago-la-segunda-lectura-de-las-presidenciales/",
  },
  {
    date: "2025-10-18",
    theme: "democracy",
    title: "Cómo ganar una elección presidencial: divide y vencerás",
    titleEn: "How to win a presidential election: divide and conquer",
    lede:
      "Análisis sobre las estrategias de polarización y división electoral en las elecciones presidenciales contemporáneas.",
    ledeEn:
      "On the strategies of polarisation and electoral division at work in contemporary presidential races.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/10/18/como-ganar-una-eleccion-presidencial-divide-y-venceras/",
  },
  {
    date: "2025-08-02",
    theme: "democracy",
    title: "Primarias presidenciales: ¿para qué?",
    titleEn: "Presidential primaries: what for?",
    lede:
      "Reflexión sobre el rol y la efectividad de las primarias presidenciales en el sistema político chileno.",
    ledeEn:
      "On the role and the effectiveness of presidential primaries in the Chilean political system.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/08/02/primarias-presidenciales-para-que/",
  },
  {
    date: "2025-03-03",
    theme: "democracy",
    title: "El criptoescándalo y la supervivencia política de Javier Milei",
    titleEn: "The crypto scandal and Javier Milei's political survival",
    lede:
      "Análisis sobre las implicancias del escándalo de criptomonedas en la gestión política del presidente argentino.",
    ledeEn:
      "On what the cryptocurrency scandal implies for the Argentine president's political standing.",
    url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/03/03/el-criptoescandalo-y-la-supervivencia-politica-de-javier-milei/",
  },
];

const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
};

/** "2026-08-17" → "17 Aug 2026" / "17 Ago 2026". Parsed by hand to avoid the
 *  UTC-vs-local off-by-one that `new Date("2026-08-17")` introduces. */
export function formatDate(iso, language = "en") {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[language][m - 1]} ${y}`;
}

export function columnTitle(column, language) {
  return language === "es" ? column.title : column.titleEn;
}

export function columnLede(column, language) {
  return language === "es" ? column.lede : column.ledeEn;
}
