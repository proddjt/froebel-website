"use client";

import { Box, Container, SimpleGrid, Stack, Text } from "@mantine/core";
import { school } from "@/demo/content";

export function SiteFooter() {
  return (
    <Box
      component="footer"
      style={{ borderTop: "1px solid var(--mantine-color-default-border)" }}
      bg="var(--mantine-color-default-hover)"
    >
      <Container size="lg" py={40}>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
          <Stack gap={4}>
            <Text fw={800} fz="lg">
              {school.name}
            </Text>
            <Text c="dimmed">{school.tagline}</Text>
          </Stack>
          <Stack gap={4} c="dimmed">
            <Text>{school.address}</Text>
            <Text>{school.phone}</Text>
            <Text>{school.email}</Text>
          </Stack>
          <Stack gap={4} c="dimmed">
            <Text>Privacy policy</Text>
            <Text>Accessibility statement</Text>
            <Text>Transparent administration</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
