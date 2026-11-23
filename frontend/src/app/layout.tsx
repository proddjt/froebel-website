import type { Metadata } from "next";
import "@fontsource-variable/nunito";
import "./globals.css";

export const metadata: Metadata = {
  title: "Froebel School",
  description: "Kindergarten & Middle School",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
