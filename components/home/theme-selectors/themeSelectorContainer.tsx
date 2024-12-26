"use client";

import { ThemeSelectorItem } from "./themeSelectorItem";
import { RadioGroup } from "@/components/ui/radio-group";
import { useThemeContext } from "@/app/theme-data-provider";
import { availableThemeColors } from "./theme-color-toggle";

export function ThemeSelectorContainer() {
  const { themeColor, setThemeColor } = useThemeContext();

  return (
    <RadioGroup
      className="grid grid-cols-1 min-[462px]:grid-cols-2 md:grid-cols-3 gap-4 mt-10"
      value={themeColor}
      onValueChange={(value) => setThemeColor(value as ThemeColors)}
    >
      {availableThemeColors.map(({ name, placeholder, theme }) => (
        <ThemeSelectorItem
          colorPlaceholder={placeholder}
          colorName={name}
          key={name}
          themeColor={theme}
        />
      ))}
    </RadioGroup>
  );
}
