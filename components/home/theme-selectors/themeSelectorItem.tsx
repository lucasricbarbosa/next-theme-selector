"use client";

import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ThemeSelectorItemProps {
  colorName: string;
  colorPlaceholder: string;
  themeColor: string;
}

export function ThemeSelectorItem({
  colorName,
  colorPlaceholder,
  themeColor,
}: ThemeSelectorItemProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Label
        htmlFor={colorName}
        className={`rounded-md cursor-pointer overflow-hidden h-full p-r ${
          theme === "light" ? "border-blue-500 border-2" : "border" }`}
      >
        <Image
          src="/github-default.svg"
          alt="Demonstração da cor Light Default"
          className="aspect-video object-cover"
          width={400}
          height={100}
        />
        <div className="border-t p-2 py-3 flex items-center">
          <RadioGroupItem
            onClick={() => setTheme(themeColor)}
            value={colorName}
            id={colorName}
          />
          <p className="ml-2 font-semibold">{colorPlaceholder}</p>
        </div>
      </Label>
    </>
  );
}
