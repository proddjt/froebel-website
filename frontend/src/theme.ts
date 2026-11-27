import {
  Anchor,
  Badge,
  Button,
  Card,
  Container,
  Paper,
  ThemeIcon,
  createTheme,
  rem,
  type MantineColorsTuple,
} from "@mantine/core";

/**
 * Froebel School — Mantine theme.
 *
 * Fonts: Nunito (variable, self-hosted via @fontsource-variable/nunito).
 * The font files are loaded once in src/app/layout.tsx:
 *   import "@fontsource-variable/nunito";
 */

const fontFamily = "'Nunito Variable', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

/**
 * Cyan, based on Mantine's default palette but with darker shades 6–9:
 * with the stock palette, white text on cyan only passes WCAG AA (4.5:1)
 * at the very last shade. Here shade 7 (the primary shade) is #0b7285 → 5.6:1,
 * and shade 8 is used automatically for hover.
 */
const cyan: MantineColorsTuple = [
  "#e3fafc",
  "#c5f6fa",
  "#99e9f2",
  "#66d9e8",
  "#3bc9db",
  "#15aabf",
  "#0c8fa3",
  "#0b7285", // primary shade
  "#0a6273",
  "#085261",
];

export const theme = createTheme({
  /* Colours */
  colors: { cyan },
  primaryColor: "cyan",
  primaryShade: 7,
  // Picks black or white text on filled components based on background luminance,
  // so yellow/orange/lime badges and buttons stay readable.
  autoContrast: true,
  defaultGradient: { from: "cyan.7", to: "teal.5", deg: 90 },

  /* Typography */
  fontFamily,
  fontSmoothing: true,
  headings: {
    fontFamily,
    fontWeight: "800",
    textWrap: "balance",
    sizes: {
      h1: { fontSize: rem(48), lineHeight: "1.1", fontWeight: "900" },
      h2: { fontSize: rem(34), lineHeight: "1.2" },
      h3: { fontSize: rem(24), lineHeight: "1.3" },
      h4: { fontSize: rem(20), lineHeight: "1.4" },
      h5: { fontSize: rem(17), lineHeight: "1.5" },
      h6: { fontSize: rem(15), lineHeight: "1.5" },
    },
  },

  /* Shape: rounded and friendly, but not bubbly */
  defaultRadius: "md",
  cursorType: "pointer",
  focusRing: "auto",

  /* Component defaults, matching the mockup */
  components: {
    Container: Container.extend({ defaultProps: { size: "lg" } }),
    Button: Button.extend({ defaultProps: { radius: "xl" } }),
    Badge: Badge.extend({ defaultProps: { radius: "xl" } }),
    Card: Card.extend({ defaultProps: { radius: "lg" } }),
    Paper: Paper.extend({ defaultProps: { radius: "lg" } }),
    ThemeIcon: ThemeIcon.extend({ defaultProps: { radius: "md" } }),
    Anchor: Anchor.extend({ defaultProps: { underline: "hover" } }),
  },

  /* School-specific tokens, available as theme.other.* */
  other: {
    // Colour coding used for badges, card borders and news categories
    sectionColors: {
      kindergarten: "orange",
      middleSchool: "grape",
      events: "pink",
      notices: "cyan",
    },
    // Decorative shapes in the hero section
    decorationColors: ["yellow.3", "pink.3", "cyan.4"],
  },
});

export type SectionKey = "kindergarten" | "middleSchool" | "events" | "notices";
