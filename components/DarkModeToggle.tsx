"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import styles from "./DarkModeToggle.module.scss";
import { Select } from "@/components/Select";
import { IconButton } from "@/components/IconButton";

import IconLightbulb from "@/svgs/lightbulb.svg";
import IconLight from "@/svgs/light.svg";
import IconDark from "@/svgs/dark.svg";

export function DarkModeToggle() {
  /**
   * Avoid hydration mismatch
   * https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
   */
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.triggerPlaceholder}></div>;
  }

  const renderIcon = (value?: string) => {
    switch (value) {
      case "system":
        return <IconLightbulb className={styles.icon}></IconLightbulb>;
      case "light":
        return <IconLight className={styles.icon}></IconLight>;
      case "dark":
        return <IconDark className={styles.icon}></IconDark>;
      default:
        return "";
    }
  };

  return (
    <Select
      trigger={
        <IconButton className={styles.triggerButton}>
          {renderIcon(theme)}
        </IconButton>
      }
      options={[
        {
          value: "system",
          label: "System",
        },
        {
          value: "light",
          label: "Light",
        },
        {
          value: "dark",
          label: "Dark",
        },
      ]}
      onChange={(value) => setTheme(value as string)}
    ></Select>
  );
}
