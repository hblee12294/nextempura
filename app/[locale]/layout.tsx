import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.scss";
import styles from "./layout.module.scss";
import { Header, Footer } from "@/components";
import { DEFAULT_LOCALE } from "@/configs/locales";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextempura",
  description:
    "A web template with Next.js 14, i18n and markdown docs supports",
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
      <body className={inter.className}>
        <div className={styles.layout}>
          <Header></Header>

          {children}

          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
