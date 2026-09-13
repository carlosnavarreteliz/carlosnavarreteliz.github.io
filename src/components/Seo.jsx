import React from "react";

const SITE = {
  url: "https://carlosnavarrete.cl",
  title: "Dr. Eng. Carlos Navarrete",
  description:
    "Carlos Navarrete is Professor of Engineering at Universidad de Concepción and board member of its Center for Data and Artificial Intelligence (CDIA). He builds applied generative-AI systems and national-scale data products (DataChile, MonProgramme 2022) and writes on AI, employment and democracy in El Mostrador.",
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
  jobTitle: "Professor, Faculty of Engineering",
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: "Universidad de Concepción",
    url: "https://www.udec.cl",
  },
  memberOf: {
    "@type": "Organization",
    name: "Centro de Datos e Inteligencia Artificial (CDIA), Universidad de Concepción",
    url: "https://cdia.udec.cl",
    description: "Board member since June 2026",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Université de Toulouse",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Universidad de Concepción",
    },
  ],
  knowsAbout: [
    "Computational Social Science",
    "Artificial Intelligence",
    "Political Polarization",
    "Electoral Divisiveness",
    "Economic Geography",
    "Innovation Metrics",
    "Data Visualization",
  ],
  sameAs: [
    "https://scholar.google.com/citations?user=JqTxoC0AAAAJ",
    "https://github.com/cnavarreteliz",
    "https://x.com/cnavarreteliz",
    "https://www.linkedin.com/in/cnavarreteliz/",
  ],
};

export function Seo({title, description, pathname = "/", children, includePerson = false}) {
  const seo = {
    title: title ? `${title} — ${SITE.title}` : SITE.title,
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
      <meta name="theme-color" content="#faf8f5" />

      {/* Open Graph */}
      <meta property="og:type" content={includePerson ? "profile" : "website"} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content="Dr. Eng. Carlos Navarrete" />
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
