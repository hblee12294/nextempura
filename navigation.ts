import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LOCALES } from "@/configs/locales";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: LOCALES,
    localePrefix: "as-needed",
  });
