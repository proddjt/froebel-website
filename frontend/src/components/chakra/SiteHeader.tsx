"use client";

import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { school } from "@/demo/content";
import { ThemeControls } from "./ThemeControls";

export function SiteHeader() {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="bg/85"
      backdropFilter="blur(8px)"
      borderBottomWidth="1px"
    >
      <Box h="1" bgGradient="to-r" gradientFrom="colorPalette.solid" gradientVia="yellow.400" gradientTo="pink.400" />
      <Container maxW="6xl" py="3">
        <Flex align="center" justify="space-between" gap="4" wrap="wrap">
          <Link asChild _hover={{ textDecoration: "none" }}>
            <NextLink href="/chakra">
              <HStack gap="3">
                <Flex
                  boxSize="10"
                  borderRadius="xl"
                  bg="colorPalette.solid"
                  color="colorPalette.contrast"
                  align="center"
                  justify="center"
                  fontWeight="black"
                  fontSize="lg"
                >
                  F
                </Flex>
                <Box lineHeight="1.1">
                  <Text fontWeight="extrabold">{school.name}</Text>
                  <Text fontSize="xs" color="fg.muted">
                    {school.tagline}
                  </Text>
                </Box>
              </HStack>
            </NextLink>
          </Link>

          <HStack gap="5" display={{ base: "none", md: "flex" }} fontWeight="semibold">
            <Link asChild>
              <NextLink href="/chakra">Home</NextLink>
            </Link>
            <Link asChild>
              <NextLink href="/chakra/kitchensink">Kitchen sink</NextLink>
            </Link>
            {/* Plain <a> on purpose: full reload keeps library CSS isolated */}
            <Link href="/">All demos</Link>
          </HStack>

          <ThemeControls />
        </Flex>
      </Container>
    </Box>
  );
}
