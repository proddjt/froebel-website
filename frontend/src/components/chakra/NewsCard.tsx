"use client";

import { Badge, Card, HStack, Image, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { type NewsItem, formatDate } from "@/demo/content";

const categoryColor: Record<NewsItem["category"], string> = {
  Events: "pink",
  Kindergarten: "orange",
  "Middle School": "purple",
  Notices: "colorPalette", // follows the chosen theme colour
};

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <LinkBox asChild>
      <Card.Root
        overflow="hidden"
        variant="outline"
        transition="transform 0.15s, box-shadow 0.15s"
        _hover={{ transform: "translateY(-3px)", shadow: "lg" }}
        h="full"
      >
        <Image src={item.image} alt="" aspectRatio={16 / 9} objectFit="cover" />
        <Card.Body gap="2">
          <HStack justify="space-between">
            <Badge
              colorPalette={categoryColor[item.category]}
              variant="subtle"
              borderRadius="full"
              px="2.5"
            >
              {item.category}
            </Badge>
            <Text asChild fontSize="sm" color="fg.muted">
              <time dateTime={item.date}>{formatDate(item.date)}</time>
            </Text>
          </HStack>
          <Card.Title>
            <LinkOverlay href={`#news-${item.id}`}>{item.title}</LinkOverlay>
          </Card.Title>
          <Card.Description lineClamp={3}>{item.excerpt}</Card.Description>
        </Card.Body>
        <Card.Footer>
          <Text fontSize="sm" color="colorPalette.fg" fontWeight="semibold">
            Read more →
          </Text>
        </Card.Footer>
      </Card.Root>
    </LinkBox>
  );
}
