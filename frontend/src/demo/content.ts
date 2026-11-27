// Shared placeholder content used by all three kitchen sinks,
// so the libraries can be compared on identical data.

export const school = {
  name: "Istituto Froebel",
  tagline: "Nido · Infanzia · Primaria",
  motto: "Learning through play, growing through curiosity.",
  intro:
    "A welcoming community where children from 3 to 14 explore, create and discover — guided by teachers who know every child by name.",
  address: "Via Giacomo Leopardi 24, 80020 Crispano (NA)",
  phone: "+39 081 831 6118",
  email: "froebel@libero.it",
};

export type Slide = {
  id: string;
  image: string;
  title: string;
  caption: string;
};

export const slides: Slide[] = [
  {
    id: "garden",
    image: "/demo/garden.svg",
    title: "Our school garden",
    caption: "Kindergarten classes planted tomatoes, basil and sunflowers this spring.",
  },
  {
    id: "library",
    image: "/demo/library.svg",
    title: "The new library",
    caption: "Over 3,000 books, a reading corner and weekly storytelling sessions.",
  },
  {
    id: "art",
    image: "/demo/art.svg",
    title: "Art workshop",
    caption: "Middle school students exhibit their mosaics in the main hall.",
  },
  {
    id: "science",
    image: "/demo/science.svg",
    title: "Science week",
    caption: "Hands-on experiments, from volcanoes to simple circuits.",
  },
];

export type NewsCategory = "Events" | "Kindergarten" | "Middle School" | "Notices";

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  category: NewsCategory;
  image: string;
  author: string;
};

export const news: NewsItem[] = [
  {
    id: "christmas-concert",
    title: "Christmas concert: save the date",
    excerpt:
      "All classes will perform in the gym on December 18th. Families are welcome from 17:30.",
    date: "2026-11-20",
    category: "Events",
    image: "/demo/music.svg",
    author: "Secretariat",
  },
  {
    id: "open-day",
    title: "Open Day for new enrolments",
    excerpt:
      "Visit our classrooms, meet the teachers and discover our educational project for 2027/28.",
    date: "2026-11-15",
    category: "Notices",
    image: "/demo/library.svg",
    author: "Head Teacher",
  },
  {
    id: "garden-project",
    title: "The little gardeners are back",
    excerpt:
      "The kindergarten garden project continues with autumn bulbs and a new compost corner.",
    date: "2026-11-08",
    category: "Kindergarten",
    image: "/demo/garden.svg",
    author: "Ms. Bianchi",
  },
  {
    id: "sports-day",
    title: "Inter-school volleyball tournament",
    excerpt: "Our 3rd year team reached the semi-finals! Thanks to everyone who came to cheer.",
    date: "2026-10-29",
    category: "Middle School",
    image: "/demo/sports.svg",
    author: "Mr. Rossi",
  },
];

export const documents = [
  { id: "menu", title: "School canteen menu — Winter", type: "PDF", size: "240 KB" },
  { id: "calendar", title: "School calendar 2026/27", type: "PDF", size: "180 KB" },
  { id: "enrolment", title: "Enrolment form 2027/28", type: "DOCX", size: "95 KB" },
  { id: "ptof", title: "Educational plan (PTOF)", type: "PDF", size: "1.2 MB" },
];

export const events = [
  { id: "e1", date: "2026-12-04", title: "Parent–teacher meetings", time: "16:00–19:00" },
  { id: "e2", date: "2026-12-11", title: "Open Day", time: "09:30–12:30" },
  { id: "e3", date: "2026-12-18", title: "Christmas concert", time: "17:30" },
];

export const sections = [
  {
    id: "kindergarten",
    title: "Kindergarten",
    ages: "Ages 3–6",
    text: "Play-based learning inspired by Friedrich Fröbel: gifts, songs, gardening and lots of outdoor time.",
  },
  {
    id: "middle",
    title: "Middle School",
    ages: "Ages 11–14",
    text: "Small classes, English and science labs, music and sport — preparing curious, confident students.",
  },
];

export const faq = [
  {
    q: "When do enrolments open?",
    a: "Enrolments for the next school year open in January. Visit us during an Open Day first!",
  },
  {
    q: "Is there a canteen?",
    a: "Yes, meals are cooked on site every day. The weekly menu is published in the Documents section.",
  },
  {
    q: "What are the school hours?",
    a: "Kindergarten 8:00–16:00, Middle School 8:00–14:00 with optional afternoon activities.",
  },
];

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
