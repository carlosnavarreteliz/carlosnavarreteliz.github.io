import * as React from "react";
import {Link} from "gatsby";
import Navbar from "../components/Navbar";
import {Seo} from "../components/Seo";
import {useLanguage} from "../helpers/useLanguage";

const translations = {
  en: {
    message: "This route does not exist in the system.",
    home: "Return home"
  },
  es: {
    message: "Esta ruta no existe en el sistema.",
    home: "Volver al inicio"
  }
};

const NotFoundPage = () => {
  const [language, setLanguage] = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen text-slate-300 relative">
      <div className="bg-grid" />
      <div className="bg-orbs" />
      <Navbar language={language} setLanguage={setLanguage} />

      <main className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-32 text-center">
        <p className="font-mono text-xs text-cyan-400/90 tracking-wide mb-6">
          // error
        </p>
        <h1
          className="text-7xl md:text-9xl font-bold tracking-tight mb-6"
          style={{fontFamily: "'Space Grotesk', sans-serif"}}
        >
          <span className="text-gradient">404</span>
        </h1>
        <p className="font-mono text-sm text-slate-500 mb-10">
          {t.message}
        </p>
        <Link to="/" className="chip inline-flex items-center gap-2">
          <span aria-hidden="true">←</span>
          {t.home}
        </Link>
      </main>
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="404" pathname="/404/" />;
