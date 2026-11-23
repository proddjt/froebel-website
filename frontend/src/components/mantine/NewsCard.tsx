"use client";

import { Anchor, Badge, Card, Group, Image, Text } from "@mantine/core";
import { type NewsItem, formatDate } from "@/demo/content";
import classes from "./NewsCard.module.css";

const categoryColor: Record<NewsItem["category"], string | undefined> = {
  Events: "pink",
  Kindergarten: "orange",
  "Middle School": "grape",
  Notices: undefined, // undefined = theme primary colour
};

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Card withBorder radius="lg" padding="lg" className={classes.card} h="100%">
      <Card.Section>
        <Image src={item.image} alt="" style={{ aspectRatio: "16 / 9" }} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Badge variant="light" color={categoryColor[item.category]}>
          {item.category}
        </Badge>
        <Text component="time" dateTime={item.date} size="sm" c="dimmed">
          {formatDate(item.date)}
        </Text>
      </Group>

      <Text fw={800} size="lg" lh={1.25}>
        {/* The ::after on .link stretches the click area over the whole card */}
        <Anchor href={`#news-${item.id}`} c="inherit" underline="never" className={classes.link}>
          {item.title}
        </Anchor>
      </Text>
      <Text size="sm" c="dimmed" mt={6} lineClamp={3}>
        {item.excerpt}
      </Text>

      <Text size="sm" fw={700} c="var(--mantine-primary-color-light-color)" mt="auto" pt="md">
        Read more →
      </Text>
    </Card>
  );
}
