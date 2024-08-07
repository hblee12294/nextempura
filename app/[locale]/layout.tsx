import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

import "@/styles/globals.scss";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DEFAULT_LOCALE } from "@/configs/locales";

const font = Noto_Sans_SC({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextempura",
  description:
    "A site template with Next.js 14, i18n and markdown docs supports",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  return (
    <html lang={params.locale || DEFAULT_LOCALE} suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider>
          <Header></Header>

          {children}

          <Footer></Footer>

          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
