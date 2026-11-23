"use client";

import { Label, ListBox, Select } from "@heroui/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { accents, isAccentId } from "@/demo/accents";
import { useHeroAccent } from "./Providers";

const modes = [
  { id: "light", label: "☀️ Light" },
  { id: "dark", label: "🌙 Dark" },
  { id: "system", label: "💻 System" },
];

const noop = () => () => {};
function useMounted() {
  return useSyncExternalStore(noop, () => true, () => false);
}

function Swatch({ color }: { color: string }) {
  return <span aria-hidden className="inline-block size-3 shrink-0 rounded-full" style={{ background: color }} />;
}

export function ThemeControls() {
  const { accent, setAccent } = useHeroAccent();
  const { theme, setTheme } = useTheme();
  const mounted = useMounted(); // theme is unknown on the server

  return (
    <div className="flex items-center gap-2">
      <Select
        className="w-[140px]"
        aria-label="Theme colour"
        value={accent}
        onChange={(v) => isAccentId(v) && setAccent(v)}
      >
        <Label className="sr-only">Theme colour</Label>
        <Select.Trigger>
          {/* Select.Value re-renders the selected item, swatch included */}
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            {accents.map((a) => (
              <ListBox.Item key={a.id} id={a.id} textValue={a.label}>
                <span className="flex items-center gap-2">
                  <Swatch color={a.swatch} />
                  {a.label}
                </span>
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>

      <Select
        className="w-[130px]"
        aria-label="Light or dark mode"
        placeholder="Mode"
        value={mounted ? (theme ?? null) : null}
        onChange={(v) => typeof v === "string" && setTheme(v)}
      >
        <Label className="sr-only">Light or dark mode</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            {modes.map((m) => (
              <ListBox.Item key={m.id} id={m.id} textValue={m.label}>
                {m.label}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
}
