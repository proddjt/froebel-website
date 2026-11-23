"use client";

import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
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
      <Box as="section" position="relative" overflow="hidden" bg="colorPalette.subtle">
        <Decorations />
        <Container maxW="6xl" py={{ base: "14", md: "24" }} position="relative">
          <Stack gap="6" maxW="2xl">
            <Badge alignSelf="start" variant="solid" borderRadius="full" px="3" py="1">
              Enrolments 2027/28 open in January
            </Badge>
            <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.05" fontWeight="black">
              {school.motto}
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted">
              {school.intro}
            </Text>
            <HStack gap="3" wrap="wrap">
              <Button size="lg" borderRadius="full">
                Book an Open Day
              </Button>
              <Button size="lg" variant="outline" borderRadius="full" bg="bg">
                Discover the school
              </Button>
            </HStack>
            <HStack gap={{ base: "6", md: "10" }} pt="4">
              {stats.map((s) => (
                <Box key={s.label}>
                  <Text fontSize="3xl" fontWeight="black" color="colorPalette.fg">
                    {s.value}
                  </Text>
                  <Text fontSize="sm" color="fg.muted">
                    {s.label}
                  </Text>
                </Box>
              ))}
            </HStack>
          </Stack>
        </Container>
      </Box>

      {/* Schools */}
      <Container maxW="6xl" py="16">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
          {sections.map((s, i) => (
            <Card.Root key={s.id} variant="elevated" borderTopWidth="6px" borderTopColor={i === 0 ? "orange.400" : "purple.400"}>
              <Card.Body gap="2">
                <Badge alignSelf="start" colorPalette={i === 0 ? "orange" : "purple"} borderRadius="full">
                  {s.ages}
                </Badge>
                <Card.Title fontSize="2xl">{s.title}</Card.Title>
                <Card.Description fontSize="md">{s.text}</Card.Description>
              </Card.Body>
              <Card.Footer>
                <Button variant="ghost" px="0">
                  Learn more →
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Container>

      {/* Gallery */}
      <Container maxW="6xl" pb="16">
        <SectionTitle eyebrow="Gallery" title="Life at Froebel" />
        <PhotoCarousel slides={slides} />
      </Container>

      {/* News */}
      <Box bg="bg.muted" py="16">
        <Container maxW="6xl">
          <Flex justify="space-between" align="end" mb="8" gap="4" wrap="wrap">
            <SectionTitle eyebrow="News" title="Latest from the school" mb="0" />
            <Button variant="outline" borderRadius="full">
              All news
            </Button>
          </Flex>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="6">
            {news.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Events + documents */}
      <Container maxW="6xl" py="16">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="10">
          <Box>
            <SectionTitle eyebrow="Calendar" title="Upcoming events" />
            <Stack gap="3">
              {events.map((e) => {
                const d = new Date(e.date + "T12:00:00");
                return (
                  <HStack key={e.id} gap="4" p="3" borderWidth="1px" borderRadius="xl">
                    <Stack
                      gap="0"
                      align="center"
                      justify="center"
                      minW="14"
                      h="14"
                      borderRadius="lg"
                      bg="colorPalette.solid"
                      color="colorPalette.contrast"
                    >
                      <Text fontWeight="black" fontSize="xl" lineHeight="1">
                        {d.getDate()}
                      </Text>
                      <Text fontSize="xs" textTransform="uppercase">
                        {d.toLocaleDateString("en-GB", { month: "short" })}
                      </Text>
                    </Stack>
                    <Box>
                      <Text fontWeight="bold">{e.title}</Text>
                      <Text fontSize="sm" color="fg.muted">
                        {formatDate(e.date)} · {e.time}
                      </Text>
                    </Box>
                  </HStack>
                );
              })}
            </Stack>
          </Box>
          <Box>
            <SectionTitle eyebrow="Documents" title="Useful downloads" />
            <Stack gap="3">
              {documents.map((doc) => (
                <HStack key={doc.id} justify="space-between" p="3" borderWidth="1px" borderRadius="xl">
                  <HStack gap="3">
                    <Icon boxSize="8" color="colorPalette.fg" aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6" />
                      </svg>
                    </Icon>
                    <Box>
                      <Text fontWeight="semibold">{doc.title}</Text>
                      <Text fontSize="xs" color="fg.muted">
                        {doc.type} · {doc.size}
                      </Text>
                    </Box>
                  </HStack>
                  <Button size="sm" variant="subtle">
                    Download
                  </Button>
                </HStack>
              ))}
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>

      {/* CTA */}
      <Container maxW="6xl" pb="16">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap="6"
          p={{ base: "8", md: "12" }}
          borderRadius="3xl"
          bg="colorPalette.solid"
          color="colorPalette.contrast"
        >
          <Box>
            <Heading size="2xl">Come and visit us!</Heading>
            <Text opacity={0.9}>Next Open Day: Saturday 11 December, 9:30–12:30.</Text>
          </Box>
          <Button size="lg" borderRadius="full" bg="white" color="colorPalette.700" _hover={{ bg: "whiteAlpha.900" }}>
            Book a visit
          </Button>
        </Flex>
      </Container>

      <SiteFooter />
    </>
  );
}

function SectionTitle({ eyebrow, title, mb = "6" }: { eyebrow: string; title: string; mb?: string }) {
  return (
    <Box mb={mb}>
      <Text textTransform="uppercase" letterSpacing="wider" fontSize="sm" fontWeight="bold" color="colorPalette.fg">
        {eyebrow}
      </Text>
      <Heading as="h2" size="3xl" fontWeight="extrabold">
        {title}
      </Heading>
    </Box>
  );
}

function Decorations() {
  return (
    <Box aria-hidden position="absolute" inset="0" pointerEvents="none">
      <Box position="absolute" top="-10" right="-10" boxSize="64" borderRadius="full" bg="yellow.300" opacity={0.5} />
      <Box position="absolute" bottom="-16" right="40" boxSize="40" borderRadius="3xl" bg="pink.300" opacity={0.45} transform="rotate(18deg)" />
      <Box position="absolute" top="24" right="56" boxSize="20" borderRadius="full" bg="colorPalette.400" opacity={0.5} />
    </Box>
  );
}
