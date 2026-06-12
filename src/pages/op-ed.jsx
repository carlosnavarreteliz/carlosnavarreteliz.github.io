import React from "react";
import Navbar from "../components/Navbar";
import {Seo} from "../components/Seo";
import {useLanguage} from "../helpers/useLanguage";

const translations = {
  en: {
    pageTitle: "Op-Ed",
    kicker: "// public debate · technology · society",
    description: "Opinion columns on technology, artificial intelligence, innovation, and their impact on Chilean society.",
    readMore: "Read article",
    publishedIn: "Published in"
  },
  es: {
    pageTitle: "Columnas de Opinión",
    kicker: "// debate público · tecnología · sociedad",
    description: "Columnas de opinión sobre tecnología, inteligencia artificial, innovación y su impacto en la sociedad chilena.",
    readMore: "Leer artículo",
    publishedIn: "Publicado en"
  }
};

// Columnas de opinión organizadas por año
const opEdColumns = [
  {
    year: 2026,
    columns: [
      {
        title: "¿Serán las licencias de inteligencia artificial el nuevo impuesto al empleo?",
        description: "La combinación de mayor costo de acceso, menor poder de negociación salarial y percepción de una brecha de productividad insalvable configura un terreno fértil para el descontento social y el auge de narrativas populistas.",
        publication: "El Mostrador",
        date: "24 de Mayo, 2026",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/05/24/seran-las-licencias-de-inteligencia-artificial-el-nuevo-impuesto-al-empleo/"
      },
      {
        title: "Fin de la gratuidad para mayores de 30 años: un portazo a la clase media técnica",
        description: "Un adulto de 30 años que estudia una carrera técnica no solo busca un título; está sacrificando tiempo de crianza o trabajo para mejorar su futuro en un sistema que hoy le cierra la puerta.",
        publication: "El Mostrador",
        date: "31 de Marzo, 2026",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/03/31/fin-de-la-gratuidad-para-mayores-de-30-anos-un-portazo-a-la-clase-media-tecnica/"
      },
      {
        title: "La rebelión de la humanidad contra las máquinas: ¿un futuro distópico?",
        description: "El temor al reemplazo por la inteligencia artificial no es infundado; se percibe cotidianamente, especialmente en zonas alejadas del desarrollo tecnológico.",
        publication: "El Mostrador",
        date: "16 de Marzo, 2026",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/03/16/la-rebelion-de-la-humanidad-contra-las-maquinas-un-futuro-distopico/"
      },
      {
        title: "El laberinto de la movilidad social y el rol de las universidades regionales",
        description: "El lugar de origen de un estudiante dicta el destino: mientras los estudiantes con mejores condiciones preexistentes cuentan con todas las ventajas estructurales, otros deben compensar con un desempeño excepcional las carencias de un sistema escolar desigual.",
        publication: "El Mostrador",
        date: "28 de Enero, 2026",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/01/28/el-laberinto-de-la-movilidad-social-y-el-rol-de-las-universidades-regionales/"
      },
      {
        title: "La silenciosa erosión de la educación pública",
        description: "Cifras más o cifras menos, siempre podemos contarnos la historia que deseemos. En medio de la disputa ideológica, los datos se utilizan con frecuencia para confirmar visiones de mundo preexistentes, más que para enfrentar los problemas estructurales que revelan.",
        publication: "El Mostrador",
        date: "13 de Enero, 2026",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/01/13/la-silenciosa-erosion-de-la-educacion-publica/"
      },
      {
        title: "Yo, humano",
        description: "Si no actuamos ahora para anticipar y distribuir de manera equitativa sus costos y beneficios, la IA puede convertirse en un potente catalizador de descontento social. En ese vacío prosperarán discursos populistas anti-IA, que encontrarán en esta tecnología un enemigo ideal.",
        publication: "El Mostrador",
        date: "2 de Enero, 2026",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2026/01/02/yo-humano/"
      }
    ]
  },
  {
    year: 2025,
    columns: [
      {
        title: "El destino de dirigir a Chile",
        description: "Gobernar Chile con una mirada regional no consiste solo en anunciar el fin de los delegados presidenciales o en prometer más infraestructura pública en regiones.",
        publication: "El Mostrador",
        date: "11 de Diciembre, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/12/11/el-destino-de-dirigir-a-chile/"
      },
      {
        title: "Inteligencia artificial, desigualdad real: el costo social de un acceso desigual a la IA",
        description: "Si no abordamos la discusión con ambición y políticas capaces de permear más allá de nichos empresariales y académicos, la expansión de la IA corre el riesgo de ser un amplificador de desigualdades.",
        publication: "El Mostrador",
        date: "3 de Diciembre, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/12/03/inteligencia-artificial-desigualdad-real-el-costo-social-de-un-acceso-desigual-a-la-ia/"
      },
      {
        title: "Elecciones: Chile es un pueblo al sur y al norte de Santiago",
        description: "La historia es clara en esto: los movimientos extremos no emergen porque la ciudadanía se vuelva súbitamente más radical, sino porque las élites centralistas dejan de dar respuestas.",
        publication: "El Mostrador",
        date: "18 de Noviembre, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/11/18/elecciones-chile-es-un-pueblo-al-sur-y-al-norte-de-santiago/"
      },
      {
        title: "La indiferencia frente a la verdad en la era digital",
        description: "Este fenómeno no nació con la inteligencia artificial ni con las redes sociales: primero fueron las teorías conspirativas; hoy es la aceptación pasiva de información sin reflexión ni contraste.",
        publication: "El Mostrador",
        date: "8 de Noviembre, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/11/08/la-indiferencia-frente-a-la-verdad-en-la-era-digital/"
      },
      {
        title: "La inteligencia artificial y la destrucción de empleos en Chile",
        description: "Tal vez el verdadero debate de esta elección no sea cuántos empleos se crean o se destruyen hoy, sino qué tipo de trabajos podrán generarse mañana.",
        publication: "El Mostrador",
        date: "2 de Noviembre, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/11/02/la-inteligencia-artificial-y-la-destruccion-de-empleos-en-chile/"
      },
      {
        title: "Regiones vs. Santiago: la segunda lectura de las presidenciales",
        description: "Cuando conozcamos los resultados del 16 de noviembre, la conversación no será solo sobre quien gane, sino sobre dónde gana.",
        publication: "El Mostrador",
        date: "28 de Octubre, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/10/28/regiones-vs-santiago-la-segunda-lectura-de-las-presidenciales/"
      },
      {
        title: "Cómo ganar una elección presidencial: divide y vencerás",
        description: "Análisis sobre las estrategias de polarización y división electoral en las elecciones presidenciales contemporáneas.",
        publication: "El Mostrador",
        date: "18 de Octubre, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/10/18/como-ganar-una-eleccion-presidencial-divide-y-venceras/"
      },
      {
        title: "Primarias presidenciales: ¿para qué?",
        description: "Reflexión sobre el rol y la efectividad de las primarias presidenciales en el sistema político chileno.",
        publication: "El Mostrador",
        date: "2 de Agosto, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/08/02/primarias-presidenciales-para-que/"
      },
      {
        title: "El criptoescándalo y la supervivencia política de Javier Milei",
        description: "Análisis sobre las implicancias del escándalo de criptomonedas en la gestión política del presidente argentino.",
        publication: "El Mostrador",
        date: "3 de Marzo, 2025",
        url: "https://www.elmostrador.cl/noticias/opinion/columnas/2025/03/03/el-criptoescandalo-y-la-supervivencia-politica-de-javier-milei/"
      }
    ]
  }
];

function OpEdPage() {
  const [language, setLanguage] = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen text-slate-300 relative">
      <div className="bg-grid" />
      <div className="bg-orbs" />
      <Navbar language={language} setLanguage={setLanguage} />

      <main className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-16">
        {/* Header Section */}
        <div className="mb-20 rise rise-1">
          <p className="font-mono text-xs text-cyan-400/90 tracking-wide mb-6">
            {t.kicker}
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-50 mb-6"
            style={{fontFamily: "'Space Grotesk', sans-serif"}}
          >
            <span className="text-gradient">{t.pageTitle}</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            {t.description}
          </p>
        </div>

        {/* Op-Ed Columns by Year */}
        <div className="space-y-20 rise rise-2">
          {opEdColumns.map((yearData) => (
            <section key={yearData.year}>
              <div className="section-index mb-10">
                <span>{yearData.year}</span>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {yearData.columns.map((column, index) => (
                  <a
                    key={index}
                    href={column.url}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-card block p-6 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-y-2 mb-3">
                      <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-200 transition-colors leading-snug max-w-2xl">
                        {column.title}
                      </h3>
                      <span className="font-mono text-xs text-slate-500 shrink-0">
                        {column.date}
                      </span>
                    </div>

                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300/80 mb-3">
                      {column.publication}
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed max-w-3xl mb-4">
                      {column.description}
                    </p>

                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-400 group-hover:text-cyan-300 group-hover:gap-2.5 transition-all">
                      {t.readMore}
                      <span aria-hidden="true">→</span>
                    </span>
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

export default OpEdPage;

export const Head = () => (
  <Seo
    title="Op-Ed"
    description="Opinion columns by Carlos Navarrete on technology, artificial intelligence, innovation, and their impact on Chilean society, published in El Mostrador and other outlets."
    pathname="/op-ed/"
  />
);
