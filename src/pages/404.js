import * as React from "react";
import {Link} from "gatsby";
import Navbar from "../components/Navbar";
import {Seo} from "../components/Seo";
import {useLanguage} from "../helpers/useLanguage";

const translations = {
  en: {
    message: "The page you are looking for does not exist.",
    home: "Return home"
  },
  es: {
    message: "La página que buscas no existe.",
    home: "Volver al inicio"
  }
};

const NotFoundPage = () => {
  const [language, setLanguage] = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      <Navbar language={language} setLanguage={setLanguage} />

      <main className="max-w-4xl mx-auto px-6 md:px-8 py-32 text-center">
        <p className="eyebrow mb-6">
          Error
        </p>
        <h1
          className="tracking-tight mb-6 text-[#a41034]"
          style={{fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 700, fontSize: "5rem", lineHeight: 1}}
        >
          404
        </h1>
        <p className="text-[15px] text-[#6f6a63] mb-10">
          {t.message}
        </p>
        <Link to="/" className="btn-outline inline-flex items-center gap-2">
          <span aria-hidden="true">←</span>
          {t.home}
        </Link>
      </main>
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="404" pathname="/404/" />;
