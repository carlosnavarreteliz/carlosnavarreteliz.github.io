import React from "react";
import Navbar from "../components/Navbar";
import {Seo} from "../components/Seo";
import {useLanguage} from "../helpers/useLanguage";

const translations = {
  en: {
    pageTitle: "Teaching",
    kicker: "// data science · generative ai · statistics",
    description: "Carlos Navarrete teaches courses at the intersection of data science, artificial intelligence, and statistical analysis. His teaching philosophy emphasizes practical application and determining how advanced computational tools can solve complex real-world problems.",
    semester: "Semester",
    role: "Role",
    resources: "Resources"
  },
  es: {
    pageTitle: "Docencia",
    kicker: "// ciencia de datos · ia generativa · estadística",
    description: "Carlos Navarrete dicta cursos en la intersección de la ciencia de datos, la inteligencia artificial y el análisis estadístico. Su filosofía de enseñanza enfatiza la aplicación práctica y cómo las herramientas computacionales avanzadas pueden resolver problemas complejos del mundo real.",
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
      description: "This course explores the foundations and applications of Generative Models, focusing on their architectural principles, fine-tuning techniques, and practical implementation to solve complex engineering and data challenges."
    },
    {
      title: "Data Visualization",
      role: "Professor / Lecturer",
      semester: "Fall 2024, Fall 2025, Fall 2026",
      institution: "Universidad de Concepción",
      description: "Focuses on the theory and practice of visual data communication. Students learn to design effective, interactive visualizations to uncover insights from high-dimensional datasets using modern web standards and libraries."
    },
    {
      title: "Multivariate Statistical Analysis",
      role: "Professor / Lecturer",
      semester: "Fall 2025, Fall 2026",
      institution: "Universidad de Concepción",
      description: "Covers fundamental statistical techniques for analyzing datasets. The course focuses on linear regressions, logistic regressions, and Principal Component Analysis (PCA), applying these methods to real-world industrial engineering scenarios."
    }
  ],
  es: [
    {
      title: "Generative Artificial Intelligence",
      role: "Profesor / Docente",
      semester: "Primavera 2025, Primavera 2026",
      institution: "Universidad de Concepción",
      description: "Este curso explora los fundamentos y aplicaciones de los Modelos Generativos, enfocándose en sus principios arquitectónicos, técnicas de fine-tuning e implementación práctica para resolver desafíos complejos de ingeniería y datos."
    },
    {
      title: "Data Visualization",
      role: "Profesor / Docente",
      semester: "Otoño 2024, Otoño 2025, Otoño 2026",
      institution: "Universidad de Concepción",
      description: "Se enfoca en la teoría y práctica de la comunicación visual de datos. Los estudiantes aprenden a diseñar visualizaciones efectivas e interactivas para descubrir insights en conjuntos de datos de alta dimensión utilizando estándares web modernos."
    },
    {
      title: "Análisis Estadístico Multivariado",
      role: "Profesor / Docente",
      semester: "Otoño 2025, Otoño 2026",
      institution: "Universidad de Concepción",
      description: "Cubre técnicas estadísticas fundamentales para el análisis de datos. El curso se enfoca en regresiones lineales, regresiones logísticas y Análisis de Componentes Principales (PCA), aplicando estos métodos a escenarios reales de ingeniería industrial."
    }
  ]
};

export default function Courses() {
  const [language, setLanguage] = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen text-slate-300 relative">
      <div className="bg-grid" />
      <div className="bg-orbs" />
      <Navbar language={language} setLanguage={setLanguage} />

      <main className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-16">
        {/* Header Section */}
        <div className="mb-20 rise rise-1">
          <p className="font-mono text-xs text-cyan-400/90 tracking-wide mb-6">
            {t.kicker}
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-50 mb-6"
            style={{fontFamily: "'Space Grotesk', sans-serif"}}
          >
            <span className="text-gradient">{t.pageTitle}</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            {t.description}
          </p>
        </div>

        {/* Courses List */}
        <div className="grid grid-cols-1 gap-5 rise rise-2">
          {coursesData[language].map((course, index) => (
            <article key={index} className="glass-card p-6 group">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-y-2 mb-3">
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-200 transition-colors">
                  {course.title}
                </h3>
                <span className="font-mono text-xs text-slate-500 whitespace-nowrap shrink-0">
                  {course.semester}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
                <span className="text-violet-300/80">{course.institution}</span>
                <span className="text-slate-700" aria-hidden="true">·</span>
                <span className="text-slate-500">{course.role}</span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">
                {course.description}
              </p>

              {course.notes && (
                <div className="mt-5 pt-4 border-t border-white/5">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400/80 mb-3">
                    {t.resources}
                  </h4>
                  <ul className="space-y-2">
                    {course.notes.map((note, i) => (
                      <li key={i}>
                        <a
                          href={note.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1"
                        >
                          {note.title}
                          <span className="text-xs">↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
