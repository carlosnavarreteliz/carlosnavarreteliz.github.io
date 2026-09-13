import React from "react";
import Logo from "./Logo";

const t = {
  en: {
    role: "Assistant Professor, Faculty of Engineering",
    affil: "Universidad de Concepción · Board, CDIA · Millennium Nucleus MEPOP",
    elsewhere: "Elsewhere",
    nav: "Site",
    links: [
      {href: "/#work", label: "Work"},
      {href: "/#writing", label: "Writing"},
      {href: "/research/", label: "Publications"},
      {href: "/courses/", label: "Teaching"},
    ],
    place: "Concepción, Chile",
  },
  es: {
    role: "Profesor Asistente, Facultad de Ingeniería",
    affil: "Universidad de Concepción · Directorio CDIA · Núcleo Milenio MEPOP",
    elsewhere: "En otros lugares",
    nav: "Sitio",
    links: [
      {href: "/#work", label: "Proyectos"},
      {href: "/#writing", label: "Columnas"},
      {href: "/research/", label: "Publicaciones"},
      {href: "/courses/", label: "Docencia"},
    ],
    place: "Concepción, Chile",
  },
};

const elsewhere = [
  {label: "Google Scholar", url: "https://scholar.google.com/citations?user=JqTxoC0AAAAJ&hl=en"},
  {label: "GitHub", url: "https://github.com/cnavarreteliz"},
  {label: "LinkedIn", url: "https://www.linkedin.com/in/cnavarreteliz/"},
  {label: "X", url: "https://x.com/cnavarreteliz"},
];

export default function Footer({language = "en"}) {
  const c = t[language] || t.en;

  return (
    <footer className="foot">
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gap: "2.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          }}
        >
          <div style={{gridColumn: "1 / -1", maxWidth: "28rem"}}>
            <div style={{display: "flex", alignItems: "center", gap: "0.7rem"}}>
              <Logo size={34} tone="#ffffff" lens="#6fa8cf" />
              <span
                style={{
                  fontFamily: "'Mozilla Headline', sans-serif",
                  fontWeight: 500,
                  fontSize: "1.05rem",
                  letterSpacing: "0.055em",
                  textTransform: "uppercase",
                  color: "#fff",
                }}
              >
                Carlos Navarrete
              </span>
            </div>

            <p
              className="t-accent"
              style={{marginTop: "1rem", color: "#8ba3ba", fontSize: "1rem"}}
            >
              {c.role}
            </p>
            <p className="t-micro" style={{marginTop: "0.45rem", lineHeight: 1.7}}>
              {c.affil}
            </p>

            <a
              href="mailto:cnavarretel@udec.cl"
              className="link"
              style={{display: "inline-block", marginTop: "1.2rem", color: "#fff", fontSize: "0.95rem"}}
            >
              cnavarretel@udec.cl
            </a>
          </div>

          <div>
            <div className="t-micro" style={{marginBottom: "0.9rem"}}>{c.nav}</div>
            <ul style={{display: "grid", gap: "0.55rem"}}>
              {c.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} style={{fontSize: "0.9375rem"}}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="t-micro" style={{marginBottom: "0.9rem"}}>{c.elsewhere}</div>
            <ul style={{display: "grid", gap: "0.55rem"}}>
              {elsewhere.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noreferrer" style={{fontSize: "0.9375rem"}}>
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="t-micro"
          style={{
            marginTop: "3rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid rgba(255,255,255,0.16)",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem 1.5rem",
            justifyContent: "space-between",
          }}
        >
          <span>© {new Date().getFullYear()} Carlos Navarrete · carlosnavarrete.cl</span>
          <span>{c.place}</span>
        </div>
      </div>
    </footer>
  );
}
