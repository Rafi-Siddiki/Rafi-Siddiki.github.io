// Single source of truth for every theme: navbar icon, browser UI colour,
// and the optional animated background. Colour tokens live in styles/themes.css.
export const THEMES = [
  {
    id: "default",
    label: "Default",
    icon: "/icons/default-icon.webp",
    color: "#0f172a",
    background: null,
  },
  {
    id: "minecraft",
    label: "Minecraft",
    icon: "/icons/minecraft-icon.webp",
    color: "#263b26",
    background: {
      src: "/backgrounds/minecraft.webp",
      poster: "/backgrounds/minecraft-poster.webp",
    },
  },
  {
    id: "cyberpunk",
    label: "Cyberpunk",
    icon: "/icons/cyberpunk-icon.webp",
    color: "#100b20",
    background: {
      src: "/backgrounds/cyberpunk.webp",
      poster: "/backgrounds/cyberpunk-poster.webp",
    },
  },
];

export const DEFAULT_THEME_ID = "default";

// Also read by the inline script in index.html; keep the two in sync.
export const THEME_STORAGE_KEY = "portfolio-theme";

export function getTheme(id) {
  return THEMES.find((theme) => theme.id === id) ?? THEMES[0];
}
