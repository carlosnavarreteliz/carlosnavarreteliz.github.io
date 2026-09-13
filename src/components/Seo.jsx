import React from "react";

const SITE = {
  url: "https://carlosnavarrete.cl",
  title: "Carlos Navarrete",
  tagline: "Generative AI and the future of society",
  description:
    "Carlos Navarrete is Assistant Professor at the Faculty of Engineering, Universidad de Concepción, board member of its Center for Data and Artificial Intelligence (CDIA) and associate researcher at the Millennium Nucleus MEPOP. He studies generative AI as the industrial revolution of our time — its effects on work, education, public debate and democracy — and has built national-scale data platforms used by millions.",
  image: "/carlos-navarrete.jpg",
  twitter: "@cnavarreteliz",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Carlos Navarrete",
  alternateName: "Carlos Navarrete Lizama",
  honorificPrefix: "Dr. Eng.",
  url: SITE.url,
  image: `${SITE.url}${SITE.image}`,
  email: "mailto:cnavarretel@udec.cl",
  jobTitle: "Assistant Professor, Faculty of Engineering",
  description: SITE.description,
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: "Universidad de Concepción",
    url: "https://www.udec.cl",
  },
  affiliation: [
    {
      "@type": "Organization",
      name: "Centro de Datos e Inteligencia Artificial (CDIA), Universidad de Concepción",
      url: "https://cdia.udec.cl",
      description: "Board member since 2026",
    },
    {
      "@type": "Organization",
      name: "Núcleo Milenio para el Estudio de la Política, Opinión Pública y Medios en Chile (MEPOP)",
      url: "https://mepop.cl",
      description: "Associate researcher",
    },
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Université de Toulouse",
      url: "https://www.univ-toulouse.fr",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Universidad de Concepción",
      url: "https://www.udec.cl",
    },
  ],
  knowsAbout: [
    "Generative Artificial Intelligence",
    "AI and the Future of Work",
    "Technological Unemployment",
    "Computational Social Science",
    "Artificial Intelligence",
    "Political Polarization",
    "Electoral Divisiveness",
    "Economic Geography",
    "Innovation Metrics",
    "Data Visualization",
  ],
  knowsLanguage: ["es", "en"],
  sameAs: [
    "https://scholar.google.com/citations?user=JqTxoC0AAAAJ",
    "https://github.com/cnavarreteliz",
    "https://x.com/cnavarreteliz",
    "https://www.linkedin.com/in/cnavarreteliz/",
    "https://www.elmostrador.cl/autor/carlos-navarrete/",
  ],
};

export function Seo({title, description, pathname = "/", children, includePerson = false}) {
  const seo = {
    title: title ? `${title} — ${SITE.title}` : `${SITE.title} — ${SITE.tagline}`,
    description: description || SITE.description,
    url: `${SITE.url}${pathname}`,
    image: `${SITE.url}${SITE.image}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      <meta name="author" content="Carlos Navarrete" />
      <meta name="theme-color" content="#edf2f7" />

      {/* Open Graph */}
      <meta property="og:type" content={includePerson ? "profile" : "website"} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content="Carlos Navarrete" />
      <meta property="og:site_name" content={SITE.title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="es_CL" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SITE.twitter} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {includePerson && (
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
      )}
      {children}
    </>
  );
}
