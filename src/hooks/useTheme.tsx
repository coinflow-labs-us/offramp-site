import { Theme, useThemeStore } from "../stores/ThemeStore.tsx";
import { useEffect, useState } from "react";
import { CoinflowColors, DarkTheme, LightTheme } from "../types.ts";

export function useTheme() {
  const { theme } = useThemeStore();

  const [colors, setColors] = useState<CoinflowColors>(DarkTheme);

  useEffect(() => {
    if (theme === Theme.Dark) setColors(DarkTheme);
    if (theme === Theme.Light) setColors(LightTheme);
  }, [theme]);

  return colors;
}
