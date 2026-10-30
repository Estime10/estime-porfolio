"use client";

import { useEffect } from "react";

/** Au retour depuis une étude (`/projects#slug`), aligne le viewport sur la card. */
export function ScrollToProjectHash() {
  useEffect(() => {
    const slug = window.location.hash.replace(/^#/, "");
    if (!slug) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(slug)?.scrollIntoView({ block: "start" });
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
