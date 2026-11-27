"use client";

import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
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
      <Box
        component="section"
        pos="relative"
        style={{ overflow: "hidden", background: "var(--mantine-primary-color-light)" }}
      >
        <Decorations />
        <Container size="lg" py={{ base: 56, md: 96 }} pos="relative">
          <Stack gap="lg" maw={680}>
            <Badge size="lg" radius="xl" variant="filled">
              Enrolments 2027/28 open in January
            </Badge>
            <Title order={1} fz={{ base: 40, md: 60 }} lh={1.05} fw={900}>
              {school.motto}
            </Title>
            <Text fz={{ base: "lg", md: "xl" }} c="dimmed">
              {school.intro}
            </Text>
            <Group gap="sm">
              <Button size="lg" radius="xl">
                Book an Open Day
              </Button>
              <Button size="lg" radius="xl" variant="default">
                Discover the school
              </Button>
            </Group>
            <Group gap={40} pt="md">
              {stats.map((s) => (
                <div key={s.label}>
                  <Text fz={30} fw={900} c="var(--mantine-primary-color-light-color)">
                    {s.value}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {s.label}
                  </Text>
                </div>
              ))}
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* Schools */}
      <Container size="lg" py={64}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          {sections.map((s, i) => {
            const color = i === 0 ? "orange" : "grape";
            return (
              <Card
                key={s.id}
                shadow="md"
                radius="lg"
                padding="xl"
                style={{ borderTop: `6px solid var(--mantine-color-${color}-5)` }}
              >
                <Badge color={color} variant="light" radius="xl">
                  {s.ages}
                </Badge>
                <Title order={3} mt="sm">
                  {s.title}
                </Title>
                <Text c="dimmed" mt={6}>
                  {s.text}
                </Text>
                <Button variant="subtle" mt="md" px={0} w="fit-content">
                  Learn more →
                </Button>
              </Card>
            );
          })}
        </SimpleGrid>
      </Container>

      {/* Gallery */}
      <Container size="lg" pb={64}>
        <SectionTitle eyebrow="Gallery" title="Life at Froebel" />
        <PhotoCarousel slides={slides} />
      </Container>

      {/* News */}
      <Box py={64} bg="var(--mantine-color-default-hover)">
        <Container size="lg">
          <Group justify="space-between" align="end" mb="xl">
            <SectionTitle eyebrow="News" title="Latest from the school" mb={0} />
            <Button variant="outline" radius="xl">
              All news
            </Button>
          </Group>
          <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing="lg">
            {news.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Events + documents */}
      <Container size="lg" py={64}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40}>
          <div>
            <SectionTitle eyebrow="Calendar" title="Upcoming events" />
            <Stack gap="sm">
              {events.map((e) => {
                const d = new Date(e.date + "T12:00:00");
                return (
                  <Paper key={e.id} withBorder radius="lg" p="sm">
                    <Group gap="md" wrap="nowrap">
                      <ThemeIcon
                        size={56}
                        radius="md"
                        style={{ flexDirection: "column", lineHeight: 1 }}
                      >
                        <Text fw={900} fz="xl" lh={1}>
                          {d.getDate()}
                        </Text>
                        <Text fz="xs" tt="uppercase">
                          {d.toLocaleDateString("en-GB", { month: "short" })}
                        </Text>
                      </ThemeIcon>
                      <div>
                        <Text fw={700}>{e.title}</Text>
                        <Text size="sm" c="dimmed">
                          {formatDate(e.date)} · {e.time}
                        </Text>
                      </div>
                    </Group>
                  </Paper>
                );
              })}
            </Stack>
          </div>
          <div>
            <SectionTitle eyebrow="Documents" title="Useful downloads" />
            <Stack gap="sm">
              {documents.map((doc) => (
                <Paper key={doc.id} withBorder radius="lg" p="sm">
                  <Group justify="space-between" wrap="nowrap">
                    <Group gap="sm" wrap="nowrap">
                      <ThemeIcon variant="light" size="lg" radius="md" aria-hidden>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <path d="M14 2v6h6" />
                        </svg>
                      </ThemeIcon>
                      <div>
                        <Text fw={600}>{doc.title}</Text>
                        <Text size="xs" c="dimmed">
                          {doc.type} · {doc.size}
                        </Text>
                      </div>
                    </Group>
                    <Button size="xs" variant="light">
                      Download
                    </Button>
                  </Group>
                </Paper>
              ))}
            </Stack>
          </div>
        </SimpleGrid>
      </Container>

      {/* CTA */}
      <Container size="lg" pb={64}>
        <Paper
          radius={32}
          p={{ base: "xl", md: 48 }}
          bg="var(--mantine-primary-color-filled)"
          c="white"
        >
          <Group justify="space-between" gap="lg">
            <div>
              <Title order={2}>Come and visit us!</Title>
              <Text opacity={0.9}>Next Open Day: Saturday 11 December, 9:30–12:30.</Text>
            </div>
            <Button
              size="lg"
              radius="xl"
              color="white"
              c="var(--mantine-primary-color-filled)"
              variant="filled"
            >
              Book a visit
            </Button>
          </Group>
        </Paper>
      </Container>

      <SiteFooter />
    </>
  );
}

function SectionTitle({
  eyebrow,
  title,
  mb = "lg",
}: {
  eyebrow: string;
  title: string;
  mb?: string | number;
}) {
  return (
    <Box mb={mb}>
      <Text tt="uppercase" fz="sm" fw={800} lts={1} c="var(--mantine-primary-color-light-color)">
        {eyebrow}
      </Text>
      <Title order={2} fz={34}>
        {title}
      </Title>
    </Box>
  );
}

function Decorations() {
  const common = { position: "absolute" as const, pointerEvents: "none" as const };
  return (
    <Box aria-hidden pos="absolute" inset={0}>
      <Box
        style={{
          ...common,
          top: -40,
          right: -40,
          width: 256,
          height: 256,
          borderRadius: "50%",
          background: "var(--mantine-color-yellow-3)",
          opacity: 0.5,
        }}
      />
      <Box
        style={{
          ...common,
          bottom: -64,
          right: 160,
          width: 160,
          height: 160,
          borderRadius: 24,
          background: "var(--mantine-color-pink-3)",
          opacity: 0.45,
          transform: "rotate(18deg)",
        }}
      />
      <Box
        style={{
          ...common,
          top: 96,
          right: 224,
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "var(--mantine-primary-color-4)",
          opacity: 0.5,
        }}
      />
    </Box>
  );
}
