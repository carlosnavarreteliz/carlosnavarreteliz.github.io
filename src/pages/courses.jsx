import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Seo} from "../components/Seo";
import {useLanguage} from "../helpers/useLanguage";
import {useReveal} from "../helpers/useReveal";

const t = {
  en: {
    kicker: "faculty of engineering, udec",
    titleA: "Three courses",
    titleB: "one bias",
    lede: "Advanced computational methods pointed at concrete engineering, industrial and public-sector problems — never at clean textbook data.",
    role: "Assistant Professor",
    contactA: "Thesis and",
    contactB: "research students",
    contactText: "I supervise theses at the Faculty of Engineering on generative AI and what it is doing to work, education and public argument. Write to me with what interests you, or ask what is open.",
    contactGo: "cnavarretel@udec.cl",
  },
  es: {
    kicker: "facultad de ingeniería, udec",
    titleA: "Tres cursos",
    titleB: "un solo sesgo",
    lede: "Métodos computacionales avanzados apuntados a problemas concretos de ingeniería, industria y sector público — nunca a datos limpios de manual.",
    role: "Profesor Asistente",
    contactA: "Estudiantes de tesis",
    contactB: "e investigación",
    contactText: "Dirijo memorias de título en la Facultad de Ingeniería sobre IA generativa y qué le está haciendo al trabajo, la educación y la discusión pública. Escríbeme con lo que te interese, o pregunta qué hay disponible.",
    contactGo: "cnavarretel@udec.cl",
  },
};

const courses = {
  en: [
    {
      idx: "01",
      title: "Generative Artificial Intelligence",
      when: "Spring 2025, Spring 2026",
      text: "Foundations and applications of generative models: architectures, prompting and evaluation, fine-tuning, retrieval, and what it actually takes to put a model in front of real users without it falling over.",
      topics: ["transformers", "fine-tuning", "retrieval", "evaluation", "deployment"],
    },
    {
      idx: "02",
      title: "Data Visualization",
      when: "Fall 2024, 2025, 2026",
      text: "Theory and practice of visual communication: encodings that survive scrutiny, interaction that earns its complexity, and the discipline of building the one chart that has to change a decision.",
      topics: ["visual encoding", "perception", "interaction", "D3", "dashboards"],
    },
    {
      idx: "03",
      title: "Multivariate Statistical Analysis",
      when: "Fall 2025, Fall 2026",
      text: "Linear and logistic regression, principal component analysis and clustering, applied end to end on real industrial-engineering data.",
      topics: ["regression", "logistic models", "PCA", "clustering", "inference"],
    },
  ],
  es: [
    {
      idx: "01",
      title: "Inteligencia Artificial Generativa",
      when: "Primavera 2025, Primavera 2026",
      text: "Fundamentos y aplicaciones de modelos generativos: arquitecturas, prompting y evaluación, fine-tuning, recuperación de información, y lo que realmente cuesta poner un modelo frente a usuarios reales sin que se caiga.",
      topics: ["transformers", "fine-tuning", "retrieval", "evaluación", "despliegue"],
    },
    {
      idx: "02",
      title: "Visualización de Datos",
      when: "Otoño 2024, 2025, 2026",
      text: "Teoría y práctica de la comunicación visual: codificaciones que resisten el escrutinio, interacción que justifica su complejidad, y la disciplina de construir el único gráfico que tiene que cambiar una decisión.",
      topics: ["codificación visual", "percepción", "interacción", "D3", "dashboards"],
    },
    {
      idx: "03",
      title: "Análisis Estadístico Multivariado",
      when: "Otoño 2025, Otoño 2026",
      text: "Regresión lineal y logística, análisis de componentes principales y clustering, aplicados de principio a fin sobre datos reales de ingeniería industrial.",
      topics: ["regresión", "modelos logísticos", "PCA", "clustering", "inferencia"],
    },
  ],
};

export default function Courses() {
  const [language, setLanguage] = useLanguage();
  useReveal();
  const c = t[language];

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />

      <main className="wrap wrap--narrow section" style={{paddingTop: "clamp(2.5rem, 5vw, 4rem)"}}>
        <header style={{textAlign: "center"}}>
          <span className="slash">{c.kicker}</span>
          <h1 className="t-head" style={{marginTop: "1.1rem"}}>
            {c.titleA}
            <span className="t-head__b">{c.titleB}</span>
          </h1>
          <p className="t-body" style={{maxWidth: "58ch", margin: "1.6rem auto 0"}}>
            {c.lede}
          </p>
        </header>

        <div style={{marginTop: "clamp(2.5rem, 5vw, 4rem)"}} className="reveal">
          {courses[language].map((course) => (
            <article className="course" key={course.idx}>
              <div>
                <div className="course__idx">{course.idx}</div>
                <div className="t-micro" style={{marginTop: "0.6rem", lineHeight: 1.7}}>
                  {course.when}
                  <br />
                  {c.role}
                </div>
              </div>
              <div>
                <h2 className="course__title">{course.title}</h2>
                <p className="t-body">{course.text}</p>
                <div className="topics">
                  {course.topics.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{marginTop: "clamp(3rem, 6vw, 4.5rem)", textAlign: "center"}} className="reveal">
          <span className="slash slash--accent">{language === "es" ? "abierto" : "open"}</span>
          <h2 className="t-head t-head--tight" style={{marginTop: "1rem", fontSize: "1.75rem"}}>
            {c.contactA}
            <span style={{display: "block"}}>{c.contactB}</span>
          </h2>
          <p className="t-body" style={{maxWidth: "52ch", margin: "1.2rem auto 1.8rem"}}>
            {c.contactText}
          </p>
          <a href="mailto:cnavarretel@udec.cl" className="btn">
            {c.contactGo} <span className="arrow">→</span>
          </a>
        </div>
      </main>

      <Footer language={language} />
    </>
  );
}

export const Head = () => (
  <Seo
    title="Teaching"
    description="Courses taught by Carlos Navarrete at the Faculty of Engineering, Universidad de Concepción: Generative Artificial Intelligence, Data Visualization and Multivariate Statistical Analysis."
    pathname="/courses/"
  />
);
