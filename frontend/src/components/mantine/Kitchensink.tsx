"use client";

import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  Container,
  Group,
  Progress,
  SimpleGrid,
  Stack,
  Switch,
  Tabs,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { faq, news, slides } from "@/demo/content";
import { NewsCard } from "./NewsCard";
import { PhotoCarousel } from "./PhotoCarousel";

export function Kitchensink() {
  return (
    <Container size="lg" py={40}>
      <Stack gap={48}>
        <div>
          <Title order={1} fw={900}>
            Mantine kitchen sink
          </Title>
          <Text c="dimmed">All components use the shared theme from src/theme.ts.</Text>
        </div>

        <Demo title="Buttons">
          <Group gap="sm">
            <Button>Filled</Button>
            <Button variant="light">Light</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="default">Default</Button>
            <Button variant="gradient" gradient={{ from: "orange", to: "pink", deg: 90 }}>
              Gradient
            </Button>
            <Button radius="xl">Rounded</Button>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </Group>
        </Demo>

        <Demo title="Badges">
          <Group gap="xs">
            <Badge>Accent</Badge>
            <Badge color="orange" variant="light">
              Kindergarten
            </Badge>
            <Badge color="grape" variant="light">
              Middle School
            </Badge>
            <Badge color="pink" variant="light">
              Events
            </Badge>
            <Badge color="green" variant="dot">
              Published
            </Badge>
            <Badge color="red" variant="outline">
              Urgent
            </Badge>
          </Group>
        </Demo>

        <Demo title="Alerts">
          <Stack gap="sm">
            <Alert variant="light" title="School closed on 8 December">
              National holiday — lessons resume on 9 December.
            </Alert>
            <Alert variant="light" color="yellow" title="Enrolment documents due by 31 January." />
            <Alert variant="light" color="green" title="Your Open Day booking is confirmed." />
          </Stack>
        </Demo>

        <Demo title="Form">
          <SimpleGrid cols={{ base: 1, md: 2 }}>
            <TextInput label="Parent name" placeholder="Maria Rossi" withAsterisk />
            <TextInput
              label="Email"
              type="email"
              placeholder="maria@example.com"
              description="We will only use it to reply."
            />
            <Textarea
              label="Message"
              placeholder="I'd like to book a visit…"
              style={{ gridColumn: "1 / -1" }}
            />
            <Checkbox defaultChecked label="I accept the privacy policy" />
            <Switch defaultChecked label="Subscribe to the newsletter" />
          </SimpleGrid>
        </Demo>

        <Demo title="Tabs">
          <Tabs defaultValue="kinder" variant="pills" radius="xl">
            <Tabs.List>
              <Tabs.Tab value="kinder">Kindergarten</Tabs.Tab>
              <Tabs.Tab value="middle">Middle School</Tabs.Tab>
              <Tabs.Tab value="after">After school</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="kinder" pt="md">
              Play-based learning, music and outdoor time.
            </Tabs.Panel>
            <Tabs.Panel value="middle" pt="md">
              Small classes, labs and languages.
            </Tabs.Panel>
            <Tabs.Panel value="after" pt="md">
              Sports, choir and homework club until 18:00.
            </Tabs.Panel>
          </Tabs>
        </Demo>

        <Demo title="Accordion (FAQ)">
          <Accordion variant="separated" radius="md" defaultValue="0">
            {faq.map((f, i) => (
              <Accordion.Item key={f.q} value={String(i)}>
                <Accordion.Control fw={600}>{f.q}</Accordion.Control>
                <Accordion.Panel>{f.a}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Demo>

        <Demo title="Avatars & progress">
          <Stack gap="lg">
            <Avatar.Group>
              {["Anna Bianchi", "Luca Rossi", "Giulia Verdi", "Marco Neri"].map((n) => (
                <Avatar key={n} name={n} color="initials" />
              ))}
            </Avatar.Group>
            <Box maw={420}>
              <Text size="sm" mb={6}>
                School trip fundraising — 68%
              </Text>
              <Progress value={68} radius="xl" size="lg" striped animated />
            </Box>
          </Stack>
        </Demo>

        <Demo title="Carousel">
          <PhotoCarousel slides={slides} />
        </Demo>

        <Demo title="News cards">
          <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing="lg">
            {news.slice(0, 3).map((n) => (
              <NewsCard key={n.id} item={n} />
            ))}
          </SimpleGrid>
        </Demo>
      </Stack>
    </Container>
  );
}

function Demo({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <Title
        order={2}
        fz="xl"
        mb="md"
        pb={8}
        style={{ borderBottom: "2px solid var(--mantine-primary-color-light)" }}
      >
        {title}
      </Title>
      {children}
    </section>
  );
}
