import { useEffect, useState } from "react";
import { DEFAULT_THEME_ID, THEME_STORAGE_KEY, getTheme } from "../data/themes";

function readStoredTheme() {
  try {
    return getTheme(localStorage.getItem(THEME_STORAGE_KEY) ?? DEFAULT_THEME_ID).id;
  } catch {
    return DEFAULT_THEME_ID;
  }
}

// Holds the active theme, applies it to <html>, updates the mobile browser
// toolbar colour, and remembers the choice for the next visit.
export default function useTheme() {
  const [themeId, setThemeId] = useState(readStoredTheme);
  const theme = getTheme(themeId);

  useEffect(() => {
    const root = document.documentElement;
    root.className = root.className.replace(/\btheme-\S+/g, "").trim();
    root.classList.add(`theme-${theme.id}`);

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme.color);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme.id);
    } catch {
      // Storage can be unavailable (e.g. private mode); the theme still works.
    }
  }, [theme]);

  return [theme, setThemeId];
}
