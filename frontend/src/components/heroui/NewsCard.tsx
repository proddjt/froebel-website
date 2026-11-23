"use client";

import { Card, Chip } from "@heroui/react";
import { type NewsItem, formatDate } from "@/demo/content";

const categoryChip: Record<NewsItem["category"], { color: "accent" | "warning" | "success" | "danger" | "default"; className?: string }> = {
  Events: { color: "default", className: "bg-pink-500/15 text-pink-700 dark:text-pink-300" },
  Kindergarten: { color: "warning" },
  "Middle School": { color: "default", className: "bg-purple-500/15 text-purple-700 dark:text-purple-300" },
  Notices: { color: "accent" },
};

export function NewsCard({ item }: { item: NewsItem }) {
  const chip = categoryChip[item.category];
  return (
    <Card className="group relative h-full gap-0 overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-xl focus-within:-translate-y-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.image} alt="" className="aspect-video w-full object-cover" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <Chip size="sm" variant="soft" color={chip.color} className={chip.className}>
            {item.category}
          </Chip>
          <time dateTime={item.date} className="text-sm text-muted">
            {formatDate(item.date)}
          </time>
        </div>
        <Card.Header className="p-0">
          <Card.Title className="text-lg font-extrabold leading-snug">
            {/* after:absolute stretches the link over the whole card */}
            <a href={`#news-${item.id}`} className="after:absolute after:inset-0 focus-visible:outline-none">
              {item.title}
            </a>
          </Card.Title>
          <Card.Description className="line-clamp-3">{item.excerpt}</Card.Description>
        </Card.Header>
        <span className="mt-auto pt-2 text-sm font-bold text-accent">Read more →</span>
      </div>
    </Card>
  );
}
