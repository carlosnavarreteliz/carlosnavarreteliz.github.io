import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Seo} from "../components/Seo";
import {useLanguage} from "../helpers/useLanguage";
import {useReveal} from "../helpers/useReveal";

const SCHOLAR = "https://scholar.google.com/citations?user=JqTxoC0AAAAJ&hl=en";

const t = {
  en: {
    kicker: "Computational social science",
    titleA: "Selected",
    titleB: "research",
    lede:
      "How populations divide during elections, and how scientific and technological capabilities accumulate in places. Methods from data science, questions from political science and economic geography.",
    scholarLine: "always current on",
    citations: "citations",
    citation: "citation",
    preprint: "Preprint",
    thesis: "Thesis",
    item: "1 publication",
    items: (n) => `${n} publications`,
  },
  es: {
    kicker: "Ciencia social computacional",
    titleA: "Investigación",
    titleB: "publicada",
    lede:
      "Cómo se dividen las poblaciones durante las elecciones, y cómo se acumulan capacidades científicas y tecnológicas en los territorios. Métodos de ciencia de datos, preguntas de ciencia política y geografía económica.",
    scholarLine: "siempre al día en",
    citations: "citas",
    citation: "cita",
    preprint: "Preprint",
    thesis: "Tesis",
    item: "1 publicación",
    items: (n) => `${n} publicaciones`,
  },
};

// Verified against Google Scholar on 13 September 2026.
const publications = [
  {
    year: 2026,
    papers: [
      {
        title: "Surging scientific capabilities in cities worldwide after significant earthquakes",
        authors: "Y Liang, C Navarrete, J Wang",
        journal: "Global Environmental Change",
        citations: 1,
        url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5211336",
      },
    ],
  },
  {
    year: 2025,
    papers: [
      {
        title:
          "'It's the economy, stupid': mapping electoral divisiveness in Chile from 1989 to 2021",
        authors: "A Bustamante, M Parada-Contzen, C Navarrete",
        journal: "Regional Studies, Regional Science",
        detail: "12 (1) · 554–573",
        citations: 0,
        url: "https://www.tandfonline.com/doi/full/10.1080/21681376.2025.2518158",
      },
      {
        title:
          "Talent is Everywhere, Mobility is Not: Mapping the Topological Anchors of Educational Pathways",
        authors:
          "F Ríos, F Muñoz, V Bravo, G Castillo, I Núñez, J Maluenda-Albornoz, C Navarrete",
        journal: "arXiv:2512.16457",
        kind: "preprint",
        citations: 2,
        url: "https://arxiv.org/abs/2512.16457",
      },
    ],
  },
  {
    year: 2024,
    papers: [
      {
        title: "Mapping Election Polarization and Competitiveness using Election Results",
        authors: "C Navarrete, M Macedo, V Stojkoski, M Parada-Contzen, CA Martínez",
        journal: "arXiv:2308.10862",
        kind: "preprint",
        citations: 1,
        url: "https://arxiv.org/abs/2308.10862",
      },
    ],
  },
  {
    year: 2023,
    papers: [
      {
        title:
          "Understanding political divisiveness using online participation data from the 2022 French and Brazilian presidential elections",
        authors: "C Navarrete, M Macedo, R Colley, J Zhang, N Ferrada, ME Mello, R Lira, et al.",
        journal: "Nature Human Behaviour",
        citations: 22,
        url: "https://www.nature.com/articles/s41562-023-01755-x",
      },
      {
        title: "Measuring and controlling divisiveness in rank aggregation",
        authors: "R Colley, U Grandi, C Hidalgo, M Macedo, C Navarrete",
        journal: "arXiv:2306.08511",
        kind: "preprint",
        citations: 12,
        url: "https://arxiv.org/abs/2306.08511",
      },
      {
        title: "Unraveling Citizen Division and Polarization during Elections",
        authors: "C Navarrete Lizama",
        journal: "Université Paul Sabatier — Toulouse III",
        kind: "thesis",
        citations: 0,
        url: "https://theses.hal.science/tel-04424764",
      },
    ],
  },
  {
    year: 2022,
    papers: [
      {
        title:
          "The scientific and technological cross-space: is technological diversification driven by scientific endogenous capacity?",
        authors: "P Catalán, C Navarrete, F Figueroa",
        journal: "Research Policy",
        detail: "51 (8) · 104016",
        citations: 100,
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0048733320300950",
      },
      {
        title: "Patents as indicators of the technological position of countries on a global level?",
        authors: "L Mora-Apablaza, C Navarrete",
        journal: "Scientometrics",
        detail: "127 (3) · 1233–1246",
        citations: 11,
        url: "https://link.springer.com/article/10.1007/s11192-022-04268-y",
      },
    ],
  },
];

function ResearchPage() {
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
          <p className="t-body" style={{maxWidth: "62ch", margin: "1.6rem auto 0"}}>
            {c.lede}
          </p>
          <p className="t-accent" style={{marginTop: "1.1rem"}}>
            / {c.scholarLine}{" "}
            <a href={SCHOLAR} target="_blank" rel="noreferrer" className="link">
              Google Scholar ↗
            </a>{" "}
            /
          </p>
        </header>

        {publications.map((group) => (
          <section key={group.year} style={{marginTop: "clamp(2.5rem, 5vw, 3.5rem)"}}>
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
              <h2 className="t-head t-head--tight" style={{fontSize: "1.6rem"}}>{group.year}</h2>
              <span className="t-micro">
                {group.papers.length === 1 ? c.item : c.items(group.papers.length)}
              </span>
            </div>

            <div className="rows">
              {group.papers.map((paper) => (
                <a
                  key={paper.url}
                  href={paper.url}
                  target="_blank"
                  rel="noreferrer"
                  className="row row--paper"
                >
                  <span className="row__date">
                    {paper.citations > 0
                      ? `${paper.citations} ${paper.citations === 1 ? c.citation : c.citations}`
                      : "—"}
                  </span>

                  <span className="row__title">{paper.title}</span>

                  <span className="row__meta">
                    {paper.kind === "preprint" && `${c.preprint} · `}
                    {paper.kind === "thesis" && `${c.thesis} · `}
                    {paper.journal}
                    {paper.detail ? ` · ${paper.detail}` : ""}{" "}
                    <span className="row__go">↗</span>
                  </span>

                  <p className="row__note">{paper.authors}</p>
                </a>
              ))}
            </div>
          </section>
        ))}

        <div style={{marginTop: "3rem", textAlign: "center"}}>
          <a href={SCHOLAR} target="_blank" rel="noreferrer" className="btn btn--ghost">
            Google Scholar ↗
          </a>
        </div>
      </main>

      <Footer language={language} />
    </>
  );
}

export default ResearchPage;

export const Head = () => (
  <Seo
    title="Research"
    description="Publications by Carlos Navarrete on computational social science, electoral divisiveness, political polarization, economic geography and innovation metrics — including Nature Human Behaviour, Research Policy, Scientometrics and Global Environmental Change."
    pathname="/research/"
  />
);
