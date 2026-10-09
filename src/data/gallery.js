// Photographic archive.
//
// Sources, so they can be credited or replaced later:
//  - datachile.jpg / utrecht.jpg — published by the UdeC Faculty of
//    Engineering (fi.udec.cl) in the 2020 profile piece; originally Carlos's
//    own photographs, supplied to the faculty.
//  - genia-udec.jpg — UdeC press coverage of the [genIA] panel on AI in
//    academia, 16 May 2025 (noticias.udec.cl, Dirección de Comunicaciones).
//  - minors-2026.jpg — fi.udec.cl, presentation of the Minors platform,
//    24 Sep 2026; the article captions it as Carlos presenting.
//  - panel-complejidad-2025.jpg — noticias.udec.cl, launch of Jeannette von
//    Wolfersdorff's book at the FI, 12 Jun 2025; the screen names the panel.
//  - linguistica-2025.jpg — noticias.udec.cl, III Encuentro Interprogramas de
//    Doctorados en Lingüística, Nov 2025, where he gave the opening keynote.
//  - publicaciones-2026.jpg — fi.udec.cl, the Faculty's day on scientific
//    publishing, May 2026.
//
// The 2019 team photo was removed at his request (Oct 2026). Check with him
// before adding any group photograph.
//
// All were resized to at most a 1600px long edge and re-encoded without
// EXIF/GPS, the same treatment the portrait gets.
//
// To add more: drop the file in static/gallery/ and add an entry here. `span`
// controls the grid footprint — "wide" takes two columns, "single" takes one.
// On desktop the grid has four columns; keep each row summing to four.

export const gallery = [
  {
    src: "/gallery/minors-2026.jpg",
    span: "wide",
    year: "2026",
    en: {caption: "Presenting the Minors platform to the Office of Teaching", place: "Concepción"},
    es: {caption: "Presentando la plataforma de Minors a la Dirección de Docencia", place: "Concepción"},
  },
  {
    src: "/gallery/panel-complejidad-2025.jpg",
    span: "wide",
    year: "2025",
    en: {caption: "Panel at the launch of Jeannette von Wolfersdorff's book", place: "Facultad de Ingeniería UdeC"},
    es: {caption: "Panel en la presentación del libro de Jeannette von Wolfersdorff", place: "Facultad de Ingeniería UdeC"},
  },
  {
    src: "/gallery/linguistica-2025.jpg",
    span: "wide",
    year: "2025",
    en: {caption: "Opening keynote, III Meeting of Doctorates in Linguistics", place: "Concepción"},
    es: {caption: "Charla inaugural, III Encuentro de Doctorados en Lingüística", place: "Concepción"},
  },
  {
    src: "/gallery/genia-udec.jpg",
    span: "wide",
    year: "2025",
    en: {caption: "Panel on AI in academia, [genIA] UdeC", place: "Concepción"},
    es: {caption: "Panel sobre IA en la academia, [genIA] UdeC", place: "Concepción"},
  },
  {
    src: "/gallery/publicaciones-2026.jpg",
    span: "single",
    year: "2026",
    en: {caption: "AI and scientific publishing", place: "Facultad de Ingeniería UdeC"},
    es: {caption: "IA y publicaciones científicas", place: "Facultad de Ingeniería UdeC"},
  },
  {
    src: "/gallery/utrecht.jpg",
    span: "single",
    year: "2019",
    en: {caption: "Visiting student, Utrecht University", place: "Netherlands"},
    es: {caption: "Estadía de investigación, Utrecht University", place: "Países Bajos"},
  },
  {
    src: "/gallery/datachile.jpg",
    span: "wide",
    year: "2017",
    en: {caption: "DataChile launch", place: "Santiago"},
    es: {caption: "Lanzamiento de DataChile", place: "Santiago"},
  },
];
