// Photographic archive.
//
// Sources, so they can be credited or replaced later:
//  - datachile.jpg / utrecht.jpg / equipo.jpg — published by the UdeC Faculty
//    of Engineering (fi.udec.cl) in the 2020 profile piece; several were
//    originally Carlos's own photographs, supplied to the faculty.
//  - genia-udec.jpg — UdeC press coverage of the [genIA] panel on AI in
//    academia, 16 May 2025 (noticias.udec.cl).
//
// All four were resized to a 1600px long edge and stripped of EXIF/GPS, the
// same treatment the portrait gets.
//
// To add more: drop the file in static/gallery/ and add an entry here. `span`
// controls the grid footprint — "wide" takes two columns, "single" takes one.

export const gallery = [
  {
    src: "/gallery/datachile.jpg",
    span: "wide",
    year: "2017",
    en: {caption: "DataChile launch", place: "Santiago"},
    es: {caption: "Lanzamiento de DataChile", place: "Santiago"},
  },
  {
    src: "/gallery/genia-udec.jpg",
    span: "wide",
    year: "2025",
    en: {caption: "Panel on AI in academia, [genIA] UdeC", place: "Concepción"},
    es: {caption: "Panel sobre IA en la academia, [genIA] UdeC", place: "Concepción"},
  },
  {
    src: "/gallery/utrecht.jpg",
    span: "single",
    year: "2019",
    en: {caption: "Visiting student, Utrecht University", place: "Netherlands"},
    es: {caption: "Estadía de investigación, Utrecht University", place: "Países Bajos"},
  },
  {
    src: "/gallery/equipo.jpg",
    span: "single",
    year: "2019",
    en: {caption: "The team", place: "Concepción"},
    es: {caption: "El equipo", place: "Concepción"},
  },
];
