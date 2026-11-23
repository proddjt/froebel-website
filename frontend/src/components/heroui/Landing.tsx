"use client";

import { Button, Card, Chip } from "@heroui/react";
import { documents, events, news, school, sections, slides, formatDate } from "@/demo/content";
import { NewsCard } from "./NewsCard";
import { PhotoCarousel } from "./PhotoCarousel";
import { SiteFooter } from "./SiteFooter";

const stats = [
  { value: "1952", label: "Founded" },
  { value: "240", label: "Students" },
  { value: "18", label: "Max per class" },
];

export function Landing() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-accent-soft">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-10 -right-10 size-64 rounded-full bg-yellow-300/50" />
          <div className="absolute right-40 -bottom-16 size-40 rotate-[18deg] rounded-3xl bg-pink-300/45" />
          <div className="absolute top-24 right-56 size-20 rounded-full bg-accent/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-24">
          <div className="flex max-w-2xl flex-col gap-6">
            <Chip color="accent" variant="primary" className="self-start">
              Enrolments 2027/28 open in January
            </Chip>
            <h1 className="text-4xl leading-[1.05] font-black md:text-6xl">{school.motto}</h1>
            <p className="text-lg text-muted md:text-xl">{school.intro}</p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full">
                Book an Open Day
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-background">
                Discover the school
              </Button>
            </div>
            <div className="flex gap-6 pt-4 md:gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-accent">{s.value}</p>
                  <p className="text-sm text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schools */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((s, i) => (
            <Card key={s.id} className={`border-t-[6px] p-6 ${i === 0 ? "border-t-orange-400" : "border-t-purple-400"}`}>
              <Card.Header className="gap-2">
                <Chip size="sm" variant="soft" color={i === 0 ? "warning" : "default"} className={`self-start ${i === 1 ? "bg-purple-500/15 text-purple-700 dark:text-purple-300" : ""}`}>
                  {s.ages}
                </Chip>
                <Card.Title className="text-2xl font-extrabold">{s.title}</Card.Title>
                <Card.Description className="text-base">{s.text}</Card.Description>
              </Card.Header>
              <Card.Footer>
                <Button variant="ghost" className="px-0 text-accent">
                  Learn more →
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <SectionTitle eyebrow="Gallery" title="Life at Froebel" />
        <PhotoCarousel slides={slides} />
      </div>

      {/* News */}
      <section className="bg-background-tertiary py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <SectionTitle eyebrow="News" title="Latest from the school" className="mb-0" />
            <Button variant="outline" className="rounded-full">
              All news
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {news.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Events + documents */}
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Calendar" title="Upcoming events" />
          <ul className="flex flex-col gap-3">
            {events.map((e) => {
              const d = new Date(e.date + "T12:00:00");
              return (
                <li key={e.id} className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-3">
                  <div className="flex size-14 shrink-0 flex-col items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <span className="text-xl leading-none font-black">{d.getDate()}</span>
                    <span className="text-xs uppercase">{d.toLocaleDateString("en-GB", { month: "short" })}</span>
                  </div>
                  <div>
                    <p className="font-bold">{e.title}</p>
                    <p className="text-sm text-muted">
                      {formatDate(e.date)} · {e.time}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <SectionTitle eyebrow="Documents" title="Useful downloads" />
          <ul className="flex flex-col gap-3">
            {documents.map((doc) => (
              <li key={doc.id} className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface p-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent" aria-hidden>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold">{doc.title}</p>
                    <p className="text-xs text-muted">
                      {doc.type} · {doc.size}
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="secondary">
                  Download
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-accent p-8 text-accent-foreground md:flex-row md:p-12">
          <div>
            <h2 className="text-3xl font-extrabold">Come and visit us!</h2>
            <p className="opacity-90">Next Open Day: Saturday 11 December, 9:30–12:30.</p>
          </div>
          <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
            Book a visit
          </Button>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}

function SectionTitle({ eyebrow, title, className = "mb-6" }: { eyebrow: string; title: string; className?: string }) {
  return (
    <div className={className}>
      <p className="text-sm font-extrabold tracking-wider text-accent uppercase">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold">{title}</h2>
    </div>
  );
}
