import * as React from "react";
import {Link} from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Seo} from "../components/Seo";
import {useLanguage} from "../helpers/useLanguage";

const t = {
  en: {
    kicker: "error 404",
    titleA: "This page",
    titleB: "does not exist",
    text: "The link may be out of date, or the page may have moved. Everything on this site is reachable from the homepage.",
    home: "Back to the homepage",
    elsewhere: "or go straight to",
    links: [
      {href: "/op-ed/", label: "Writing"},
      {href: "/research/", label: "Research"},
      {href: "/courses/", label: "Teaching"},
    ],
  },
  es: {
    kicker: "error 404",
    titleA: "Esta página",
    titleB: "no existe",
    text: "El enlace puede estar desactualizado, o la página puede haberse movido. Todo lo que hay en este sitio se alcanza desde el inicio.",
    home: "Volver al inicio",
    elsewhere: "o ir directamente a",
    links: [
      {href: "/op-ed/", label: "Columnas"},
      {href: "/research/", label: "Investigación"},
      {href: "/courses/", label: "Docencia"},
    ],
  },
};

const NotFoundPage = () => {
  const [language, setLanguage] = useLanguage();
  const c = t[language];

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />

      <main
        className="wrap section"
        style={{maxWidth: "760px", marginInline: "auto", textAlign: "center"}}
      >
        <span className="slash slash--accent">{c.kicker}</span>
        <h1 className="t-head" style={{marginTop: "1.2rem"}}>
          {c.titleA}
          <span style={{display: "block"}}>{c.titleB}</span>
        </h1>
        <p className="t-body" style={{maxWidth: "50ch", margin: "1.5rem auto 2.25rem"}}>
          {c.text}
        </p>

        <Link to="/" className="btn">
          <span className="arrow">←</span> {c.home}
        </Link>

        <div style={{marginTop: "2.75rem"}}>
          <p className="t-micro" style={{marginBottom: "0.9rem"}}>{c.elsewhere}</p>
          <div style={{display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center"}}>
            {c.links.map((l) => (
              <Link key={l.href} to={l.href} className="chip">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer language={language} />
    </>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="404" pathname="/404/" />;
