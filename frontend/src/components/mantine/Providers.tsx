"use client";

import { MantineProvider } from "@mantine/core";
import { theme } from "@/theme";

export function MantineDemoProvider({ children }: { children: React.ReactNode }) {
  return (
    // The site is light mode only.
    <MantineProvider theme={theme} forceColorScheme="light">
      {children}
    </MantineProvider>
  );
}
