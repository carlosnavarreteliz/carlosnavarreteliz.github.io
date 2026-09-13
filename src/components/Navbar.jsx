import React, {useState, useEffect} from "react";
import Logo from "./Logo";

const navLabels = {
  en: [
    {href: "/#lines", label: "Research"},
    {href: "/#method", label: "Method"},
    {href: "/#work", label: "Work"},
    {href: "/#writing", label: "Writing"},
    {href: "/#trajectory", label: "Trajectory"},
    {href: "/#archive", label: "Archive"},
    {href: "/research/", label: "Publications"},
    {href: "/courses/", label: "Teaching"},
  ],
  es: [
    {href: "/#lines", label: "Investigación"},
    {href: "/#method", label: "Método"},
    {href: "/#work", label: "Proyectos"},
    {href: "/#writing", label: "Columnas"},
    {href: "/#trajectory", label: "Trayectoria"},
    {href: "/#archive", label: "Archivo"},
    {href: "/research/", label: "Publicaciones"},
    {href: "/courses/", label: "Docencia"},
  ],
};

const roleLine = {
  en: "assistant professor",
  es: "profesor asistente",
};

export default function Navbar({language = "en", setLanguage}) {
  const [pinned, setPinned] = useState(false);
  const [open, setOpen] = useState(false);
  const links = navLabels[language] || navLabels.en;

  useEffect(() => {
    const onScroll = () => setPinned(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // In-page hash jumps do not unmount this component, so close on them too.
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  // Clicking the brand while already on the landing page is a same-document
  // navigation, so the browser leaves the scroll position exactly where it was
  // — click the logo from the footer and nothing appears to happen. Take it
  // back to the top ourselves. `scrollTo` with the default behaviour follows
  // the stylesheet's `scroll-behavior`, which is already switched off under
  // prefers-reduced-motion.
  const onBrandClick = (event) => {
    if (window.location.pathname !== "/") return;
    event.preventDefault();
    setOpen(false);
    if (window.location.hash)
      window.history.pushState(null, "", window.location.pathname);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className={`nav${pinned ? " nav--pinned" : ""}`}>
        <div className="wrap nav__inner">
          <a href="/" className="nav__brand" onClick={onBrandClick} aria-label="Carlos Navarrete — home">
            <Logo size={32} />
            <span style={{minWidth: 0}}>
              <span className="nav__name">Carlos Navarrete</span>
              <span className="nav__role">{roleLine[language]}</span>
            </span>
          </a>

          <div className="nav__links">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav__link">
                {link.label}
              </a>
            ))}
          </div>

          <div style={{display: "flex", alignItems: "center", gap: "0.6rem"}}>
            {setLanguage && (
              <div className="nav__lang" role="group" aria-label="Language">
                <button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>
                  EN
                </button>
                <button type="button" onClick={() => setLanguage("es")} aria-pressed={language === "es"}>
                  ES
                </button>
              </div>
            )}

            <button
              type="button"
              className="nav__burger"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="nav-drawer"
              aria-label={language === "es" ? "Menú" : "Menu"}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {open && (
          <div id="nav-drawer" className="nav__drawer">
            <div className="wrap">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      <div className="nav__spacer" />
    </>
  );
}
