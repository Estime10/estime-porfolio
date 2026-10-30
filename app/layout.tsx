import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeInitScript } from "@/components/toggles/theme/ThemeInitScript";
import { getRootMetadata } from "@/lib/metadata/get-root-metadata/getRootMetadata";
import "./globals.css";

const fontSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-family-sans",
  display: "swap",
  adjustFontFallback: true,
});

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-family-mono",
  display: "swap",
  adjustFontFallback: true,
});

/** Fallback pour les routes hors `(main)`. Les pages du groupe `(main)` définissent leur propre métadonnée. */
export const metadata = getRootMetadata({
  title: {
    default: "Estime Vangu",
    template: "%s | Estime Vangu",
  },
  description: "Portfolio · Estime Vangu.",
});

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeInitScript />
      </head>
      <body className="bg-background text-foreground min-h-full flex flex-col font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
