"use client";

import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ThemeSelectorItem() {
  const { theme } = useTheme();
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
        htmlFor="theme-light"
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
          <RadioGroupItem value="Zinc" id="theme-light" />
          <p className="ml-2 font-semibold">Light default</p>
        </div>
      </Label>
      <Label
        htmlFor="theme-dark"
        className={`rounded-md cursor-pointer overflow-hidden h-full per ${
          theme === "dark" ? "border-blue-500 border-2" : "border" }`}
      >
        <Image
          src="/github-default.svg"
          alt="Demonstração da cor Dark"
          className="aspect-video object-cover"
          width={400}
          height={100}
        />
        <div className="border-t p-2 py-3 flex items-center">
          <RadioGroupItem value="Rose" id="theme-dark" />
          <p className="ml-2 font-semibold">Dark</p>
        </div>
      </Label>
    </>
  );
}
