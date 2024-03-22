import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export enum Theme {
  Dark = "dark",
  Light = "light",
}
interface ThemeState {
  theme: Theme;
  toggle: () => void;
}

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        theme: Theme.Dark,
        toggle: () =>
          set((state: ThemeState) => ({
            theme: state.theme === Theme.Light ? Theme.Dark : Theme.Light,
          })),
      }),
      {
        name: "theme-storage",
      },
    ),
  ),
);
