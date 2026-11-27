"use client";

import { MantineProvider } from "@mantine/core";
import { theme } from "@/theme";
import { DatesProvider } from "@mantine/dates";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <DatesProvider settings={{ locale: "it" }}>
        <Notifications />
        <ModalsProvider>{children}</ModalsProvider>
      </DatesProvider>
    </MantineProvider>
  );
}
