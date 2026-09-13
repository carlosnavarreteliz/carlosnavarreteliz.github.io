import React from "react";
import Navbar from "../components/Navbar";
import {SocialMedia} from "../components/SocialMedia";
import {Seo} from "../components/Seo";
import {useLanguage} from "../helpers/useLanguage";

const translations = {
  en: {
    eyebrow: "Faculty of Engineering, Universidad de Concepción · Board Member, CDIA",
    name: "Carlos Navarrete",
    title: "Applied artificial intelligence, at national scale.",
    lede: "Professor of Engineering at Universidad de Concepción and board member of its Center for Data and Artificial Intelligence (CDIA). He builds generative-AI systems for industry and the public sector, ships data products used by millions, and studies how societies divide — and how they can agree.",
    contact: "Contact",
    scholar: "Google Scholar",
    credentials: [
      {value: "Ph.D., 2023", label: "Computer Science · Université de Toulouse"},
      {value: "Professor, UdeC", label: "Faculty of Engineering · since 2024"},
      {value: "Board, CDIA", label: "Data & AI · since 2026"},
      {value: "Nature Hum. Behav.", label: "flagship study · 2023"}
    ],
    projectsIndex: "01 · AI & data in production",
    projectsTitle: "Systems people actually use",
    projectsIntro: "A decade building participation platforms, national data observatories and applied AI — from the Chilean social outbreak to the French presidential election. Papers matter less here than products that work at population scale.",
    voiceIndex: "02 · Public voice",
    voiceTitle: "Writing in El Mostrador",
    voiceIntro: "15+ opinion columns on AI, employment, democracy and education — the research, translated for public debate. Organized by the questions readers ask most.",
    trajectoryIndex: "03 · Trajectory",
    trajectoryTitle: "A decade from data to AI",
    trajectoryNote: "Photographic archive in progress — portrait above, historical images to follow. If you have photos from any of these projects, they are welcome here.",
    researchIndex: "04 · Research, briefly",
    researchTitle: "Selected studies",
    researchIntro: "The full publication list lives on the research page and Google Scholar. A short selection, for reference:",
    teachingIndex: "05 · Teaching",
    contactLabel: "cnavarretel@udec.cl",
    caption: "Dr. Eng. Carlos Navarrete — Faculty of Engineering, Universidad de Concepción.",
    viewAllWriting: "All columns",
    viewAllResearch: "Full research page",
    viewTeaching: "Teaching page",
  },
  es: {
    eyebrow: "Facultad de Ingeniería, Universidad de Concepción · Directorio CDIA",
    name: "Carlos Navarrete",
    title: "Inteligencia artificial aplicada, a escala nacional.",
    lede: "Académico de Ingeniería en la Universidad de Concepción y miembro del Directorio de su Centro de Datos e Inteligencia Artificial (CDIA). Construye sistemas de IA generativa para industria y sector público, ha creado productos de datos usados por millones y estudia cómo las sociedades se dividen — y cómo pueden ponerse de acuerdo.",
    contact: "Contacto",
    scholar: "Google Scholar",
    credentials: [
      {value: "Doctorado, 2023", label: "Informática · Université de Toulouse"},
      {value: "Profesor, UdeC", label: "Facultad de Ingeniería · desde 2024"},
      {value: "Directorio, CDIA", label: "Datos e IA · desde 2026"},
      {value: "Nature Hum. Behav.", label: "estudio insignia · 2023"}
    ],
    projectsIndex: "01 · IA y datos en producción",
    projectsTitle: "Sistemas que la gente realmente usa",
    projectsIntro: "Una década construyendo plataformas de participación, observatorios nacionales de datos e IA aplicada — del estallido social chileno a la elección presidencial francesa. Aquí importan menos los papers que los productos que funcionan a escala poblacional.",
    voiceIndex: "02 · Voz pública",
    voiceTitle: "Columnas en El Mostrador",
    voiceIntro: "Más de 15 columnas sobre IA, empleo, democracia y educación — la investigación, traducida al debate público. Organizadas por las preguntas que más hacen los lectores.",
    trajectoryIndex: "03 · Trayectoria",
    trajectoryTitle: "Una década de los datos a la IA",
    trajectoryNote: "Archivo fotográfico en construcción — retrato actual arriba, imágenes históricas por venir. Si tienes fotos de alguno de estos proyectos, son bienvenidas.",
    researchIndex: "04 · Investigación, en breve",
    researchTitle: "Estudios seleccionados",
    researchIntro: "La lista completa está en la página de investigación y en Google Scholar. Una breve selección, como referencia:",
    teachingIndex: "05 · Docencia",
    contactLabel: "cnavarretel@udec.cl",
    caption: "Dr. Carlos Navarrete — Facultad de Ingeniería, Universidad de Concepción.",
    viewAllWriting: "Todas las columnas",
    viewAllResearch: "Página de investigación",
    viewTeaching: "Página de docencia",
  }
};

const projectsData = {
  en: [
    {
      years: "2025 —",
      title: "Applied Generative AI",
      org: "UdeC · CDIA — industry & public sector",
      text: "Designs and teaches the Generative AI course and leads applied LLM systems with industry and public-sector partners through the CDIA board.",
      link: "/courses/",
      linkLabel: "Teaching"
    },
    {
      years: "2017 —",
      title: "DataChile",
      org: "National data observatory · millions of users",
      text: "Core contributor to Chile's flagship open-data observatory — economic complexity profiles for every commune, explored by millions.",
      link: "https://datachile.io",
      linkLabel: "datachile.io"
    },
    {
      years: "2018 —",
      title: "Data La Tercera",
      org: "Media data platform · national reach",
      text: "Data journalism infrastructure with one of Chile's largest newspapers — complex datasets made legible for a mass audience.",
      link: "https://data.latercera.com",
      linkLabel: "data.latercera.com"
    },
    {
      years: "2022",
      title: "MonProgramme 2022",
      org: "France · presidential election participation",
      text: "Digital participation platform for the French presidential election: citizens build their own government program from 100+ candidate proposals.",
      link: "https://monprogramme2022.org/",
      linkLabel: "monprogramme2022.org"
    },
    {
      years: "2019",
      title: "Chilecracia",
      org: "Chile · social outbreak",
      text: "Pairwise-comparison platform measuring citizen priorities during the Chilean social outbreak — disagreement, quantified.",
      link: "https://chilecracia.org/",
      linkLabel: "chilecracia.org"
    },
    {
      years: "2021",
      title: "Asuprioriza",
      org: "Paraguay · Asunción citizen agreements",
      text: "With ARCA Latam, ABC Digital and the Center for Collective Learning — measuring agreements among Asunción residents.",
      link: "https://asuprioriza.org/",
      linkLabel: "asuprioriza.org"
    },
    {
      years: "2021",
      title: "Constitutín",
      org: "Chile · constitutional process",
      text: "Playful digital tool teaching 20+ constitutional topics during Chile's constitutional process.",
      link: "https://constitutin.cl/",
      linkLabel: "constitutin.cl"
    },
    {
      years: "—",
      title: "AI World",
      org: "International · AI capabilities mapping",
      text: "Mapping global AI capabilities — who can build what, where.",
      link: "https://aiworld.eu",
      linkLabel: "aiworld.eu"
    }
  ],
  es: [
    {
      years: "2025 —",
      title: "IA Generativa Aplicada",
      org: "UdeC · CDIA — industria y sector público",
      text: "Diseña y dicta el curso de IA Generativa y lidera sistemas LLM aplicados con industria y sector público desde el directorio CDIA.",
      link: "/courses/",
      linkLabel: "Docencia"
    },
    {
      years: "2017 —",
      title: "DataChile",
      org: "Observatorio nacional · millones de usuarios",
      text: "Colaborador central del observatorio de datos insignia de Chile — perfiles de complejidad económica para cada comuna.",
      link: "https://datachile.io",
      linkLabel: "datachile.io"
    },
    {
      years: "2018 —",
      title: "Data La Tercera",
      org: "Plataforma medial · alcance nacional",
      text: "Infraestructura de periodismo de datos junto a uno de los diarios más grandes de Chile — datos complejos, legibles para audiencias masivas.",
      link: "https://data.latercera.com",
      linkLabel: "data.latercera.com"
    },
    {
      years: "2022",
      title: "MonProgramme 2022",
      org: "Francia · elección presidencial",
      text: "Plataforma de participación para la elección presidencial francesa: ciudadanos arman su propio programa con 100+ propuestas.",
      link: "https://monprogramme2022.org/",
      linkLabel: "monprogramme2022.org"
    },
    {
      years: "2019",
      title: "Chilecracia",
      org: "Chile · estallido social",
      text: "Plataforma de comparaciones pareadas que midió prioridades ciudadanas durante el estallido — el desacuerdo, cuantificado.",
      link: "https://chilecracia.org/",
      linkLabel: "chilecracia.org"
    },
    {
      years: "2021",
      title: "Asuprioriza",
      org: "Paraguay · acuerdos ciudadanos en Asunción",
      text: "Con ARCA Latam, ABC Digital y el Center for Collective Learning — midiendo acuerdos entre habitantes de Asunción.",
      link: "https://asuprioriza.org/",
      linkLabel: "asuprioriza.org"
    },
    {
      years: "2021",
      title: "Constitutín",
      org: "Chile · proceso constituyente",
      text: "Herramienta lúdica que enseñó 20+ temas constitucionales durante el proceso constituyente chileno.",
      link: "https://constitutin.cl/",
      linkLabel: "constitutin.cl"
    },
    {
      years: "—",
      title: "AI World",
      org: "Internacional · mapa de capacidades en IA",
      text: "Mapeo global de capacidades en IA — quién puede construir qué, y dónde.",
      link: "https://aiworld.eu",
      linkLabel: "aiworld.eu"
    }
  ]
};

const voiceThemes = {
  en: [
    {
      theme: "AI, jobs & inequality",
      columns: [
        {title: "Will AI licenses become the new tax on employment?", date: "May 2026", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/05/24/seran-las-licencias-de-inteligencia-artificial-el-nuevo-impuesto-al-empleo/"},
        {title: "AI and job destruction in Chile", date: "Nov 2025", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/11/02/la-inteligencia-artificial-y-la-destruccion-de-empleos-en-chile/"},
        {title: "Artificial intelligence, real inequality", date: "Dec 2025", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/12/03/inteligencia-artificial-desigualdad-real-el-costo-social-de-un-acceso-desigual-a-la-ia/"}
      ]
    },
    {
      theme: "Democracy & elections",
      columns: [
        {title: "How to win a presidential election: divide and conquer", date: "Oct 2025", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/10/18/como-ganar-una-eleccion-presidencial-divide-y-venceras/"},
        {title: "Regions vs. Santiago: the second reading of the presidential race", date: "Oct 2025", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/10/28/regiones-vs-santiago-la-segunda-lectura-de-las-presidenciales/"},
        {title: "Presidential primaries: what for?", date: "Aug 2025", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/08/02/primarias-presidenciales-para-que/"}
      ]
    },
    {
      theme: "Education & mobility",
      columns: [
        {title: "The quiet erosion of public education", date: "Jan 2026", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/01/13/la-silenciosa-erosion-de-la-educacion-publica/"},
        {title: "Social mobility and the role of regional universities", date: "Jan 2026", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/01/28/el-laberinto-de-la-movilidad-social-y-el-rol-de-las-universidades-regionales/"}
      ]
    }
  ],
  es: [
    {
      theme: "IA, empleo y desigualdad",
      columns: [
        {title: "¿Serán las licencias de IA el nuevo impuesto al empleo?", date: "Mayo 2026", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/05/24/seran-las-licencias-de-inteligencia-artificial-el-nuevo-impuesto-al-empleo/"},
        {title: "La IA y la destrucción de empleos en Chile", date: "Nov 2025", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/11/02/la-inteligencia-artificial-y-la-destruccion-de-empleos-en-chile/"},
        {title: "Inteligencia artificial, desigualdad real", date: "Dic 2025", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/12/03/inteligencia-artificial-desigualdad-real-el-costo-social-de-un-acceso-desigual-a-la-ia/"}
      ]
    },
    {
      theme: "Democracia y elecciones",
      columns: [
        {title: "Cómo ganar una elección presidencial: divide y vencerás", date: "Oct 2025", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/10/18/como-ganar-una-eleccion-presidencial-divide-y-venceras/"},
        {title: "Regiones vs. Santiago: la segunda lectura de las presidenciales", date: "Oct 2025", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/10/28/regiones-vs-santiago-la-segunda-lectura-de-las-presidenciales/"},
        {title: "Primarias presidenciales: ¿para qué?", date: "Ago 2025", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/08/02/primarias-presidenciales-para-que/"}
      ]
    },
    {
      theme: "Educación y movilidad",
      columns: [
        {title: "La silenciosa erosión de la educación pública", date: "Ene 2026", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/01/13/la-silenciosa-erosion-de-la-educacion-publica/"},
        {title: "Movilidad social y universidades regionales", date: "Ene 2026", url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/01/28/el-laberinto-de-la-movilidad-social-y-el-rol-de-las-universidades-regionales/"}
      ]
    }
  ]
};

const trajectoryData = {
  en: [
    {year: "2014", title: "B.Sc. in Engineering, UdeC", text: "Engineering foundations in Concepción."},
    {year: "2016", title: "Industrial Engineering, UdeC", text: "Operations, economics and systems thinking."},
    {year: "2017–19", title: "DataChile · Chilecracia", text: "National-scale data products. Chilecracia measures citizen priorities during the social outbreak; DataChile becomes the country's open-data observatory."},
    {year: "2021", title: "Constitutín · Asuprioriza", text: "Civic tech across two countries: constitutional education in Chile, citizen agreements in Asunción, Paraguay."},
    {year: "2022", title: "MonProgramme · Research Policy", text: "Participation platform for the French presidential election; cross-space study of science and technology published in Research Policy."},
    {year: "2023", title: "Ph.D. Toulouse · Nature Human Behaviour", text: "Doctorate in Computer Science (Université de Toulouse). Population-scale study of divisiveness in France and Brazil in Nature Human Behaviour."},
    {year: "2024–25", title: "Professor, UdeC", text: "Joins the Faculty of Engineering. Teaches Data Visualization, Multivariate Statistics and the new Generative AI course."},
    {year: "2026", title: "Board, CDIA · Public voice", text: "Board of the Center for Data and AI. 15+ columns in El Mostrador on AI, work and democracy."}
  ],
  es: [
    {year: "2014", title: "Licenciatura en Ingeniería, UdeC", text: "Base de ingeniería en Concepción."},
    {year: "2016", title: "Ingeniería Civil Industrial, UdeC", text: "Operaciones, economía y pensamiento sistémico."},
    {year: "2017–19", title: "DataChile · Chilecracia", text: "Productos de datos a escala nacional. Chilecracia mide prioridades ciudadanas durante el estallido; DataChile se consolida como observatorio abierto del país."},
    {year: "2021", title: "Constitutín · Asuprioriza", text: "Civic tech en dos países: educación constitucional en Chile, acuerdos ciudadanos en Asunción, Paraguay."},
    {year: "2022", title: "MonProgramme · Research Policy", text: "Plataforma de participación para la elección presidencial francesa; estudio del cross-space ciencia-tecnología en Research Policy."},
    {year: "2023", title: "Doctorado Toulouse · Nature Human Behaviour", text: "Doctorado en Informática (Université de Toulouse). Estudio de divisividad a escala poblacional en Francia y Brasil en Nature Human Behaviour."},
    {year: "2024–25", title: "Profesor, UdeC", text: "Se integra a la Facultad de Ingeniería. Dicta Visualización de Datos, Estadística Multivariada y el nuevo curso de IA Generativa."},
    {year: "2026", title: "Directorio CDIA · Voz pública", text: "Directorio del Centro de Datos e IA. Más de 15 columnas en El Mostrador sobre IA, trabajo y democracia."}
  ]
};

const selectedPubs = [
  {
    title: "Understanding political divisiveness using online participation data from the 2022 French and Brazilian presidential elections",
    venue: "Nature Human Behaviour · 2023",
    url: "https://www.nature.com/articles/s41562-023-01755-x"
  },
  {
    title: "'It's the economy, stupid': mapping electoral divisiveness in Chile from 1989 to 2021",
    venue: "Regional Studies, Regional Science · 2025",
    url: "https://www.tandfonline.com/doi/full/10.1080/21681376.2025.2518158"
  },
  {
    title: "The scientific and technological cross-space: Is technological diversification driven by scientific endogenous capacity?",
    venue: "Research Policy · 2022",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0048733320300950"
  }
];

const teachingList = {
  en: ["Generative Artificial Intelligence", "Data Visualization", "Multivariate Statistical Analysis"],
  es: ["Inteligencia Artificial Generativa", "Visualización de Datos", "Análisis Estadístico Multivariado"]
};

function IndexPage() {
  const [language, setLanguage] = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Hero */}
      <header className="bg-white" style={{borderBottom: "1px solid #e5ddd0"}}>
        <div className="max-w-6xl mx-auto px-6 md:px-8 pt-14 pb-12 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
          <div className="rise rise-1">
            <p className="eyebrow mb-5">{t.eyebrow}</p>
            <h1
              className="text-5xl md:text-6xl tracking-tight mb-4"
              style={{fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 700}}
            >
              {t.name}
            </h1>
            <p className="lede max-w-2xl mb-5">{t.title}</p>
            <div className="crimson-rule mb-6" aria-hidden="true" />
            <p className="text-[16.5px] leading-relaxed text-[#44403c] max-w-2xl mb-8">
              {t.lede}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="mailto:cnavarretel@udec.cl" className="btn-crimson">
                {t.contact}: {t.contactLabel}
              </a>
              <a
                href="https://scholar.google.com/citations?user=JqTxoC0AAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                {t.scholar} ↗
              </a>
            </div>
            <SocialMedia
              data={[
                {url: "https://scholar.google.com/citations?user=JqTxoC0AAAAJ&hl=en", name: "Google Scholar"},
                {url: "https://github.com/cnavarreteliz", name: "GitHub"},
                {url: "https://x.com/cnavarreteliz", name: "X"},
                {url: "https://www.linkedin.com/in/cnavarreteliz/", name: "LinkedIn"}
              ]}
            />
          </div>

          <div className="rise rise-2">
            <div className="photo-frame">
              <img
                src="/carlos-navarrete.jpg"
                alt="Dr. Eng. Carlos Navarrete"
                loading="eager"
                width="1200"
                height="1200"
              />
              <div className="photo-caption">{t.caption}</div>
            </div>
          </div>
        </div>

        {/* Credentials strip */}
        <div className="affil-strip">
          <div className="max-w-6xl mx-auto px-6 md:px-8 py-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {t.credentials.map((c, i) => (
              <div key={i}>
                <div
                  className="text-[17px] font-semibold text-[#161412]"
                  style={{fontFamily: "'Source Serif 4', Georgia, serif"}}
                >
                  {c.value}
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a8a29a] mt-1">
                  {c.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-8 py-16 space-y-24">

        {/* Projects */}
        <section id="projects" className="rise rise-2 scroll-mt-28">
          <div className="section-index"><span>{t.projectsIndex}</span></div>
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{fontFamily: "'Source Serif 4', Georgia, serif"}}
          >
            {t.projectsTitle}
          </h2>
          <p className="text-[16px] text-[#57534e] leading-relaxed max-w-3xl mb-10">
            {t.projectsIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projectsData[language].map((p, i) => (
              <a
                key={i}
                href={p.link}
                target={p.link.startsWith("http") ? "_blank" : undefined}
                rel={p.link.startsWith("http") ? "noreferrer" : undefined}
                className="glass-card block p-7 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="timeline-year" style={{marginBottom: 0}}>{p.years}</span>
                  <span className="text-[12px] font-semibold text-[#a41034] group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </div>
                <h3
                  className="text-[21px] leading-snug mb-1 group-hover:text-[#a41034] transition-colors"
                  style={{fontFamily: "'Source Serif 4', Georgia, serif"}}
                >
                  {p.title}
                </h3>
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#a8a29a] mb-3">
                  {p.org}
                </div>
                <p className="text-[14.5px] text-[#57534e] leading-relaxed mb-4">
                  {p.text}
                </p>
                <span className="text-[13px] font-semibold text-[#a41034]">
                  {p.linkLabel} ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Public voice */}
        <section className="rise rise-3">
          <div className="section-index"><span>{t.voiceIndex}</span></div>
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{fontFamily: "'Source Serif 4', Georgia, serif"}}
          >
            {t.voiceTitle}
          </h2>
          <p className="text-[16px] text-[#57534e] leading-relaxed max-w-3xl mb-10">
            {t.voiceIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {voiceThemes[language].map((g, i) => (
              <div key={i} className="glass-card p-7">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#a41034] mb-5">
                  {g.theme}
                </div>
                <ul className="space-y-5">
                  {g.columns.map((c, j) => (
                    <li key={j}>
                      <a href={c.url} target="_blank" rel="noreferrer" className="group block">
                        <div
                          className="text-[15.5px] font-semibold leading-snug text-[#1c1917] group-hover:text-[#a41034] transition-colors"
                          style={{fontFamily: "'Source Serif 4', Georgia, serif"}}
                        >
                          {c.title}
                        </div>
                        <div className="text-[12px] text-[#a8a29a] mt-1">
                          El Mostrador · {c.date}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <a href="/op-ed/" className="btn-outline">
            {t.viewAllWriting} →
          </a>
        </section>

        {/* Trajectory */}
        <section id="trajectory" className="rise rise-3 scroll-mt-28">
          <div className="section-index"><span>{t.trajectoryIndex}</span></div>
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{fontFamily: "'Source Serif 4', Georgia, serif"}}
          >
            {t.trajectoryTitle}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 mt-10 items-start">
            <div>
              <div className="photo-frame">
                <img
                  src="/carlos-navarrete.jpg"
                  alt="Carlos Navarrete"
                  loading="lazy"
                  width="800"
                  height="800"
                />
                <div className="photo-caption">
                  {language === "es"
                    ? "Retrato actual. El archivo histórico (fotos de DataChile, Toulouse, MonProgramme, CDIA) se incorpora a esta línea de tiempo."
                    : "Current portrait. The historical archive (DataChile, Toulouse, MonProgramme, CDIA photos) joins this timeline next."}
                </div>
              </div>
              {/*
                HISTORICAL PHOTOS — to extend the visual archive, drop files in /static/ as:
                  trajectory-2019-chilecracia.jpg
                  trajectory-2022-monprogramme.jpg
                  trajectory-2023-toulouse.jpg
                  trajectory-2026-cdia.jpg
                and reference them here with <img src="/trajectory-....jpg" />.
              */}
            </div>
            <div className="timeline">
              {trajectoryData[language].map((s, i) => (
                <div key={i} className="timeline-item">
                  <span className="timeline-year">{s.year}</span>
                  <h3
                    className="text-[19px] mb-1"
                    style={{fontFamily: "'Source Serif 4', Georgia, serif"}}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[14.5px] text-[#57534e] leading-relaxed max-w-2xl">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[13px] text-[#a8a29a] italic mt-8 max-w-2xl">
            {t.trajectoryNote}
          </p>
        </section>

        {/* Research, briefly */}
        <section>
          <div className="section-index"><span>{t.researchIndex}</span></div>
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{fontFamily: "'Source Serif 4', Georgia, serif"}}
          >
            {t.researchTitle}
          </h2>
          <p className="text-[16px] text-[#57534e] leading-relaxed max-w-3xl mb-8">
            {t.researchIntro}
          </p>
          <div className="bg-white border border-[#e5ddd0] rounded-lg divide-y divide-[#efe9dd]">
            {selectedPubs.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noreferrer" className="group block px-7 py-5">
                <div
                  className="text-[16px] font-semibold leading-snug text-[#1c1917] group-hover:text-[#a41034] transition-colors"
                  style={{fontFamily: "'Source Serif 4', Georgia, serif"}}
                >
                  {p.title}
                </div>
                <div className="text-[13px] italic text-[#6f6a63] mt-1">{p.venue}</div>
              </a>
            ))}
          </div>
          <div className="mt-6">
            <a href="/research/" className="btn-outline">
              {t.viewAllResearch} →
            </a>
          </div>
        </section>

        {/* Teaching */}
        <section>
          <div className="section-index"><span>{t.teachingIndex}</span></div>
          <div className="paper-band rounded-lg px-8 py-8 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div
              className="text-[19px] text-[#1c1917]"
              style={{fontFamily: "'Source Serif 4', Georgia, serif"}}
            >
              {teachingList[language].join(" · ")}
            </div>
            <a href="/courses/" className="btn-crimson shrink-0">
              {t.viewTeaching} →
            </a>
          </div>
        </section>

      </main>

      <footer className="bg-white" style={{borderTop: "1px solid #e5ddd0"}}>
        <div className="h-1" style={{background: "#a41034"}} aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div
              className="text-[17px] font-semibold text-[#161412]"
              style={{fontFamily: "'Source Serif 4', Georgia, serif"}}
            >
              Carlos Navarrete
            </div>
            <div className="text-[12.5px] text-[#6f6a63]">
              {t.eyebrow} · {t.contactLabel}
            </div>
          </div>
          <div className="text-[12.5px] text-[#a8a29a]">
            © {new Date().getFullYear()} Carlos Navarrete · carlosnavarrete.cl
          </div>
        </div>
      </footer>
    </div>
  );
}

export default IndexPage;

export const Head = () => <Seo pathname="/" includePerson />;
