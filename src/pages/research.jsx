import React from "react";
import Navbar from "../components/Navbar";
import {Seo} from "../components/Seo";
import {useLanguage} from "../helpers/useLanguage";

const translations = {
  en: {
    pageTitle: "Research",
    kicker: "Publications · polarization · economic geography · AI",
    description: "A reference section. The core of this site is applied AI and data products in production — see the homepage. Below, the peer-reviewed record: computational social science, electoral divisiveness, and innovation metrics.",
    viewGoogleScholar: "Full, up-to-date list on",
    citations: "citations"
  },
  es: {
    pageTitle: "Investigación",
    kicker: "Publicaciones · polarización · geografía económica · IA",
    description: "Una sección de referencia. El centro de este sitio es la IA aplicada y los productos de datos en producción — ver el inicio. Abajo, el registro académico: ciencia social computacional, divisividad electoral y métricas de innovación.",
    viewGoogleScholar: "Lista completa y actualizada en",
    citations: "citas"
  }
};

const publications = [
  {
    year: 2025,
    papers: [
      {
        title: "'It's the economy, stupid': mapping electoral divisiveness in Chile from 1989 to 2021",
        authors: "A Bustamante, M Parada-Contzen, C Navarrete",
        journal: "Regional Studies, Regional Science",
        volume: "12 (1)",
        pages: "554-573",
        year: 2025,
        citations: 0,
        url: "https://www.tandfonline.com/doi/full/10.1080/21681376.2025.2518158"
      },
      {
        title: "Surging Scientific Capabilities in Cities Worldwide after Significant Earthquakes",
        authors: "Y Liang, C Navarrete, J Wang",
        journal: "Global Environmental Change",
        year: 2025,
        citations: 0,
        url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5211336"
      }
    ]
  },
  {
    year: 2024,
    papers: [
      {
        title: "On the measurement of Electoral Divisiveness",
        authors: "C Navarrete, M Macedo, V Stojkoski, M Parada-Contzen, CA Martínez",
        journal: "arXiv preprint arXiv:2308.10862",
        year: 2024,
        citations: 1,
        url: "https://arxiv.org/abs/2308.10862"
      }
    ]
  },
  {
    year: 2023,
    papers: [
      {
        title: "Understanding political divisiveness using online participation data from the 2022 French and Brazilian presidential elections",
        authors: "C Navarrete, M Macedo, R Colley, J Zhang, N Ferrada, ME Mello, R Lira, et al.",
        journal: "Nature Human Behaviour",
        year: 2023,
        citations: 18,
        url: "https://www.nature.com/articles/s41562-023-01755-x"
      },
      {
        title: "Measuring and controlling divisiveness in rank aggregation",
        authors: "R Colley, U Grandi, C Hidalgo, M Macedo, C Navarrete",
        journal: "arXiv preprint arXiv:2306.08511",
        year: 2023,
        citations: 10,
        url: "https://arxiv.org/abs/2306.08511"
      },
      {
        title: "Unraveling Citizen Division and Polarization during Elections",
        authors: "CCN Lizama",
        journal: "Université Paul Sabatier-Toulouse III (PhD Thesis)",
        year: 2023,
        citations: 0,
        url: "https://theses.hal.science/tel-04424764"
      }
    ]
  },
  {
    year: 2022,
    papers: [
      {
        title: "The scientific and technological cross-space: Is technological diversification driven by scientific endogenous capacity?",
        authors: "P Catalán, C Navarrete, F Figueroa",
        journal: "Research Policy",
        volume: "51 (8)",
        pages: "104016",
        year: 2022,
        citations: 66,
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0048733320300950"
      },
      {
        title: "Patents as indicators of the technological position of countries on a global level?",
        authors: "L Mora-Apablaza, C Navarrete",
        journal: "Scientometrics",
        volume: "127 (3)",
        pages: "1233-1246",
        year: 2022,
        citations: 8,
        url: "https://link.springer.com/article/10.1007/s11192-022-04268-y"
      }
    ]
  }
];

function ResearchPage() {
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
          <p className="text-[16px] text-[#57534e] leading-relaxed max-w-2xl mb-5">
            {t.description}
          </p>
          <p className="text-[14px] text-[#6f6a63]">
            {t.viewGoogleScholar}{" "}
            <a
              href="https://scholar.google.com/citations?user=JqTxoC0AAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="font-semibold"
            >
              Google Scholar ↗
            </a>
          </p>
        </div>

        <div className="space-y-14 rise rise-2">
          {publications.map((yearData) => (
            <section key={yearData.year}>
              <div className="section-index">
                <span>{yearData.year}</span>
              </div>

              <div className="bg-white border border-[#e5ddd0] rounded-lg divide-y divide-[#efe9dd]">
                {yearData.papers.map((paper, index) => (
                  <a
                    key={index}
                    href={paper.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block px-7 py-6"
                  >
                    <h3
                      className="text-[18px] leading-snug mb-2 group-hover:text-[#a41034] transition-colors"
                      style={{fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600}}
                    >
                      {paper.title}
                    </h3>

                    <p className="text-[14px] text-[#6f6a63] mb-3 leading-relaxed">
                      {paper.authors}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[12.5px]">
                      <span className="italic text-[#57534e]">{paper.journal}</span>
                      {paper.volume && <span className="text-[#a8a29a]">{paper.volume}</span>}
                      {paper.pages && <span className="text-[#a8a29a]">{paper.pages}</span>}
                      {paper.citations > 0 && (
                        <span className="ml-auto px-2.5 py-0.5 rounded-full border border-[#e5ddd0] text-[#a41034] text-[11px] font-semibold">
                          {paper.citations} {t.citations}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ResearchPage;

export const Head = () => (
  <Seo
    title="Research"
    description="Publications by Carlos Navarrete on computational social science, electoral divisiveness, political polarization, economic geography, and artificial intelligence — including work in Nature Human Behaviour, Research Policy, and Global Environmental Change."
    pathname="/research/"
  />
);
