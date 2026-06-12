import React, {useState, useEffect} from "react";

const navLabels = {
  en: [
    {href: "/", label: "About"},
    {href: "/research/", label: "Research"},
    {href: "/op-ed/", label: "Op-Ed"},
    {href: "/courses/", label: "Teaching"}
  ],
  es: [
    {href: "/", label: "Perfil"},
    {href: "/research/", label: "Investigación"},
    {href: "/op-ed/", label: "Columnas"},
    {href: "/courses/", label: "Docencia"}
  ]
};

export default function Navbar({language = "en", setLanguage}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = navLabels[language] || navLabels.en;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 backdrop-blur-xl ${
          isScrolled
            ? "border-cyan-400/10 bg-[#05070d]/85 shadow-[0_4px_30px_rgba(34,211,238,0.06)]"
            : "border-white/5 bg-[#05070d]/60"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Brand */}
          <a href="/" className="flex items-baseline gap-2 group">
            <span className="font-mono text-cyan-400 text-sm tracking-tight group-hover:text-cyan-300 transition-colors">
              ~/
            </span>
            <span
              className="text-lg font-semibold tracking-[0.18em] text-slate-100 group-hover:text-white transition-colors"
              style={{fontFamily: "'Space Grotesk', sans-serif"}}
            >
              CARLOS NAVARRETE
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.14em] text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <span className="font-mono text-[10px] text-slate-600 group-hover:text-cyan-500 transition-colors">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            ))}

            {/* Language Selector */}
            {language !== undefined && setLanguage && (
              <div className="flex items-center ml-4 rounded-full border border-white/10 p-0.5 font-mono text-[11px]">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2.5 py-1 rounded-full transition-all ${
                    language === "en"
                      ? "bg-cyan-400/15 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.15)]"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("es")}
                  className={`px-2.5 py-1 rounded-full transition-all ${
                    language === "es"
                      ? "bg-cyan-400/15 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.15)]"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  ES
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-cyan-300 transition-colors"
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

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#05070d]/95 backdrop-blur-xl px-6 py-5 space-y-4">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <span className="font-mono text-[10px] text-slate-600">0{i + 1}</span>
                {link.label}
              </a>
            ))}
            {language !== undefined && setLanguage && (
              <div className="flex items-center gap-2 pt-2 font-mono text-[11px]">
                <button
                  onClick={() => setLanguage("en")}
                  className={language === "en" ? "text-cyan-300" : "text-slate-500"}
                >
                  EN
                </button>
                <span className="text-slate-700">/</span>
                <button
                  onClick={() => setLanguage("es")}
                  className={language === "es" ? "text-cyan-300" : "text-slate-500"}
                >
                  ES
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
      <div className="h-20" />
    </>
  );
}
