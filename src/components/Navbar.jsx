import React, {useState, useEffect} from "react";

const navLabels = {
  en: [
    {href: "/", label: "About"},
    {href: "/#projects", label: "AI & Data"},
    {href: "/#trajectory", label: "Trajectory"},
    {href: "/op-ed/", label: "Writing"},
    {href: "/research/", label: "Research"},
    {href: "/courses/", label: "Teaching"}
  ],
  es: [
    {href: "/", label: "Perfil"},
    {href: "/#projects", label: "IA y Datos"},
    {href: "/#trajectory", label: "Trayectoria"},
    {href: "/op-ed/", label: "Columnas"},
    {href: "/research/", label: "Investigación"},
    {href: "/courses/", label: "Docencia"}
  ]
};

export default function Navbar({language = "en", setLanguage}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = navLabels[language] || navLabels.en;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 transition-all duration-200 bg-[#faf8f5]/95 backdrop-blur"
        style={{
          borderBottom: "1px solid #e5ddd0",
          boxShadow: isScrolled ? "0 4px 20px rgba(27,42,74,0.08)" : "none"
        }}
      >
        <div className="h-1" style={{background: "#a41034"}} aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8 h-[72px] flex items-center justify-between">
          <a href="/" className="flex flex-col leading-none group">
            <span
              className="text-[19px] font-semibold tracking-tight text-[#161412]"
              style={{fontFamily: "'Source Serif 4', Georgia, serif"}}
            >
              Carlos Navarrete
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a41034] mt-1">
              {language === "es" ? "Inteligencia Artificial · UdeC" : "Artificial Intelligence · UdeC"}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-[#57534e] hover:text-[#a41034] transition-colors"
              >
                {link.label}
              </a>
            ))}

            {language !== undefined && setLanguage && (
              <div className="flex items-center ml-2 rounded-full border border-[#e5ddd0] bg-white p-0.5 text-[11px] font-semibold">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2.5 py-1 rounded-full transition-all ${
                    language === "en"
                      ? "bg-[#a41034] text-white"
                      : "text-[#a8a29a] hover:text-[#57534e]"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("es")}
                  className={`px-2.5 py-1 rounded-full transition-all ${
                    language === "es"
                      ? "bg-[#a41034] text-white"
                      : "text-[#a8a29a] hover:text-[#57534e]"
                  }`}
                >
                  ES
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#57534e] hover:text-[#a41034] transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#e5ddd0] bg-white px-6 py-5 space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-[13px] font-semibold uppercase tracking-[0.12em] text-[#57534e] hover:text-[#a41034] transition-colors"
              >
                {link.label}
              </a>
            ))}
            {language !== undefined && setLanguage && (
              <div className="flex items-center gap-2 pt-2 text-[12px] font-semibold">
                <button
                  onClick={() => setLanguage("en")}
                  className={language === "en" ? "text-[#a41034]" : "text-[#a8a29a]"}
                >
                  EN
                </button>
                <span className="text-[#e5ddd0]">/</span>
                <button
                  onClick={() => setLanguage("es")}
                  className={language === "es" ? "text-[#a41034]" : "text-[#a8a29a]"}
                >
                  ES
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
      <div className="h-[76px]" />
    </>
  );
}
