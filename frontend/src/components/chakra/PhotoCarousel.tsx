"use client";

import { Box, Carousel, IconButton, Image, Text } from "@chakra-ui/react";
import type { Slide } from "@/demo/content";

export function PhotoCarousel({ slides }: { slides: Slide[] }) {
  return (
    <Carousel.Root
      slideCount={slides.length}
      loop
      autoplay={{ delay: 5000 }}
      allowMouseDrag
      position="relative"
      aria-label="School photo gallery"
    >
      <Carousel.ItemGroup borderRadius="2xl" overflow="hidden">
        {slides.map((slide, index) => (
          <Carousel.Item key={slide.id} index={index}>
            <Box position="relative">
              <Image src={slide.image} alt={slide.title} aspectRatio={16 / 7} w="full" objectFit="cover" />
              <Box
                position="absolute"
                insetX="0"
                bottom="0"
                p={{ base: "4", md: "8" }}
                pt="16"
                color="white"
                bgGradient="to-t"
                gradientFrom="blackAlpha.800"
                gradientTo="transparent"
              >
                <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="extrabold">
                  {slide.title}
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }} opacity={0.9}>
                  {slide.caption}
                </Text>
              </Box>
            </Box>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4" mt="4">
        <Carousel.PrevTrigger asChild>
          <IconButton size="sm" variant="subtle" borderRadius="full" aria-label="Previous slide">
            ‹
          </IconButton>
        </Carousel.PrevTrigger>
        <Carousel.Indicators />
        <Carousel.NextTrigger asChild>
          <IconButton size="sm" variant="subtle" borderRadius="full" aria-label="Next slide">
            ›
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  );
}
