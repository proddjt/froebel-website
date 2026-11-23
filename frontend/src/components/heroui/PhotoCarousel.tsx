"use client";

import { Button } from "@heroui/react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import type { Slide } from "@/demo/content";

// HeroUI has no carousel component, so this one is Embla + HeroUI buttons + Tailwind.
export function PhotoCarousel({ slides }: { slides: Slide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section aria-roledescription="carousel" aria-label="School photo gallery">
      <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className="relative min-w-0 shrink-0 grow-0 basis-full"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.image} alt={slide.title} className="aspect-[16/7] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-16 text-white md:p-8">
                <p className="text-xl font-black md:text-3xl">{slide.title}</p>
                <p className="text-sm opacity-90 md:text-base">{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <Button isIconOnly size="sm" variant="secondary" className="rounded-full" aria-label="Previous slide" onPress={() => emblaApi?.scrollPrev()}>
          ‹
        </Button>
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === selected}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2.5 rounded-full transition-all ${i === selected ? "w-8 bg-accent" : "w-2.5 bg-default hover:bg-muted"}`}
            />
          ))}
        </div>
        <Button isIconOnly size="sm" variant="secondary" className="rounded-full" aria-label="Next slide" onPress={() => emblaApi?.scrollNext()}>
          ›
        </Button>
      </div>
    </section>
  );
}
