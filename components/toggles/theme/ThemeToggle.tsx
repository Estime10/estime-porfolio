"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/button";
import { useThemeToggle } from "./hooks";

export function ThemeToggle() {
  const { cycle, label, mode } = useThemeToggle();
  const Icon = mode === "dark" ? Sun : Moon;

  return (
    <Button
      type="button"
      variant="nav"
      className="relative z-10 shrink-0 max-md:min-h-[var(--touch-min)] max-md:min-w-[var(--touch-min)]"
      onClick={cycle}
      aria-label={label}
      aria-pressed={mode === "dark"}
    >
      <span className="sr-only">{label}</span>
      <Icon aria-hidden className="size-4 shrink-0" strokeWidth={2} />
    </Button>
  );
}
