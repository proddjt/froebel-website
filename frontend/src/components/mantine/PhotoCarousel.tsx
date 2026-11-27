"use client";

import { Carousel } from "@mantine/carousel";
import { Box, Image, Text } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import type { Slide } from "@/demo/content";

export function PhotoCarousel({ slides }: { slides: Slide[] }) {
  // Created once and kept stable across renders
  const [autoplay] = useState(() =>
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <Carousel
      aria-label="School photo gallery"
      withIndicators
      emblaOptions={{ loop: true }}
      plugins={[autoplay]}
      styles={{
        root: { borderRadius: "var(--mantine-radius-xl)", overflow: "hidden" },
        indicator: { width: 10, height: 10, transition: "width 250ms ease" },
      }}
    >
      {slides.map((slide) => (
        <Carousel.Slide key={slide.id}>
          <Box pos="relative">
            <Image src={slide.image} alt={slide.title} style={{ aspectRatio: "16 / 7" }} />
            <Box
              pos="absolute"
              left={0}
              right={0}
              bottom={0}
              p={{ base: "md", md: "xl" }}
              pt={64}
              pb={{ base: 40, md: 48 }}
              c="white"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,.75), transparent)" }}
            >
              <Text fz={{ base: "xl", md: 30 }} fw={900}>
                {slide.title}
              </Text>
              <Text fz={{ base: "sm", md: "md" }} opacity={0.9}>
                {slide.caption}
              </Text>
            </Box>
          </Box>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
