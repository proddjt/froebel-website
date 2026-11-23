import NextLink from "next/link";
import { school } from "@/demo/content";
import { ThemeControls } from "./ThemeControls";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="h-1 bg-gradient-to-r from-accent via-yellow-400 to-pink-400" />
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <NextLink href="/heroui" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-lg font-black text-accent-foreground">
            F
          </span>
          <span className="leading-tight">
            <span className="block font-extrabold">{school.name}</span>
            <span className="block text-xs text-muted">{school.tagline}</span>
          </span>
        </NextLink>

        <nav className="hidden items-center gap-5 font-semibold md:flex">
          <NextLink href="/heroui" className="hover:text-accent">
            Home
          </NextLink>
          <NextLink href="/heroui/kitchensink" className="hover:text-accent">
            Kitchen sink
          </NextLink>
          {/* Plain <a> on purpose: full reload keeps library CSS isolated */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" className="hover:text-accent">
            All demos
          </a>
        </nav>

        <ThemeControls />
      </div>
    </header>
  );
}
