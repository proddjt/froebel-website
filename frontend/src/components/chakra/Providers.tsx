"use client";

import { Box, ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { createContext, use } from "react";
import { type AccentId, getAccent } from "@/demo/accents";
import { useAccent } from "@/demo/use-accent";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Nunito Variable', system-ui, sans-serif" },
        body: { value: "'Nunito Variable', system-ui, sans-serif" },
      },
      radii: {
        // A bit rounder than the default: friendly, but not bubbly.
        l1: { value: "0.375rem" },
        l2: { value: "0.625rem" },
        l3: { value: "0.875rem" },
      },
    },
  },
});

const AccentContext = createContext<{
  accent: AccentId;
  setAccent: (a: AccentId) => void;
} | null>(null);

export function useChakraAccent() {
  const ctx = use(AccentContext);
  if (!ctx) throw new Error("useChakraAccent must be used inside <ChakraDemoProvider>");
  return ctx;
}

export function ChakraDemoProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccent] = useAccent("froebel-chakra-accent");

  return (
    // ThemeProvider must wrap ChakraProvider: its inline script has to come before
    // Emotion's global <style> tags, otherwise React reports a hydration mismatch.
    // Chakra's dark mode is driven by a `.dark` class on <html>.
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ChakraProvider value={system}>
        <AccentContext value={{ accent, setAccent }}>
          {/* colorPalette cascades: every Button, Badge, Switch… below uses the chosen accent. */}
          <Box colorPalette={getAccent(accent).chakra} minH="100vh" bg="bg" color="fg">
            {children}
          </Box>
        </AccentContext>
      </ChakraProvider>
    </ThemeProvider>
  );
}
