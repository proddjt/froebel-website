import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import type { Metadata } from "next";
import { ColorSchemeScript } from "@mantine/core";
import { MantineDemoProvider } from "@/components/mantine/Providers";
import { SiteHeader } from "@/components/mantine/SiteHeader";

export const metadata: Metadata = { title: "Froebel School — Mantine" };

export default function MantineLayout({ children }: LayoutProps<"/mantine">) {
  return (
    <>
      {/* Sets data-mantine-color-scheme on <html> before paint to avoid a flash */}
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineDemoProvider>
        <SiteHeader />
        <main>{children}</main>
      </MantineDemoProvider>
    </>
  );
}
