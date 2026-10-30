import { getTranslations } from "next-intl/server";
import { CtaGradientLink, CtaLink } from "@/components/button";
import { MainHeader } from "@/components/layout/main-header/MainHeader";
import { MainShell } from "@/components/layout/main-shell/MainShell";
import { SkipToMainContent } from "@/components/layout/skip-to-main-content/SkipToMainContent";
import { CONTACT_ROUTE_PATH, MAIN_CONTENT_ID, PROJECTS_ROUTE_PATH } from "@/lib/constants";
import { MainRouteTransitionProvider } from "@/lib/navigation/main-route-transition-context/MainRouteTransitionContext";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <MainShell>
      <SkipToMainContent />
      <MainRouteTransitionProvider>
        <MainHeader />
        <main
          id={MAIN_CONTENT_ID}
          tabIndex={-1}
          className="ui-container ui-container-sm ui-section flex min-h-0 flex-1 flex-col outline-none"
        >
          <div className="mx-auto flex max-w-xl flex-1 flex-col justify-center py-16">
            <p className="text-label text-tertiary">404</p>
            <h1 className="text-h1 text-foreground mt-3">{t("title")}</h1>
            <p className="text-body-lg text-muted mt-4">{t("description")}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaGradientLink href={PROJECTS_ROUTE_PATH}>{t("viewProjects")}</CtaGradientLink>
              <CtaLink href={CONTACT_ROUTE_PATH}>{t("contact")}</CtaLink>
            </div>
          </div>
        </main>
      </MainRouteTransitionProvider>
    </MainShell>
  );
}
