"use client";

import { Anchor, Box, Container, Group, Text, ThemeIcon } from "@mantine/core";
import NextLink from "next/link";
import { school } from "@/demo/content";

export function SiteHeader() {
  return (
    <Box
      component="header"
      pos="sticky"
      top={0}
      style={{
        zIndex: 100,
        backdropFilter: "blur(8px)",
        background: "color-mix(in srgb, var(--mantine-color-body) 85%, transparent)",
        borderBottom: "1px solid var(--mantine-color-default-border)",
      }}
    >
      <Box
        h={4}
        style={{
          background:
            "linear-gradient(90deg, var(--mantine-primary-color-filled), var(--mantine-color-yellow-5), var(--mantine-color-pink-5))",
        }}
      />
      <Container size="lg" py="sm">
        <Group justify="space-between" gap="md">
          <Anchor component={NextLink} href="/mantine" underline="never" c="inherit">
            <Group gap="sm">
              <ThemeIcon size={40} radius="lg" fw={900} fz="lg">
                F
              </ThemeIcon>
              <div style={{ lineHeight: 1.1 }}>
                <Text fw={800}>{school.name}</Text>
                <Text size="xs" c="dimmed">
                  {school.tagline}
                </Text>
              </div>
            </Group>
          </Anchor>

          <Group gap="lg" visibleFrom="md" fw={600}>
            <Anchor component={NextLink} href="/mantine" c="inherit">
              Home
            </Anchor>
            <Anchor component={NextLink} href="/mantine/kitchensink" c="inherit">
              Kitchen sink
            </Anchor>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
