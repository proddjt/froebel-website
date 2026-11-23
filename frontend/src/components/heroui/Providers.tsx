"use client";

import { ThemeProvider } from "next-themes";
import { createContext, use, useEffect } from "react";
import type { AccentId } from "@/demo/accents";
import { useAccent } from "@/demo/use-accent";
import { HERO_ACCENT_KEY } from "./accent-key";

const AccentContext = createContext<{
  accent: AccentId;
  setAccent: (a: AccentId) => void;
} | null>(null);

export function useHeroAccent() {
  const ctx = use(AccentContext);
  if (!ctx) throw new Error("useHeroAccent must be used inside <HeroDemoProvider>");
  return ctx;
}

export function HeroDemoProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccent] = useAccent(HERO_ACCENT_KEY);

  // HeroUI is themed purely with CSS variables: we only flip an attribute on <html>.
  useEffect(() => {
    document.documentElement.dataset.accent = accent;
  }, [accent]);

  return (
    // HeroUI reads both the `dark` class and data-theme="dark".
    <ThemeProvider attribute={["class", "data-theme"]} defaultTheme="system" enableSystem disableTransitionOnChange>
      <AccentContext value={{ accent, setAccent }}>{children}</AccentContext>
    </ThemeProvider>
  );
}
