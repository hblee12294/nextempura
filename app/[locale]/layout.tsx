import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";

import "@/styles/globals.scss";
import styles from "./layout.module.scss";
import { Header, Footer } from "@/components";
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
    <html lang={params.locale || DEFAULT_LOCALE}>
      <body className={font.className}>
        <div className={styles.layout}>
          <Header></Header>

          {children}

          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
