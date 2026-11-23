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
  Field,
  Heading,
  HStack,
  Input,
  Progress,
  SimpleGrid,
  Stack,
  Switch,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { faq, news, slides } from "@/demo/content";
import { NewsCard } from "./NewsCard";
import { PhotoCarousel } from "./PhotoCarousel";

export function Kitchensink() {
  return (
    <Container maxW="6xl" py="10">
      <Stack gap="12">
        <Box>
          <Heading as="h1" size="4xl" fontWeight="black">
            Chakra UI kitchen sink
          </Heading>
          <Text color="fg.muted">Change the colour and mode from the header: everything below follows.</Text>
        </Box>

        <Demo title="Buttons">
          <HStack wrap="wrap" gap="3">
            <Button>Solid</Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="surface">Surface</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button borderRadius="full">Rounded</Button>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </HStack>
        </Demo>

        <Demo title="Badges">
          <HStack wrap="wrap" gap="2">
            <Badge variant="solid">Accent</Badge>
            <Badge colorPalette="orange">Kindergarten</Badge>
            <Badge colorPalette="purple">Middle School</Badge>
            <Badge colorPalette="pink">Events</Badge>
            <Badge colorPalette="green">Published</Badge>
            <Badge colorPalette="red">Urgent</Badge>
          </HStack>
        </Demo>

        <Demo title="Alerts">
          <Stack gap="3">
            <Alert.Root status="info">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>School closed on 8 December</Alert.Title>
                <Alert.Description>National holiday — lessons resume on 9 December.</Alert.Description>
              </Alert.Content>
            </Alert.Root>
            <Alert.Root status="warning">
              <Alert.Indicator />
              <Alert.Title>Enrolment documents due by 31 January.</Alert.Title>
            </Alert.Root>
            <Alert.Root status="success">
              <Alert.Indicator />
              <Alert.Title>Your Open Day booking is confirmed.</Alert.Title>
            </Alert.Root>
          </Stack>
        </Demo>

        <Demo title="Form">
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
            <Field.Root required>
              <Field.Label>
                Parent name <Field.RequiredIndicator />
              </Field.Label>
              <Input placeholder="Maria Rossi" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input type="email" placeholder="maria@example.com" />
              <Field.HelperText>We will only use it to reply.</Field.HelperText>
            </Field.Root>
            <Field.Root gridColumn={{ md: "span 2" }}>
              <Field.Label>Message</Field.Label>
              <Textarea placeholder="I'd like to book a visit…" />
            </Field.Root>
            <Checkbox.Root defaultChecked>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>I accept the privacy policy</Checkbox.Label>
            </Checkbox.Root>
            <Switch.Root defaultChecked>
              <Switch.HiddenInput />
              <Switch.Control />
              <Switch.Label>Subscribe to the newsletter</Switch.Label>
            </Switch.Root>
          </SimpleGrid>
        </Demo>

        <Demo title="Tabs">
          <Tabs.Root defaultValue="kinder" variant="enclosed">
            <Tabs.List>
              <Tabs.Trigger value="kinder">Kindergarten</Tabs.Trigger>
              <Tabs.Trigger value="middle">Middle School</Tabs.Trigger>
              <Tabs.Trigger value="after">After school</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="kinder">Play-based learning, music and outdoor time.</Tabs.Content>
            <Tabs.Content value="middle">Small classes, labs and languages.</Tabs.Content>
            <Tabs.Content value="after">Sports, choir and homework club until 18:00.</Tabs.Content>
          </Tabs.Root>
        </Demo>

        <Demo title="Accordion (FAQ)">
          <Accordion.Root collapsible defaultValue={["0"]} variant="enclosed">
            {faq.map((f, i) => (
              <Accordion.Item key={f.q} value={String(i)}>
                <Accordion.ItemTrigger>
                  <Text flex="1" fontWeight="semibold">
                    {f.q}
                  </Text>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>{f.a}</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Demo>

        <Demo title="Avatars & progress">
          <Stack gap="5">
            <HStack gap="3">
              {["Anna Bianchi", "Luca Rossi", "Giulia Verdi", "Marco Neri"].map((n) => (
                <Avatar.Root key={n} variant="solid">
                  <Avatar.Fallback name={n} />
                </Avatar.Root>
              ))}
            </HStack>
            <Progress.Root value={68} maxW="md">
              <Progress.Label mb="2">School trip fundraising — 68%</Progress.Label>
              <Progress.Track borderRadius="full">
                <Progress.Range />
              </Progress.Track>
            </Progress.Root>
          </Stack>
        </Demo>

        <Demo title="Carousel">
          <PhotoCarousel slides={slides} />
        </Demo>

        <Demo title="News cards">
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="6">
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
    <Box as="section">
      <Heading as="h2" size="lg" mb="4" pb="2" borderBottomWidth="2px" borderColor="colorPalette.muted">
        {title}
      </Heading>
      {children}
    </Box>
  );
}
