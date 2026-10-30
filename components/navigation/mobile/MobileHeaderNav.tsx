"use client";

import { useId } from "react";
import { usePathname } from "next/navigation";
import { DesktopMainNavMenuTrigger } from "@/components/navigation/desktop/components/DesktopMainNavMenuTrigger";
import { MobileHeaderLogoSlot } from "@/components/navigation/mobile/components/MobileHeaderLogoSlot";
import { useMobileMainNav } from "@/components/navigation/mobile/hooks";
import { MainNavItemsPanel } from "@/components/navigation/main-nav/main-nav-items-panel/MainNavItemsPanel";
import { mapMainNavItems } from "@/lib/navigation/map-main-nav-items/mapMainNavItems";
import { getMainNavMobilePanelClassName } from "@/components/navigation/main-nav/styles/mainNavPanelClasses";
import { isProjectCaseStudyRoute } from "@/lib/navigation/is-project-case-study-route/isProjectCaseStudyRoute";
import type { MainNavLabels } from "@/lib/navigation/types/main-nav-labels/mainNavLabels";
import type { ReactNode } from "react";

export type MobileHeaderNavProps = Readonly<{
  backLabel: string;
  desktopNav: ReactNode;
  labels: MainNavLabels;
  logo: ReactNode;
  toolbar: ReactNode;
}>;

export function MobileHeaderNav({
  backLabel,
  desktopNav,
  labels,
  logo,
  toolbar,
}: MobileHeaderNavProps) {
  const pathname = usePathname();
  const isCaseStudyRoute = isProjectCaseStudyRoute(pathname);
  const menuPanelId = useId();
  const panels = mapMainNavItems(labels);
  const {
    isExpanded,
    leftPanelRef,
    navigateViaClose,
    panelsMounted,
    rightPanelRef,
    rootRef,
    toggle,
  } = useMobileMainNav();

  return (
    <div
      ref={rootRef}
      className={
        isCaseStudyRoute
          ? "ui-nav-shell relative flex items-center justify-between gap-4"
          : "ui-nav-shell relative grid grid-cols-[1fr_auto_1fr] items-center gap-4"
      }
      role={!isCaseStudyRoute && isExpanded ? "dialog" : undefined}
      aria-modal={!isCaseStudyRoute && isExpanded ? true : undefined}
      aria-label={!isCaseStudyRoute && isExpanded ? labels.navAria : undefined}
    >
      <div
        data-mobile-header-chrome="logo"
        className="flex min-w-0 shrink-0 justify-start max-md:will-change-[opacity]"
        aria-hidden={!isCaseStudyRoute && isExpanded ? true : undefined}
      >
        <MobileHeaderLogoSlot backLabel={backLabel} logo={logo} />
      </div>

      {!isCaseStudyRoute ? (
        <>
          <nav
            className="relative flex items-center justify-center md:hidden"
            aria-label={labels.navAria}
          >
            <DesktopMainNavMenuTrigger
              ariaControls={isExpanded ? menuPanelId : undefined}
              ariaLabel={labels.menuToggleAria}
              isExpanded={isExpanded}
              label={labels.menu}
              onToggle={toggle}
            />

            {panelsMounted ? (
              <MainNavItemsPanel
                accessibility={{ id: menuPanelId, label: labels.menu }}
                className={getMainNavMobilePanelClassName("leading")}
                items={panels.leading}
                onNavigate={navigateViaClose}
                panelRef={leftPanelRef}
              />
            ) : null}

            {panelsMounted ? (
              <MainNavItemsPanel
                className={getMainNavMobilePanelClassName("trailing")}
                items={panels.trailing}
                onNavigate={navigateViaClose}
                panelRef={rightPanelRef}
              />
            ) : null}
          </nav>

          <div className="hidden md:flex md:justify-center">{desktopNav}</div>
        </>
      ) : null}

      <div
        data-mobile-header-chrome="toolbar"
        className="flex shrink-0 items-center justify-end gap-3 max-md:will-change-[opacity]"
        aria-hidden={!isCaseStudyRoute && isExpanded ? true : undefined}
      >
        {toolbar}
      </div>
    </div>
  );
}
