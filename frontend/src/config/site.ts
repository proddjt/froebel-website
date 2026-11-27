/**
 * Istituto Froebel — general site information.
 * Single source of truth for metadata, header, footer and contact pages.
 *
 * Sources (Nov 2026): MIUR "Scuola in Chiaro", the school's Facebook/Instagram
 * pages and public business listings. Please double-check with the school office.
 */
export const site = {
  name: "Istituto Froebel",
  fullName: "Istituto Paritario Froebel Multilingue",
  legalName: "Froebel Società Cooperativa Sociale",
  url: "https://www.istitutofroebelmultilingue.it",
  locale: "it_IT",

  description:
    "Istituto Paritario Froebel Multilingue a Crispano (NA): asilo nido, scuola dell'infanzia e scuola primaria paritaria, con percorso bilingue e didattica 4.0.",

  levels: ["Asilo nido", "Scuola dell'infanzia", "Scuola primaria"],

  address: {
    street: "Via Giacomo Leopardi, 24",
    postalCode: "80020",
    city: "Crispano",
    province: "NA",
    region: "Campania",
    country: "IT",
  },

  contacts: {
    phone: "+39 081 831 6118", // scuola dell'infanzia (MIUR) / Facebook
    phonePrimaria: "+39 081 830 1007", // scuola primaria (MIUR)
    mobile: "+39 338 386 9916",
    email: "froebel@libero.it",
    pec: "froebelcoopsociale@pec.it",
  },

  openingHours: "Lunedì–Venerdì, 8:15–18:00",

  // Codici meccanografici
  schoolCodes: {
    infanzia: "NA1A442001",
    primaria: "NA1E11600Q",
  },

  social: {
    facebook: "https://www.facebook.com/I.Froebel/",
    instagram: "https://www.instagram.com/istituto.froebel/",
  },
} as const;
