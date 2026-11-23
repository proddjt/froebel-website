// Theme colours offered by the colour switcher, mapped to Mantine palette names.

export type AccentId = "blue" | "teal" | "green" | "orange" | "pink" | "purple" | "red";

export const accents: {
  id: AccentId;
  label: string;
  swatch: string; // preview colour for the picker
  mantine: string; // Mantine primaryColor
}[] = [
  { id: "blue", label: "Blue", swatch: "#2563eb", mantine: "blue" },
  { id: "teal", label: "Teal", swatch: "#0d9488", mantine: "teal" },
  { id: "green", label: "Green", swatch: "#16a34a", mantine: "green" },
  { id: "orange", label: "Orange", swatch: "#ea580c", mantine: "orange" },
  { id: "pink", label: "Pink", swatch: "#db2777", mantine: "pink" },
  { id: "purple", label: "Purple", swatch: "#9333ea", mantine: "violet" },
  { id: "red", label: "Red", swatch: "#dc2626", mantine: "red" },
];

export const defaultAccent: AccentId = "blue";

export function isAccentId(value: unknown): value is AccentId {
  return accents.some((a) => a.id === value);
}

export function getAccent(id: AccentId) {
  return accents.find((a) => a.id === id) ?? accents[0];
}
