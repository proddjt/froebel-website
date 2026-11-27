"use client";

import {
  ColorSwatch,
  Group,
  Select,
  useMantineColorScheme,
  type MantineColorScheme,
} from "@mantine/core";
import { accents, getAccent, isAccentId } from "@/demo/accents";
import { useMantineAccent } from "./Providers";

const modeOptions = [
  { value: "light", label: "☀️ Light" },
  { value: "dark", label: "🌙 Dark" },
  { value: "auto", label: "💻 System" },
];

export function ThemeControls() {
  const { accent, setAccent } = useMantineAccent();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Group gap="xs" wrap="nowrap">
      <Select
        aria-label="Theme colour"
        size="sm"
        w={140}
        allowDeselect={false}
        data={accents.map((a) => ({ value: a.id, label: a.label }))}
        value={accent}
        onChange={(v) => isAccentId(v) && setAccent(v)}
        leftSection={<ColorSwatch color={getAccent(accent).swatch} size={14} />}
        renderOption={({ option }) => (
          <Group gap="xs">
            <ColorSwatch
              color={isAccentId(option.value) ? getAccent(option.value).swatch : "gray"}
              size={14}
            />
            {option.label}
          </Group>
        )}
        comboboxProps={{ withinPortal: true }}
      />
      <Select
        aria-label="Light or dark mode"
        size="sm"
        w={130}
        allowDeselect={false}
        data={modeOptions}
        value={colorScheme}
        onChange={(v) => v && setColorScheme(v as MantineColorScheme)}
      />
    </Group>
  );
}
