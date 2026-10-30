"use client";

import { useSyncExternalStore } from "react";
import { getThemeInitInlineScript } from "@/lib/theme";

const subscribe = (): (() => void) => () => undefined;

/**
 * Anti-FOUC : le `<script>` n’existe dans l’arbre React qu’au SSR + hydratation.
 * Après le premier paint client, on le retire pour éviter l’avertissement React 19
 * (« Scripts inside React components are never executed… »).
 */
export function ThemeInitScript() {
  const shouldRender = useSyncExternalStore(
    subscribe,
    () => false,
    () => true,
  );

  if (!shouldRender) {
    return null;
  }

  return (
    <script
      id="theme-init"
      // Exécution synchrone avant paint — le thème est appliqué avant le premier rendu visible.
      dangerouslySetInnerHTML={{ __html: getThemeInitInlineScript() }}
    />
  );
}
