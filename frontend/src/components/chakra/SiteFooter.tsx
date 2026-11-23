"use client";

import { Box, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { school } from "@/demo/content";

export function SiteFooter() {
  return (
    <Box as="footer" borderTopWidth="1px" bg="bg.subtle">
      <Container maxW="6xl" py="10">
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="8">
          <Stack gap="1">
            <Text fontWeight="extrabold" fontSize="lg">
              {school.name}
            </Text>
            <Text color="fg.muted">{school.tagline}</Text>
          </Stack>
          <Stack gap="1" color="fg.muted">
            <Text>{school.address}</Text>
            <Text>{school.phone}</Text>
            <Text>{school.email}</Text>
          </Stack>
          <Stack gap="1" color="fg.muted">
            <Text>Privacy policy</Text>
            <Text>Accessibility statement</Text>
            <Text>Transparent administration</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
