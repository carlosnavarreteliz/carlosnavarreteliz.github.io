import React, {useMemo, useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Seo} from "../components/Seo";
import {useLanguage} from "../helpers/useLanguage";
import {useReveal} from "../helpers/useReveal";
import {columns, THEMES, formatDate, columnTitle, columnLede} from "../data/columns";

const t = {
  en: {
    label: "el mostrador · 2025 — 2026",
    titleA: "Writing for",
    titleB: "the public argument",
    lede: "Seventeen opinion columns on artificial intelligence, work, democracy and education — the research, argued in public, in the terms the argument is actually being had.",
    note: "Published in Spanish; titles below are translated.",
    all: "All",
    count: (n) => `${n} ${n === 1 ? "column" : "columns"}`,
    empty: "No columns in this theme yet.",
    source: "Every column, at the source",
  },
  es: {
    label: "el mostrador · 2025 — 2026",
    titleA: "Escribir para",
    titleB: "la discusión pública",
    lede: "Diecisiete columnas de opinión sobre inteligencia artificial, trabajo, democracia y educación — la investigación, discutida en público, en los términos en que la discusión realmente ocurre.",
    note: null,
    all: "Todas",
    count: (n) => `${n} ${n === 1 ? "columna" : "columnas"}`,
    empty: "Aún no hay columnas en este tema.",
    source: "Todas las columnas, en la fuente",
  },
};

const themeKeys = Object.keys(THEMES);

function OpEdPage() {
  const [language, setLanguage] = useLanguage();
  const [active, setActive] = useState("all");
  useReveal();
  const c = t[language];

  const visible = useMemo(
    () => (active === "all" ? columns : columns.filter((col) => col.theme === active)),
    [active]
  );

  const byYear = useMemo(() => {
    const groups = new Map();
    visible.forEach((col) => {
      const year = col.date.slice(0, 4);
      if (!groups.has(year)) groups.set(year, []);
      groups.get(year).push(col);
    });
    return Array.from(groups.entries());
  }, [visible]);

  const counts = useMemo(() => {
    const map = {all: columns.length};
    themeKeys.forEach((k) => {
      map[k] = columns.filter((col) => col.theme === k).length;
    });
    return map;
  }, []);

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />

      <main className="wrap wrap--narrow section" style={{paddingTop: "clamp(2.5rem, 5vw, 4rem)"}}>
        <header style={{textAlign: "center"}}>
          <span className="slash">{c.label}</span>
          <h1 className="t-head" style={{marginTop: "1.1rem"}}>
            {c.titleA}
            <span className="t-head__b">{c.titleB}</span>
          </h1>
          <p className="t-body" style={{maxWidth: "60ch", margin: "1.6rem auto 0"}}>
            {c.lede}
          </p>
          {c.note && (
            <p className="t-accent" style={{marginTop: "1rem"}}>/ {c.note} /</p>
          )}
        </header>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          <button type="button" className="tag" aria-pressed={active === "all"} onClick={() => setActive("all")}>
            {c.all} · {counts.all}
          </button>
          {themeKeys.map((key) => (
            <button
              key={key}
              type="button"
              className="tag"
              aria-pressed={active === key}
              onClick={() => setActive(key)}
            >
              {THEMES[key][language]} · {counts[key]}
            </button>
          ))}
        </div>

        {byYear.length === 0 && (
          <p className="t-body" style={{paddingBlock: "3rem", textAlign: "center"}}>{c.empty}</p>
        )}

        {byYear.map(([year, items]) => (
          <section key={year} style={{marginTop: "clamp(2.5rem, 5vw, 3.5rem)"}}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "0.5rem",
              }}
            >
              <h2 className="t-head t-head--tight" style={{fontSize: "1.6rem"}}>{year}</h2>
              <span className="t-micro">{c.count(items.length)}</span>
            </div>

            <div className="rows">
              {items.map((col) => (
                <a key={col.url} href={col.url} target="_blank" rel="noreferrer" className="row">
                  <span className="row__date">{formatDate(col.date, language)}</span>
                  <span className="row__title">{columnTitle(col, language)}</span>
                  <span className="row__meta">
                    {THEMES[col.theme][language]} <span className="row__go">↗</span>
                  </span>
                  <p className="row__note">{columnLede(col, language)}</p>
                </a>
              ))}
            </div>
          </section>
        ))}

        <div style={{marginTop: "3rem", textAlign: "center"}}>
          <a
            href="https://www.elmostrador.cl/autor/carlos-navarrete/"
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            {c.source} ↗
          </a>
        </div>
      </main>

      <Footer language={language} />
    </>
  );
}

export default OpEdPage;

export const Head = () => (
  <Seo
    title="Writing"
    description="Seventeen opinion columns by Carlos Navarrete in El Mostrador on artificial intelligence, employment, democracy and education in Chile."
    pathname="/op-ed/"
  />
);
