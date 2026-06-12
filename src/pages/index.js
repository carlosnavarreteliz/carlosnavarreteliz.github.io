import React from "react";
import Navbar from "../components/Navbar";
import {SocialMedia} from "../components/SocialMedia";
import {Seo} from "../components/Seo";
import {useLanguage} from "../helpers/useLanguage";

const translations = {
  en: {
    kicker: "// computational social science · artificial intelligence · complex systems",
    role: "Professor at the Faculty of Engineering, Universidad de Concepción. Board Member of the Center for Data and Artificial Intelligence (CDIA).",
    sendEmail: "Contact:",
    bioTitle: "Bio",
    bio1: "Professor Navarrete is a faculty member at the Faculty of Engineering, Universidad de Concepción. His research focuses on computational social science, innovation metrics, and the application of artificial intelligence to address structural problems in social and economic systems. He has examined the dynamics of political polarization, the measurement of electoral divisiveness, and the geography of scientific capabilities.",
    bio2_start: "He has also developed advanced data products for visualizing complex data at scale, contributing to platforms such as ",
    bio2_end: ". His work has been published in key journals including ",
    bio3: "Professor Navarrete received a PhD in Computer Science from the Université de Toulouse in 2023, and holds an Industrial Engineering degree from Universidad de Concepción.",
    bio4_start: "Since June 2026, he serves on the Board of Directors of the ",
    bio4_cdia: "Center for Data and Artificial Intelligence (CDIA)",
    bio4_end: " at Universidad de Concepción, an interdisciplinary hub connecting AI research with industry and public-sector challenges.",
    appointments: "Appointments",
    cdiaRole: "Board Member",
    cdiaName: "Centro de Datos e Inteligencia Artificial (CDIA)",
    cdiaInstitution: "Universidad de Concepción",
    cdiaSince: "Jun 2026 — present",
    education: "Education",
    degrees: [
      {title: "Ph.D. in Computer Science", institution: "Université de Toulouse", year: "2023"},
      {title: "Industrial Engineering", institution: "Universidad de Concepción", year: "2016"},
      {title: "B.Sc. in Engineering", institution: "Universidad de Concepción", year: "2014"}
    ],
    publications: "Publications",
    publicationsText: "You can find a full, up‑to‑date list of his publications on"
  },
  es: {
    kicker: "// ciencia social computacional · inteligencia artificial · sistemas complejos",
    role: "Académico de la Facultad de Ingeniería, Universidad de Concepción. Miembro del Directorio del Centro de Datos e Inteligencia Artificial (CDIA).",
    sendEmail: "Contacto:",
    bioTitle: "Bio",
    bio1: "El profesor Navarrete es académico de la Facultad de Ingeniería de la Universidad de Concepción. Su investigación se centra en ciencias sociales computacionales, métricas de innovación y la aplicación de inteligencia artificial para abordar problemas estructurales en sistemas sociales y económicos. Ha examinado las dinámicas de la polarización política, la medición de la división electoral y la geografía de las capacidades científicas.",
    bio2_start: "También ha desarrollado productos de datos avanzados para visualizar datos complejos a gran escala, contribuyendo a plataformas como ",
    bio2_end: ". Su trabajo ha sido publicado en revistas destacadas, incluyendo ",
    bio3: "El profesor Navarrete recibió un Doctorado en Informática de la Université de Toulouse en 2023 y es Ingeniero Civil Industrial de la Universidad de Concepción.",
    bio4_start: "Desde junio de 2026 integra el Directorio del ",
    bio4_cdia: "Centro de Datos e Inteligencia Artificial (CDIA)",
    bio4_end: " de la Universidad de Concepción, un núcleo interdisciplinario que conecta la investigación en IA con desafíos de la industria y del sector público.",
    appointments: "Cargos",
    cdiaRole: "Miembro del Directorio",
    cdiaName: "Centro de Datos e Inteligencia Artificial (CDIA)",
    cdiaInstitution: "Universidad de Concepción",
    cdiaSince: "Jun 2026 — presente",
    education: "Educación",
    degrees: [
      {title: "Doctorado en Informática", institution: "Université de Toulouse", year: "2023"},
      {title: "Ingeniería Civil Industrial", institution: "Universidad de Concepción", year: "2016"},
      {title: "Licenciatura en Ciencias de la Ingeniería", institution: "Universidad de Concepción", year: "2014"}
    ],
    publications: "Publicaciones",
    publicationsText: "Puedes encontrar una lista completa y actualizada de sus publicaciones en"
  }
};

function SectionIndex({index, label}) {
  return (
    <div className="section-index mb-8">
      <span>{index} / {label}</span>
    </div>
  );
}

function IndexPage() {
  const [language, setLanguage] = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen text-slate-300 relative">
      <div className="bg-grid" />
      <div className="bg-orbs" />
      <Navbar language={language} setLanguage={setLanguage} />

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-16">

        {/* Hero */}
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:w-2/3 rise rise-1">
            <p className="font-mono text-xs text-cyan-400/90 tracking-wide mb-6">
              {t.kicker}
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-slate-50 leading-[1.05] mb-6"
              style={{fontFamily: "'Space Grotesk', sans-serif"}}
            >
              <span className="block font-mono text-base md:text-lg font-medium tracking-[0.3em] text-slate-500 uppercase mb-3">
                Dr. Eng.
              </span>
              Carlos{" "}
              <span className="text-gradient">Navarrete</span>
              <span className="cursor-blink" aria-hidden="true" />
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mb-8">
              {t.role}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="mailto:cnavarretel@udec.cl"
                className="chip inline-flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
                cnavarretel@udec.cl
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

          <div className="lg:w-1/3 w-full max-w-[300px] mx-auto lg:mx-0 rise rise-2">
            <div className="photo-frame">
              <img
                src="/carlos-navarrete.jpg"
                alt="Dr. Eng. Carlos Navarrete"
                loading="eager"
                width="1200"
                height="1200"
              />
            </div>
          </div>
        </div>

        <div className="max-w-3xl space-y-20">

          {/* Bio Section */}
          <section className="rise rise-3">
            <SectionIndex index="01" label={t.bioTitle} />
            <div className="space-y-4 text-slate-300/90 leading-relaxed text-[16px]">
              <p>{t.bio1}</p>
              <p>
                {t.bio2_start}
                <a href="https://data.latercera.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">Data La Tercera</a>,{' '}
                <a href="https://datachile.io" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">DataChile</a>
                {language === 'en' ? ', and ' : ' y '}
                <a href="https://aiworld.eu" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">the AI World</a>
                {t.bio2_end}
                <i>Nature Human Behaviour</i>, <i>Research Policy</i>
                {language === 'en' ? ', and ' : ' y '}
                <i>Global Environmental Change</i>.
              </p>
              <p>{t.bio3}</p>
              <p>
                {t.bio4_start}
                <a href="https://cdia.udec.cl" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">{t.bio4_cdia}</a>
                {t.bio4_end}
              </p>
            </div>
          </section>

          {/* Appointments Section */}
          <section className="rise rise-4">
            <SectionIndex index="02" label={t.appointments} />
            <a
              href="https://cdia.udec.cl"
              target="_blank"
              rel="noreferrer"
              className="glass-card block p-6 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300/80 mb-2">
                    {t.cdiaRole}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-200 transition-colors mb-1">
                    {t.cdiaName}
                  </h3>
                  <p className="text-sm text-slate-400">{t.cdiaInstitution}</p>
                </div>
                <span className="font-mono text-xs text-cyan-400/80 whitespace-nowrap shrink-0">
                  {t.cdiaSince}
                </span>
              </div>
            </a>
          </section>

          {/* Education Section */}
          <section>
            <SectionIndex index="03" label={t.education} />
            <ul className="space-y-0">
              {t.degrees.map((degree, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[auto_1fr_auto] gap-4 items-baseline py-4 border-b border-white/5 last:border-0"
                >
                  <span className="font-mono text-[10px] text-slate-600" aria-hidden="true">
                    ▸
                  </span>
                  <div>
                    <span className="font-semibold text-slate-100">{degree.title}</span>
                    <div className="text-sm text-slate-500">{degree.institution}</div>
                  </div>
                  <span className="font-mono text-xs text-slate-500">{degree.year}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Publications Link */}
          <section>
            <SectionIndex index="04" label={t.publications} />
            <p className="text-slate-300/90">
              {t.publicationsText}{" "}
              <a
                href="https://scholar.google.com/citations?user=JqTxoC0AAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-300 hover:text-cyan-200 font-medium inline-flex items-center gap-0.5"
              >
                Google Scholar
                <span className="text-xs">↗</span>
              </a>
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}

export default IndexPage;

export const Head = () => <Seo pathname="/" includePerson />;
