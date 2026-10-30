import type { MainNavPanelSlot } from "@/lib/animation/main-nav/main-nav-panel-slot/mainNavPanelSlot";

const NAV_SIDE_PANEL_OFFSET_CLASS = "top-1/2 -translate-y-1/2";

const NAV_SIDE_PANEL_BASE_CLASS = `pointer-events-none absolute flex items-center ${NAV_SIDE_PANEL_OFFSET_CLASS}`;

const DESKTOP_PANEL_OFFSET_BY_SIDE: Record<MainNavPanelSlot, string> = {
  leading: "right-full mr-8 gap-6",
  trailing: "left-full ml-8 gap-6",
};

const MOBILE_PANEL_OFFSET_BY_SIDE: Record<MainNavPanelSlot, string> = {
  leading: "right-full mr-3 gap-3",
  trailing: "left-full ml-3 gap-3",
};

export function getMainNavDesktopPanelClassName(side: MainNavPanelSlot): string {
  return `${NAV_SIDE_PANEL_BASE_CLASS} ${DESKTOP_PANEL_OFFSET_BY_SIDE[side]}`;
}

export function getMainNavMobilePanelClassName(side: MainNavPanelSlot): string {
  return `${NAV_SIDE_PANEL_BASE_CLASS} ${MOBILE_PANEL_OFFSET_BY_SIDE[side]}`;
}
