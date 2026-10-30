"use client";

import { useMemo, useRef } from "react";
import { useMainNavMenuState } from "@/components/navigation/main-nav/use-main-nav-menu-state/useMainNavMenuState";
import { useMobileMainNavChrome } from "@/components/navigation/mobile/hooks/use-mobile-main-nav-chrome/useMobileMainNavChrome";
import {
  MAIN_NAV_DESKTOP_LEADING_MOTION,
  MAIN_NAV_DESKTOP_TRAILING_MOTION,
} from "@/lib/animation/main-nav/main-nav-panel-motion/mainNavPanelMotion";
import { useMainNavPanelAnimation } from "@/lib/animation/main-nav/use-main-nav-panel-animation/useMainNavPanelAnimation";
import type { RefObject } from "react";

export type UseMobileMainNavReturn = Readonly<{
  isExpanded: boolean;
  leftPanelRef: RefObject<HTMLDivElement | null>;
  navigateViaClose: (href: string) => void;
  panelsMounted: boolean;
  rightPanelRef: RefObject<HTMLDivElement | null>;
  rootRef: RefObject<HTMLDivElement | null>;
  toggle: () => void;
}>;

export function useMobileMainNav(): UseMobileMainNavReturn {
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  const {
    handlePanelsCloseComplete,
    isExpanded,
    navigateViaClose,
    panelsMounted,
    rootRef,
    setOpenPathname,
    setPanelsMounted,
    toggle,
  } = useMainNavMenuState({ mountPanelsWhenOpening: false });

  const { handleNavCloseComplete } = useMobileMainNavChrome({
    handlePanelsCloseComplete,
    isExpanded,
    panelsMounted,
    rootRef,
    setOpenPathname,
    setPanelsMounted,
  });

  const panelAnimationTargets = useMemo(
    () => [
      { ref: leftPanelRef, motion: MAIN_NAV_DESKTOP_LEADING_MOTION },
      { ref: rightPanelRef, motion: MAIN_NAV_DESKTOP_TRAILING_MOTION },
    ],
    [],
  );

  useMainNavPanelAnimation(
    isExpanded && panelsMounted,
    panelsMounted,
    panelAnimationTargets,
    handleNavCloseComplete,
  );

  return {
    isExpanded,
    leftPanelRef,
    navigateViaClose,
    panelsMounted,
    rightPanelRef,
    rootRef,
    toggle,
  };
}
