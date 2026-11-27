import "@fontsource-variable/nunito";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mantineHtmlProps } from "@mantine/core";
import { Providers } from "@/components/Providers";
import { SiteHeader } from "@/components/mantine/SiteHeader";

export const metadata: Metadata = {
  title: "Kitchen sink (dev only)",
  robots: { index: false, follow: false },
};

// Development reference only: in production builds /mantine returns 404.
export default function MantineLayout({ children }: LayoutProps<"/mantine">) {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    // Light only: mantineHtmlProps already sets the colour scheme attribute.
    <html lang="en" {...mantineHtmlProps}>
      <body>
        <Providers>
          <SiteHeader />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
