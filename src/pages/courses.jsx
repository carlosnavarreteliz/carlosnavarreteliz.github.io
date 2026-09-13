import React from "react";
import Navbar from "../components/Navbar";
import {Seo} from "../components/Seo";
import {useLanguage} from "../helpers/useLanguage";

const translations = {
  en: {
    pageTitle: "Teaching",
    kicker: "Data science · generative AI · statistics",
    description: "Courses at the intersection of data science, artificial intelligence and statistical analysis — taught with an applied philosophy: advanced computational tools solving concrete engineering and public-sector problems.",
    semester: "Semester",
    role: "Role",
    resources: "Resources"
  },
  es: {
    pageTitle: "Docencia",
    kicker: "Ciencia de datos · IA generativa · estadística",
    description: "Cursos en la intersección de ciencia de datos, inteligencia artificial y análisis estadístico — con filosofía aplicada: herramientas computacionales avanzadas resolviendo problemas concretos de ingeniería y sector público.",
    semester: "Semestre",
    role: "Rol",
    resources: "Recursos"
  }
};

const coursesData = {
  en: [
    {
      title: "Generative Artificial Intelligence",
      role: "Professor / Lecturer",
      semester: "Spring 2025, Spring 2026",
      institution: "Universidad de Concepción",
      description: "Foundations and applications of generative models: architectures, fine-tuning and practical implementation for complex engineering and data challenges — the flagship AI course."
    },
    {
      title: "Data Visualization",
      role: "Professor / Lecturer",
      semester: "Fall 2024, Fall 2025, Fall 2026",
      institution: "Universidad de Concepción",
      description: "Theory and practice of visual data communication: effective, interactive visualizations that uncover insight in high-dimensional datasets, from DataChile-style observatories to executive dashboards."
    },
    {
      title: "Multivariate Statistical Analysis",
      role: "Professor / Lecturer",
      semester: "Fall 2025, Fall 2026",
      institution: "Universidad de Concepción",
      description: "Core statistical techniques — linear and logistic regression, PCA — applied to real industrial-engineering scenarios."
    }
  ],
  es: [
    {
      title: "Inteligencia Artificial Generativa",
      role: "Profesor",
      semester: "Primavera 2025, Primavera 2026",
      institution: "Universidad de Concepción",
      description: "Fundamentos y aplicaciones de modelos generativos: arquitecturas, fine-tuning e implementación práctica para desafíos complejos de ingeniería y datos — el curso insignia de IA."
    },
    {
      title: "Visualización de Datos",
      role: "Profesor",
      semester: "Otoño 2024, Otoño 2025, Otoño 2026",
      institution: "Universidad de Concepción",
      description: "Teoría y práctica de la comunicación visual de datos: visualizaciones efectivas e interactivas que revelan patrones en datos de alta dimensión, de observatorios estilo DataChile a tableros ejecutivos."
    },
    {
      title: "Análisis Estadístico Multivariado",
      role: "Profesor",
      semester: "Otoño 2025, Otoño 2026",
      institution: "Universidad de Concepción",
      description: "Técnicas estadísticas fundamentales — regresión lineal y logística, PCA — aplicadas a escenarios reales de ingeniería industrial."
    }
  ]
};

export default function Courses() {
  const [language, setLanguage] = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      <Navbar language={language} setLanguage={setLanguage} />

      <main className="max-w-4xl mx-auto px-6 md:px-8 py-14">
        <div className="mb-14 rise rise-1">
          <p className="eyebrow mb-5">{t.kicker}</p>
          <h1
            className="text-4xl md:text-5xl tracking-tight mb-5"
            style={{fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 700}}
          >
            {t.pageTitle}
          </h1>
          <div className="crimson-rule mb-6" aria-hidden="true" />
          <p className="text-[16px] text-[#57534e] leading-relaxed max-w-2xl">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 rise rise-2">
          {coursesData[language].map((course, index) => (
            <article key={index} className="glass-card p-7">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-y-2 mb-3">
                <h3
                  className="text-[20px]"
                  style={{fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600}}
                >
                  {course.title}
                </h3>
                <span className="text-[12.5px] font-semibold text-[#a41034] whitespace-nowrap shrink-0">
                  {course.semester}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#a8a29a] mb-4">
                <span>{course.institution}</span>
                <span aria-hidden="true">·</span>
                <span>{course.role}</span>
              </div>

              <p className="text-[14.5px] text-[#57534e] leading-relaxed max-w-3xl">
                {course.description}
              </p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export const Head = () => (
  <Seo
    title="Teaching"
    description="Courses taught by Carlos Navarrete at Universidad de Concepción: Generative Artificial Intelligence, Data Visualization, and Multivariate Statistical Analysis."
    pathname="/courses/"
  />
);
