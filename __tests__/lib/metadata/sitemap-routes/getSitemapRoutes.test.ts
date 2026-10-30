import { describe, expect, it } from "vitest";
import { getSitemapRoutes } from "@/lib/metadata/sitemap-routes/getSitemapRoutes";

describe("getSitemapRoutes", () => {
  it("lists public indexable routes including all case study pages", () => {
    const routes = getSitemapRoutes();

    expect(routes).not.toContain("/");
    expect(routes).toContain("/home");
    expect(routes).toContain("/projects/fleetscan");
    expect(routes).toContain("/projects/jikowood");
    expect(routes).toContain("/projects/ttc-v0");
    expect(routes).toContain("/projects/enna");
    expect(routes).toContain("/projects/nana");
    expect(routes).toContain("/projects/maxweljones");
    expect(routes).toContain("/projects/purpose-sport");
  });
});
