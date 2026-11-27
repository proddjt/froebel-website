import "@fontsource-variable/nunito";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";

import type { Metadata } from "next";
import { mantineHtmlProps } from "@mantine/core";
import { Providers } from "@/components/Providers";

import { site } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.fullName,
    title: site.name,
    description: site.description,
  },
};

export default function FroebelLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" {...mantineHtmlProps}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
