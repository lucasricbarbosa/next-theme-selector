"use client";

import setGlobalColorTheme from "@/lib/theme-colors";
import { ThemeColors, ThemeColorStateParams } from "@/types/theme-types";
import { useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeColorStateParams>(
  {} as ThemeColorStateParams,
);

export default function ThemeDataProvider({ children }: ThemeProviderProps) {
  const getSavedThemeColor = () => {
    try {
      return (localStorage.getItem("themeColor") as ThemeColors) || "Zinc";
    } catch {
      return "Zinc";
    }
  };

  const [themeColor, setThemeColor] = useState<ThemeColors>(
    getSavedThemeColor() as ThemeColors,
  );
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    localStorage.setItem("themeColor", themeColor);
    setGlobalColorTheme(theme as "Zinc" | "dark", themeColor);

    if (!isMounted) {
      setIsMounted(true);
    }
  }, [theme, themeColor]);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}