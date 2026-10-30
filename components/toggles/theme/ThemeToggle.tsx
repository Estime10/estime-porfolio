"use client";

import { Button } from "@/components/button";
import { useThemeToggle } from "./hooks";

export function ThemeToggle() {
  const { cycle, label, mode } = useThemeToggle();

  return (
    <Button
      type="button"
      variant="nav"
      className="relative z-10 shrink-0 max-md:min-h-[var(--touch-min)] max-md:min-w-[var(--touch-min)]"
      onClick={cycle}
      aria-label={label}
      aria-pressed={mode === "dark"}
    >
      {label}
    </Button>
  );
}
