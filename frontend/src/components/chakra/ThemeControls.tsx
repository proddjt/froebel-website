"use client";

import { Box, HStack, Portal, Select, createListCollection } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { accents, isAccentId } from "@/demo/accents";
import { useChakraAccent } from "./Providers";

const accentCollection = createListCollection({
  items: accents.map((a) => ({ value: a.id, label: a.label, swatch: a.swatch })),
});

const modeCollection = createListCollection({
  items: [
    { value: "light", label: "☀️ Light" },
    { value: "dark", label: "🌙 Dark" },
    { value: "system", label: "💻 System" },
  ],
});

const noop = () => () => {};
function useMounted() {
  return useSyncExternalStore(noop, () => true, () => false);
}

export function ThemeControls() {
  const { accent, setAccent } = useChakraAccent();
  const { theme, setTheme } = useTheme();
  const mounted = useMounted(); // theme is unknown on the server

  return (
    <HStack gap="2">
      <Select.Root
        collection={accentCollection}
        size="sm"
        width="140px"
        value={[accent]}
        onValueChange={(e) => {
          const next = e.value[0];
          if (isAccentId(next)) setAccent(next);
        }}
      >
        <Select.HiddenSelect />
        <Select.Label srOnly>Theme colour</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <HStack gap="2">
              <Box boxSize="3" borderRadius="full" bg="colorPalette.solid" />
              <Select.ValueText placeholder="Colour" />
            </HStack>
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {accentCollection.items.map((item) => (
                <Select.Item item={item} key={item.value}>
                  <HStack gap="2">
                    <Box boxSize="3" borderRadius="full" style={{ background: item.swatch }} />
                    {item.label}
                  </HStack>
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>

      <Select.Root
        collection={modeCollection}
        size="sm"
        width="130px"
        value={mounted && theme ? [theme] : []}
        onValueChange={(e) => setTheme(e.value[0])}
      >
        <Select.HiddenSelect />
        <Select.Label srOnly>Light or dark mode</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Mode" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {modeCollection.items.map((item) => (
                <Select.Item item={item} key={item.value}>
                  {item.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </HStack>
  );
}
