import type { Metadata } from "next";
import { Kitchensink } from "@/components/mantine/Kitchensink";

export const metadata: Metadata = { title: "Kitchen sink — Mantine" };

export default function MantineKitchensink() {
  return <Kitchensink />;
}
