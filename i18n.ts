import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { LOCALES } from "@/configs/locales";

export default getRequestConfig(async ({ locale }) => {
  if (!LOCALES.includes(locale as any)) notFound();

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
