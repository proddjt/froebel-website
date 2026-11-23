"use client";

import { MantineProvider, createTheme } from "@mantine/core";
import { createContext, use } from "react";
import { type AccentId, getAccent } from "@/demo/accents";
import { useAccent } from "@/demo/use-accent";

const baseTheme = createTheme({
  fontFamily: "'Nunito Variable', system-ui, sans-serif",
  headings: { fontFamily: "'Nunito Variable', system-ui, sans-serif", fontWeight: "800" },
  defaultRadius: "md",
  // Use a darker shade of the palette in light mode for better text contrast.
  primaryShade: { light: 7, dark: 6 },
});

const AccentContext = createContext<{
  accent: AccentId;
  setAccent: (a: AccentId) => void;
} | null>(null);

export function useMantineAccent() {
  const ctx = use(AccentContext);
  if (!ctx) throw new Error("useMantineAccent must be used inside <MantineDemoProvider>");
  return ctx;
}


export function MantineDemoProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccent] = useAccent("froebel-mantine-accent");
  // primaryColor drives every component's default colour.
  const theme = { ...baseTheme, primaryColor: getAccent(accent).mantine };

  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="auto"
    >
      <AccentContext value={{ accent, setAccent }}>{children}</AccentContext>
    </MantineProvider>
  );
}
