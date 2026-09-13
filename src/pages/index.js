import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AgentSwarm from "../components/AgentSwarm";
import {Seo} from "../components/Seo";
import {useLanguage} from "../helpers/useLanguage";
import {useReveal} from "../helpers/useReveal";
import {columns, THEMES, formatDate, columnTitle} from "../data/columns";
import {gallery} from "../data/gallery";
import {engagements} from "../data/industry";

const t = {
  en: {
    role: "Assistant Professor",
    place: "Faculty of Engineering · Universidad de Concepción",
    heroA: "Generative AI",
    heroB: "and the future of society",
    heroNote: "Every industrial revolution rearranged who works, who decides, and who is left behind. This one is already under way.",
    aside: "the last revolution was understood a century too late",
    bio: "Assistant Professor at the Faculty of Engineering, Universidad de Concepción, board member of its Center for Data and Artificial Intelligence (CDIA), and associate researcher at the Millennium Nucleus MEPOP.",
    email: "Write to me",
    scholar: "Google Scholar",

    ghostWord: "Revolution",
    ghostLeft: ["work", "inequality", "automation"],
    ghostRight: ["narratives", "agents", "public policy"],
    ghostLine: "Artificial intelligence is the industrial revolution of our time. My work is measuring what it is doing to the society living through it.",

    workLabel: "selected work",
    workA: "Things built",
    workB: "for whole populations",
    workIntro:
      "Participation platforms, national data observatories and applied AI, from the Chilean social outbreak to the French presidential election. Several were built for a moment and have since been retired; they are listed here as milestones, not as live products.",

    writingLabel: "el mostrador",
    writingA: "Writing for",
    writingB: "the public argument",
    writingIntro:
      "Seventeen opinion columns on artificial intelligence, work, democracy and education — the research, translated into the terms of a debate already under way.",
    latest: "most recent",
    allColumns: "All 17 columns",

    trajLabel: "2014 — today",
    trajA: "From data",
    trajB: "to artificial intelligence",

    methodLabel: "method",
    methodA: "An army of agents",
    methodB: "works the problem",
    methodIntro:
      "A question arrives and it does not get attacked in a straight line. It is decomposed and handed to dozens of autonomous agents running in parallel — reading, extracting, contrasting, disagreeing — each reporting back only what survives its own scrutiny. What returns is not an answer but a field of evidence, and the work is deciding what it means.",
    methodAside: "the same logic I study, turned on the studying",
    methodVerbs: ["read", "extract", "contrast", "disagree", "synthesise"],
    methodSwarm: {
      question: "a question",
      agents: "agents in parallel",
      evidence: "evidence",
      alt: "A question fanning out to a field of parallel autonomous agents, converging into evidence.",
    },

    linesLabel: "research lines",
    linesA: "The questions",
    linesB: "that occupy me",
    linesIntro:
      "Artificial intelligence is not one subject but a set of pressures on things that already mattered: work, education, public argument, and who gets to build. These are the four I am pushing on.",

    industryLabel: "industry & public sector",
    industryA: "Bringing AI",
    industryB: "into the room",
    industryIntro:
      "A good part of the work is not code but conversation: sitting down with executive teams at Chilean companies and public institutions to work out what generative AI can actually do for them, what it cannot, and what it would cost to find out. These sessions run through the Faculty of Engineering and the CDIA.",
    industryAside: "the useful question is never whether it works, but where it pays",

    galleryLabel: "archive",
    galleryA: "Some of it",
    galleryB: "in photographs",
    galleryNoteTitle: "The archive is still thin",
    galleryNote:
      "Ten years of launches, fieldwork, classrooms and conferences, and only a handful of pictures survived. If you have photographs from any of these projects, they are welcome here.",
    galleryNoteGo: "Send a photograph",

    researchLabel: "peer-reviewed",
    researchA: "Selected",
    researchB: "research",
    researchIntro:
      "How populations divide during elections, and how scientific and technological capabilities accumulate in places.",
    allResearch: "Full publication list",

    teachLabel: "universidad de concepción",
    teachA: "Three courses",
    teachB: "at the Faculty of Engineering",
    teachIntro:
      "Taught with the same bias as everything above: advanced methods pointed at concrete problems.",
    allTeaching: "Course details",

    ctaA: "Working on something",
    ctaB: "worth measuring?",
    ctaText:
      "Applied AI with industry or the public sector, research collaborations, or students looking for a thesis topic.",
    ctaGo: "cnavarretel@udec.cl",
    archived: "Archived",
    live: "Live",
  },
  es: {
    role: "Profesor Asistente",
    place: "Facultad de Ingeniería · Universidad de Concepción",
    heroA: "IA generativa",
    heroB: "y el futuro de la sociedad",
    heroNote: "Toda revolución industrial reordenó quién trabaja, quién decide y quién queda atrás. Esta ya está ocurriendo.",
    aside: "la revolución anterior se entendió un siglo tarde",
    bio: "Profesor Asistente de la Facultad de Ingeniería de la Universidad de Concepción, miembro del directorio de su Centro de Datos e Inteligencia Artificial (CDIA) e investigador adjunto del Núcleo Milenio MEPOP.",
    email: "Escríbeme",
    scholar: "Google Scholar",

    ghostWord: "Revolución",
    ghostLeft: ["trabajo", "desigualdad", "automatización"],
    ghostRight: ["narrativas", "agentes", "política pública"],
    ghostLine: "La inteligencia artificial es la revolución industrial de nuestro tiempo. Mi trabajo es medir qué le está haciendo a la sociedad que la vive.",

    workLabel: "trabajo seleccionado",
    workA: "Cosas construidas",
    workB: "para poblaciones enteras",
    workIntro:
      "Plataformas de participación, observatorios nacionales de datos e IA aplicada, del estallido social chileno a la elección presidencial francesa. Varias se construyeron para un momento y ya fueron dadas de baja; están aquí como hitos, no como productos vigentes.",

    writingLabel: "el mostrador",
    writingA: "Escribir para",
    writingB: "la discusión pública",
    writingIntro:
      "Diecisiete columnas de opinión sobre inteligencia artificial, trabajo, democracia y educación — la investigación, traducida a los términos de un debate que ya está ocurriendo.",
    latest: "más recientes",
    allColumns: "Las 17 columnas",

    trajLabel: "2014 — hoy",
    trajA: "De los datos",
    trajB: "a la inteligencia artificial",

    methodLabel: "método",
    methodA: "Un ejército de agentes",
    methodB: "trabaja el problema",
    methodIntro:
      "Llega una pregunta y no se ataca en línea recta. Se descompone y se reparte entre decenas de agentes autónomos que corren en paralelo — leyendo, extrayendo, contrastando, discrepando — y cada uno reporta solo lo que sobrevive a su propio escrutinio. Lo que vuelve no es una respuesta sino un campo de evidencia, y el trabajo es decidir qué significa.",
    methodAside: "la misma lógica que estudio, apuntada a estudiarla",
    methodVerbs: ["leen", "extraen", "contrastan", "discrepan", "sintetizan"],
    methodSwarm: {
      question: "una pregunta",
      agents: "agentes en paralelo",
      evidence: "evidencia",
      alt: "Una pregunta que se abre hacia un campo de agentes autónomos en paralelo y converge en evidencia.",
    },

    linesLabel: "líneas de investigación",
    linesA: "Las preguntas",
    linesB: "que me ocupan",
    linesIntro:
      "La inteligencia artificial no es un tema sino un conjunto de presiones sobre cosas que ya importaban: el trabajo, la educación, la discusión pública, y quién puede construir. Estas son las cuatro en las que empujo.",

    industryLabel: "industria y sector público",
    industryA: "Llevar la IA",
    industryB: "a la mesa",
    industryIntro:
      "Buena parte del trabajo no es código sino conversación: sentarse con equipos ejecutivos de empresas chilenas e instituciones públicas a definir qué puede hacer realmente la IA generativa por ellos, qué no, y cuánto costaría averiguarlo. Estas sesiones se canalizan por la Facultad de Ingeniería y el CDIA.",
    industryAside: "la pregunta útil nunca es si funciona, sino dónde paga",

    galleryLabel: "archivo",
    galleryA: "Algo de esto",
    galleryB: "en fotografías",
    galleryNoteTitle: "El archivo todavía es delgado",
    galleryNote:
      "Diez años de lanzamientos, terreno, salas de clases y congresos, y solo sobrevivió un puñado de fotos. Si tienes fotografías de alguno de estos proyectos, son bienvenidas aquí.",
    galleryNoteGo: "Enviar una fotografía",

    researchLabel: "revisión por pares",
    researchA: "Investigación",
    researchB: "seleccionada",
    researchIntro:
      "Cómo se dividen las poblaciones durante las elecciones, y cómo se acumulan capacidades científicas y tecnológicas en los territorios.",
    allResearch: "Lista completa de publicaciones",

    teachLabel: "universidad de concepción",
    teachA: "Tres cursos",
    teachB: "en la Facultad de Ingeniería",
    teachIntro:
      "Dictados con el mismo sesgo que todo lo anterior: métodos avanzados apuntados a problemas concretos.",
    allTeaching: "Detalle de los cursos",

    ctaA: "¿Trabajas en algo",
    ctaB: "que valga la pena medir?",
    ctaText:
      "IA aplicada con industria o sector público, colaboraciones de investigación, o estudiantes buscando tema de tesis.",
    ctaGo: "cnavarretel@udec.cl",
    archived: "Archivado",
    live: "En línea",
  },
};

// `url` is only set where the site is verifiably still up. Several of these
// domains have lapsed — constitutin.cl now redirects to a betting site — so the
// rest are presented as milestones with no link at all.
const work = {
  en: [
    {
      n: "01",
      years: "2017 — 2021",
      title: "DataChile",
      meta: "National open-data observatory",
      text: "Core contributor to Chile's flagship open-data observatory: economic, demographic and complexity profiles for every commune in the country, explored by millions of people.",
      state: "archived",
      fill: "",
    },
    {
      n: "02",
      years: "2022",
      title: "MonProgramme 2022",
      meta: "French presidential election",
      text: "Citizens assembled their own government programme from more than a hundred candidate proposals. The participation data became the Nature Human Behaviour paper on political divisiveness.",
      state: "archived",
      fill: "mile--block",
    },
    {
      n: "03",
      years: "2019",
      title: "Chilecracia",
      meta: "Chilean social outbreak",
      text: "A pairwise-comparison platform that measured citizen priorities during the 2019 outbreak — disagreement quantified while it was still happening.",
      state: "archived",
      fill: "",
    },
    {
      n: "04",
      years: "2021",
      title: "Asuprioriza",
      meta: "Asunción, Paraguay",
      text: "Built with ARCA Latam, ABC Digital and the Center for Collective Learning to find where residents of Asunción actually agree.",
      state: "archived",
      fill: "mile--mist",
    },
    {
      n: "05",
      years: "2021",
      title: "Constitutín",
      meta: "Chilean constitutional process",
      text: "A playful tool that taught more than twenty constitutional topics to the public during Chile's constitutional process.",
      state: "archived",
      fill: "",
    },
    {
      n: "06",
      years: "ongoing",
      title: "AI World",
      meta: "Global AI capability mapping",
      text: "Mapping the world's artificial-intelligence capabilities: who can build what, and where.",
      state: "live",
      url: "https://aiworld.eu",
      host: "aiworld.eu",
      fill: "mile--mist",
    },
  ],
  es: [
    {
      n: "01",
      years: "2017 — 2021",
      title: "DataChile",
      meta: "Observatorio nacional de datos abiertos",
      text: "Colaborador central del observatorio de datos abiertos insignia de Chile: perfiles económicos, demográficos y de complejidad para cada comuna del país, explorados por millones de personas.",
      state: "archived",
      fill: "",
    },
    {
      n: "02",
      years: "2022",
      title: "MonProgramme 2022",
      meta: "Elección presidencial francesa",
      text: "Los ciudadanos armaron su propio programa de gobierno con más de cien propuestas de los candidatos. Los datos de participación se convirtieron en el paper de Nature Human Behaviour sobre divisividad política.",
      state: "archived",
      fill: "mile--block",
    },
    {
      n: "03",
      years: "2019",
      title: "Chilecracia",
      meta: "Estallido social chileno",
      text: "Plataforma de comparaciones pareadas que midió las prioridades ciudadanas durante el estallido de 2019 — el desacuerdo cuantificado mientras todavía ocurría.",
      state: "archived",
      fill: "",
    },
    {
      n: "04",
      years: "2021",
      title: "Asuprioriza",
      meta: "Asunción, Paraguay",
      text: "Construida con ARCA Latam, ABC Digital y el Center for Collective Learning para encontrar en qué están realmente de acuerdo los habitantes de Asunción.",
      state: "archived",
      fill: "mile--mist",
    },
    {
      n: "05",
      years: "2021",
      title: "Constitutín",
      meta: "Proceso constituyente chileno",
      text: "Una herramienta lúdica que enseñó más de veinte temas constitucionales al público durante el proceso constituyente chileno.",
      state: "archived",
      fill: "",
    },
    {
      n: "06",
      years: "vigente",
      title: "AI World",
      meta: "Mapa global de capacidades en IA",
      text: "Mapeo de las capacidades mundiales en inteligencia artificial: quién puede construir qué, y dónde.",
      state: "live",
      url: "https://aiworld.eu",
      host: "aiworld.eu",
      fill: "mile--mist",
    },
  ],
};

// The four lines his current work runs along. Framing only — the specific
// thesis topics behind them are not public.
const researchLines = {
  en: [
    {
      n: "01",
      title: "Work and the labour market",
      text: "What generative AI destroys, what it creates, and whether that difference shows up in Chilean data before it shows up in Chilean politics.",
      fill: "",
    },
    {
      n: "02",
      title: "Narratives and the history of fear",
      text: "Every wave of automation produced the same argument. Reading the debates of the Industrial Revolution alongside today's is how you tell what is genuinely new from what only feels new.",
      fill: "mile--mist",
    },
    {
      n: "03",
      title: "Machines that write and judge",
      text: "What models prefer when they rank, decide and moralise — and how well any of us can still tell their writing from our own.",
      fill: "mile--block",
    },
    {
      n: "04",
      title: "Agents and democratised capability",
      text: "Multi-agent systems and small models putting advanced tools within reach of the firms and institutions that were never going to buy them.",
      fill: "mile--mist",
    },
  ],
  es: [
    {
      n: "01",
      title: "Trabajo y mercado laboral",
      text: "Qué destruye la IA generativa, qué crea, y si esa diferencia aparece en los datos chilenos antes que en la política chilena.",
      fill: "",
    },
    {
      n: "02",
      title: "Narrativas y la historia del miedo",
      text: "Cada ola de automatización produjo el mismo argumento. Leer los debates de la Revolución Industrial junto a los de hoy es la forma de distinguir lo que es realmente nuevo de lo que solo lo parece.",
      fill: "mile--mist",
    },
    {
      n: "03",
      title: "Máquinas que escriben y juzgan",
      text: "Qué prefieren los modelos cuando rankean, deciden y moralizan — y cuánto distinguimos todavía su escritura de la nuestra.",
      fill: "mile--block",
    },
    {
      n: "04",
      title: "Agentes y capacidades democratizadas",
      text: "Sistemas multiagente y modelos pequeños que ponen herramientas avanzadas al alcance de empresas e instituciones que nunca las iban a comprar.",
      fill: "mile--mist",
    },
  ],
};

const trajectory = {
  en: [
    {year: "2016", title: "Industrial Engineering, UdeC", text: "A thesis mapping the global cluster space from 1988 to 2014 — the first version of a question he is still asking.", fill: ""},
    {year: "2019", title: "DataChile · Chilecracia", text: "Data products at national scale, and a platform measuring citizen priorities live during the social outbreak.", fill: "step--mist"},
    {year: "2022", title: "MonProgramme · Research Policy", text: "A participation platform for the French election, and the science–technology cross-space study — now his most-cited paper.", fill: ""},
    {year: "2023", title: "Ph.D. Toulouse · Nature", text: "Doctorate in Computer Science. The population-scale study of political divisiveness in France and Brazil appears in Nature Human Behaviour.", fill: "step--block"},
    {year: "2024", title: "Faculty of Engineering, UdeC", text: "Joins Universidad de Concepción as Assistant Professor, teaching Data Visualization and Multivariate Statistics.", fill: "step--mist"},
    {year: "2025", title: "Generative AI · MEPOP", text: "Designs and launches the Generative Artificial Intelligence course. Joins the Millennium Nucleus MEPOP.", fill: ""},
    {year: "2026", title: "Board, CDIA", text: "Joins the board of the Center for Data and Artificial Intelligence at the Faculty of Engineering.", fill: ""},
    {year: "2026", title: "A public voice", text: "Seventeen columns in El Mostrador on AI, work, education and democracy — research argued where it matters.", fill: "step--mist"},
  ],
  es: [
    {year: "2016", title: "Ingeniería Civil Industrial, UdeC", text: "Una tesis sobre la evolución del cluster space mundial entre 1988 y 2014 — la primera versión de una pregunta que todavía se hace.", fill: ""},
    {year: "2019", title: "DataChile · Chilecracia", text: "Productos de datos a escala nacional, y una plataforma que midió prioridades ciudadanas en vivo durante el estallido social.", fill: "step--mist"},
    {year: "2022", title: "MonProgramme · Research Policy", text: "Una plataforma de participación para la elección francesa, y el estudio del cross-space ciencia–tecnología — hoy su paper más citado.", fill: ""},
    {year: "2023", title: "Doctorado Toulouse · Nature", text: "Doctorado en Informática. El estudio a escala poblacional sobre divisividad política en Francia y Brasil aparece en Nature Human Behaviour.", fill: "step--block"},
    {year: "2024", title: "Facultad de Ingeniería, UdeC", text: "Se integra a la Universidad de Concepción como Profesor Asistente, dictando Visualización de Datos y Estadística Multivariada.", fill: "step--mist"},
    {year: "2025", title: "IA Generativa · MEPOP", text: "Diseña y lanza el curso de Inteligencia Artificial Generativa. Se suma al Núcleo Milenio MEPOP.", fill: ""},
    {year: "2026", title: "Directorio CDIA", text: "Se integra al directorio del Centro de Datos e Inteligencia Artificial de la Facultad de Ingeniería.", fill: ""},
    {year: "2026", title: "Voz pública", text: "Diecisiete columnas en El Mostrador sobre IA, trabajo, educación y democracia — la investigación discutida donde importa.", fill: "step--mist"},
  ],
};

const selectedPubs = [
  {
    title: "Understanding political divisiveness using online participation data from the 2022 French and Brazilian presidential elections",
    venue: "Nature Human Behaviour",
    year: "2023",
    url: "https://www.nature.com/articles/s41562-023-01755-x",
  },
  {
    title: "The scientific and technological cross-space: is technological diversification driven by scientific endogenous capacity?",
    venue: "Research Policy",
    year: "2022",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0048733320300950",
  },
  {
    title: "'It's the economy, stupid': mapping electoral divisiveness in Chile from 1989 to 2021",
    venue: "Regional Studies, Regional Science",
    year: "2025",
    url: "https://www.tandfonline.com/doi/full/10.1080/21681376.2025.2518158",
  },
];

const teaching = {
  en: [
    {idx: "01", title: "Generative Artificial Intelligence", when: "Spring 2025, 2026", text: "Foundations and applications of generative models, up to what it takes to put one in front of real users without it falling over.", topics: ["transformers", "fine-tuning", "retrieval", "evaluation"]},
    {idx: "02", title: "Data Visualization", when: "Fall 2024 — 2026", text: "Visual communication from first principles, up to the single chart that has to change a decision.", topics: ["encoding", "perception", "interaction", "dashboards"]},
    {idx: "03", title: "Multivariate Statistical Analysis", when: "Fall 2025, 2026", text: "Regression, PCA and clustering, applied end to end on real industrial-engineering data rather than clean textbook sets.", topics: ["regression", "PCA", "clustering", "inference"]},
  ],
  es: [
    {idx: "01", title: "Inteligencia Artificial Generativa", when: "Primavera 2025, 2026", text: "Fundamentos y aplicaciones de modelos generativos, hasta lo que cuesta poner uno frente a usuarios reales sin que se caiga.", topics: ["transformers", "fine-tuning", "retrieval", "evaluación"]},
    {idx: "02", title: "Visualización de Datos", when: "Otoño 2024 — 2026", text: "Comunicación visual desde los principios, hasta el único gráfico que tiene que cambiar una decisión.", topics: ["codificación", "percepción", "interacción", "dashboards"]},
    {idx: "03", title: "Análisis Estadístico Multivariado", when: "Otoño 2025, 2026", text: "Regresión, PCA y clustering, aplicados de principio a fin sobre datos reales de ingeniería industrial y no sobre conjuntos limpios de manual.", topics: ["regresión", "PCA", "clustering", "inferencia"]},
  ],
};

function Head2({label, a, b, center = true, light = false}) {
  return (
    <div style={{textAlign: center ? "center" : "left", marginBottom: "2.5rem"}}>
      <span className={light ? "slash slash--light" : "slash"}>{label}</span>
      <h2 className="t-head" style={{marginTop: "1.1rem"}}>
        {a}
        <span className="t-head__b">{b}</span>
      </h2>
    </div>
  );
}

function IndexPage() {
  const [language, setLanguage] = useLanguage();
  useReveal();
  const c = t[language];
  const latest = columns.slice(0, 5);

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />

      {/* ── Hero: two rounded panels, as in the reference ─────────────────── */}
      <header className="wrap" style={{paddingTop: "clamp(1rem, 2vw, 1.75rem)"}}>
        <div className="hero">
          <div className="hero__panel">
            <div className="hero__idcard">
              <img
                className="hero__thumb"
                src="/carlos-navarrete.jpg"
                alt=""
                width="120"
                height="120"
                loading="eager"
              />
              <div>
                <div className="t-sub" style={{letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.95rem"}}>
                  Carlos Navarrete
                </div>
                <div className="t-accent" style={{fontSize: "0.95rem", color: "#7e97ad"}}>
                  {c.role}
                </div>
              </div>
            </div>

            <div style={{margin: "auto 0", paddingBlock: "clamp(2.5rem, 6vw, 4rem)", textAlign: "center"}}>
              <h1 className="t-name">
                {c.heroA}
                <br />
                {c.heroB}
              </h1>
              <p className="t-small" style={{marginTop: "1.1rem", maxWidth: "42ch", marginInline: "auto"}}>
                {c.heroNote}
              </p>
              <p className="t-accent" style={{marginTop: "1.6rem"}}>
                / {c.aside} /
              </p>
            </div>

            <div style={{display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center"}}>
              <a href="mailto:cnavarretel@udec.cl" className="btn">
                {c.email} <span className="arrow">→</span>
              </a>
              <a
                href="https://scholar.google.com/citations?user=JqTxoC0AAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost"
              >
                {c.scholar} ↗
              </a>
            </div>
          </div>

          <div className="hero__figure">
            <img src="/carlos-navarrete.jpg" alt="Carlos Navarrete" width="1200" height="1200" loading="eager" />
            <div className="hero__figlinks">
              <a href="#lines" className="hero__figlink">{language === "es" ? "Investigación" : "Research"}</a>
              <a href="#method" className="hero__figlink">{language === "es" ? "Método" : "Method"}</a>
              <a href="#work" className="hero__figlink">{language === "es" ? "Proyectos" : "Work"}</a>
              <a href="#writing" className="hero__figlink">{language === "es" ? "Columnas" : "Writing"}</a>
              <a href="#archive" className="hero__figlink">{language === "es" ? "Archivo" : "Archive"}</a>
              <a href="/research/" className="hero__figlink">{language === "es" ? "Investigación" : "Research"}</a>
              <a href="/courses/" className="hero__figlink">{language === "es" ? "Docencia" : "Teaching"}</a>
            </div>
            <div className="hero__figsocial">
              <a href="https://scholar.google.com/citations?user=JqTxoC0AAAAJ&hl=en" target="_blank" rel="noreferrer" className="hero__orb" aria-label="Google Scholar">GS</a>
              <a href="https://github.com/cnavarreteliz" target="_blank" rel="noreferrer" className="hero__orb" aria-label="GitHub">GH</a>
              <a href="https://www.linkedin.com/in/cnavarreteliz/" target="_blank" rel="noreferrer" className="hero__orb" aria-label="LinkedIn">IN</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ── Ghost word band ────────────────────────────────────────────── */}
        <section className="wrap ghost">
          <span className="ghost__word" aria-hidden="true">{c.ghostWord}</span>
          <div className="ghost__stack">
            <p className="t-head t-head--tight" style={{fontSize: "clamp(1.25rem, 2.6vw, 1.9rem)"}}>
              {c.ghostLine}
            </p>
            <p className="t-body" style={{maxWidth: "62ch", marginInline: "auto"}}>
              {c.bio}
            </p>
            <div className="tagrow" style={{justifyContent: "center"}}>
              {[...c.ghostLeft, ...c.ghostRight].map((w) => <span key={w}>{w}</span>)}
            </div>
          </div>
        </section>

        {/* ── Work milestones ────────────────────────────────────────────── */}
        <section id="work" className="section band-soft" style={{scrollMarginTop: "5rem"}}>
          <div className="wrap">
            <div className="reveal">
              <Head2 label={c.workLabel} a={c.workA} b={c.workB} />
              <p className="t-body" style={{maxWidth: "64ch", margin: "0 auto 2.75rem", textAlign: "center"}}>
                {c.workIntro}
              </p>
            </div>

            <div className="miles reveal">
              {work[language].map((p) => {
                const inner = (
                  <>
                    <div className="mile__num">{p.n}</div>
                    <div className="mile__year">{p.years}</div>
                    <h3 className="mile__title">{p.title}</h3>
                    <div className="mile__meta">{p.meta}</div>
                    <p className="mile__text">{p.text}</p>
                    {p.url ? (
                      <span className="mile__foot">
                        {p.host} <span className="arrow">↗</span>
                      </span>
                    ) : (
                      <span className="mile__state">{c.archived}</span>
                    )}
                  </>
                );

                return p.url ? (
                  <a
                    key={p.title}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`mile ${p.fill}`.trim()}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={p.title} className={`mile ${p.fill}`.trim()}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Writing ────────────────────────────────────────────────────── */}
        <section id="writing" className="section" style={{scrollMarginTop: "5rem"}}>
          <div className="wrap wrap--narrow">
            <div className="reveal">
              <Head2 label={c.writingLabel} a={c.writingA} b={c.writingB} />
              <p className="t-body" style={{maxWidth: "62ch", margin: "0 auto 2.5rem", textAlign: "center"}}>
                {c.writingIntro}
              </p>
            </div>

            <div className="reveal">
              <p className="t-micro" style={{marginBottom: "0.6rem"}}>{c.latest}</p>
              <div className="rows">
                {latest.map((col) => (
                  <a key={col.url} href={col.url} target="_blank" rel="noreferrer" className="row">
                    <span className="row__date">{formatDate(col.date, language)}</span>
                    <span className="row__title">{columnTitle(col, language)}</span>
                    <span className="row__meta">
                      {THEMES[col.theme][language]} <span className="row__go">↗</span>
                    </span>
                  </a>
                ))}
              </div>
              <div style={{marginTop: "2rem", textAlign: "center"}}>
                <a href="/op-ed/" className="btn btn--ghost">
                  {c.allColumns} <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trajectory milestones ──────────────────────────────────────── */}
        <section id="trajectory" className="section band-sink" style={{scrollMarginTop: "4rem"}}>
          <div className="wrap">
            <div className="reveal">
              <Head2 label={c.trajLabel} a={c.trajA} b={c.trajB} />
            </div>
            <div className="track reveal">
              {trajectory[language].map((s, i) => (
                <div className={`step ${s.fill}`.trim()} key={s.year + s.title}>
                  <span className="step__ghost" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="step__year">{s.year}</div>
                  <h3 className="step__title">{s.title}</h3>
                  <p className="step__text">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Research lines ─────────────────────────────────────────────── */}
        <section id="lines" className="section band-soft" style={{scrollMarginTop: "5rem"}}>
          <div className="wrap">
            <div className="reveal">
              <Head2 label={c.linesLabel} a={c.linesA} b={c.linesB} />
              <p className="t-body" style={{maxWidth: "64ch", margin: "0 auto 2.75rem", textAlign: "center"}}>
                {c.linesIntro}
              </p>
            </div>

            <div
              className="miles reveal"
              style={{gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))"}}
            >
              {researchLines[language].map((line) => (
                <div className={`mile ${line.fill}`.trim()} key={line.n}>
                  <div className="mile__num">{line.n}</div>
                  <h3 className="mile__title">{line.title}</h3>
                  <p className="mile__text" style={{marginTop: "0.5rem", marginBottom: 0}}>
                    {line.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Method: the agent swarm ────────────────────────────────────── */}
        <section id="method" className="section band-agents" style={{scrollMarginTop: "4rem"}}>
          <div className="wrap">
            <div className="reveal" style={{textAlign: "center"}}>
              <span className="slash slash--light">{c.methodLabel}</span>
              <h2 className="t-head" style={{marginTop: "1.1rem"}}>
                {c.methodA}
                <span className="t-head__b">{c.methodB}</span>
              </h2>
              <p
                className="t-body"
                style={{maxWidth: "64ch", margin: "1.8rem auto 0", color: "#c2d2e2"}}
              >
                {c.methodIntro}
              </p>
            </div>

            <div className="reveal">
              <AgentSwarm labels={c.methodSwarm} />
              <div className="swarm-verbs">
                {c.methodVerbs.map((v) => (
                  <span key={v}>{v}</span>
                ))}
              </div>
            </div>

            <p
              className="t-accent reveal"
              style={{marginTop: "2rem", textAlign: "center", color: "#6fa8cf"}}
            >
              / {c.methodAside} /
            </p>
          </div>
        </section>

        {/* ── Industry conversations ─────────────────────────────────────── */}
        <section id="industry" className="section" style={{scrollMarginTop: "5rem"}}>
          <div className="wrap wrap--narrow">
            <div className="reveal">
              <Head2 label={c.industryLabel} a={c.industryA} b={c.industryB} />
              <p className="t-body" style={{maxWidth: "64ch", margin: "0 auto", textAlign: "center"}}>
                {c.industryIntro}
              </p>
              <p className="t-accent" style={{marginTop: "1.4rem", textAlign: "center"}}>
                / {c.industryAside} /
              </p>
            </div>

            {/* Renders only once real, cleared engagements exist — see
                src/data/industry.js. */}
            {engagements.length > 0 && (
              <div className="engagements reveal" style={{marginTop: "2.75rem"}}>
                {engagements.map((e) => (
                  <div className="engagement" key={e.org + e.year}>
                    <div className="t-micro" style={{marginBottom: "0.7rem"}}>{e.year}</div>
                    <div className="engagement__org">{e.org}</div>
                    <div className="t-micro" style={{marginBottom: "0.7rem"}}>
                      {e.sector[language]}
                    </div>
                    <p className="t-small">{e[language].what}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Photographic archive ───────────────────────────────────────── */}
        <section id="archive" className="section band-sink" style={{scrollMarginTop: "4rem"}}>
          <div className="wrap">
            <div className="reveal">
              <Head2 label={c.galleryLabel} a={c.galleryA} b={c.galleryB} />
            </div>

            <div className="gallery reveal">
              {gallery.map((shot) => (
                <figure
                  className={`shot${shot.span === "wide" ? " shot--wide" : ""}`}
                  key={shot.src}
                >
                  <img src={shot.src} alt={shot[language].caption} loading="lazy" />
                  <figcaption className="shot__cap">
                    <div className="shot__year">{shot.year}</div>
                    <div className="shot__text">{shot[language].caption}</div>
                    <div className="shot__place">{shot[language].place}</div>
                  </figcaption>
                </figure>
              ))}

              <div className="shot-note">
                <h3 className="mile__title">{c.galleryNoteTitle}</h3>
                <p className="t-small" style={{marginBottom: "1.2rem"}}>{c.galleryNote}</p>
                <a
                  href="mailto:cnavarretel@udec.cl"
                  className="mile__foot"
                  style={{marginTop: 0}}
                >
                  {c.galleryNoteGo} <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Research ───────────────────────────────────────────────────── */}
        <section className="section">
          <div className="wrap wrap--narrow">
            <div className="reveal">
              <Head2 label={c.researchLabel} a={c.researchA} b={c.researchB} />
              <p className="t-body" style={{maxWidth: "60ch", margin: "0 auto 2.5rem", textAlign: "center"}}>
                {c.researchIntro}
              </p>
            </div>
            <div className="rows reveal">
              {selectedPubs.map((p) => (
                <a key={p.url} href={p.url} target="_blank" rel="noreferrer" className="row row--paper">
                  <span className="row__date">{p.year}</span>
                  <span className="row__title">{p.title}</span>
                  <span className="row__meta">
                    {p.venue} <span className="row__go">↗</span>
                  </span>
                </a>
              ))}
            </div>
            <div style={{marginTop: "2rem", textAlign: "center"}} className="reveal">
              <a href="/research/" className="btn btn--ghost">
                {c.allResearch} <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Teaching: open rows, no wrapper cards ──────────────────────── */}
        <section className="section band-soft">
          <div className="wrap wrap--narrow">
            <div className="reveal">
              <Head2 label={c.teachLabel} a={c.teachA} b={c.teachB} />
              <p className="t-body" style={{maxWidth: "58ch", margin: "0 auto 1.5rem", textAlign: "center"}}>
                {c.teachIntro}
              </p>
            </div>

            <div className="reveal">
              {teaching[language].map((course) => (
                <article className="course" key={course.idx}>
                  <div>
                    <div className="course__idx">{course.idx}</div>
                    <div className="t-micro" style={{marginTop: "0.5rem"}}>{course.when}</div>
                  </div>
                  <div>
                    <h3 className="course__title">{course.title}</h3>
                    <p className="t-body">{course.text}</p>
                    <div className="topics">
                      {course.topics.map((x) => <span key={x}>{x}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div style={{marginTop: "2.5rem", textAlign: "center"}} className="reveal">
              <a href="/courses/" className="btn btn--ghost">
                {c.allTeaching} <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Contact ────────────────────────────────────────────────────── */}
        <section className="section" style={{paddingBottom: "clamp(2rem, 5vw, 4rem)"}}>
          <div className="wrap">
            <div
              className="card card--mist reveal"
              style={{
                padding: "clamp(2.25rem, 5vw, 4rem)",
                textAlign: "center",
                borderRadius: "22px",
              }}
            >
              <h2 className="t-head t-head--tight">
                {c.ctaA}
                <span style={{display: "block"}}>{c.ctaB}</span>
              </h2>
              <p className="t-body" style={{maxWidth: "50ch", margin: "1.25rem auto 1.9rem"}}>
                {c.ctaText}
              </p>
              <a href="mailto:cnavarretel@udec.cl" className="btn">
                {c.ctaGo} <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </>
  );
}

export default IndexPage;

export const Head = () => <Seo pathname="/" includePerson />;
