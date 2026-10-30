import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  experimental: {
    webpackMemoryOptimizations: true,
  },
  poweredByHeader: false,
  rewrites() {
    return [{ source: "/favicon.ico", destination: "/icon" }];
  },
};

export default withNextIntl(nextConfig);
