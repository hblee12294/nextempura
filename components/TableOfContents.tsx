"use client";

import { useEffect, useState } from "react";
import cn from "classnames";
import type { Heading } from "@/utils/markdown";
import styles from "./TableOfContents.module.scss";

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" },
    );

    headings.forEach(({ slug }) => {
      const element = document.getElementById(slug);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach(({ slug }) => {
        const element = document.getElementById(slug);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className={styles.container}>
      <div className={styles.title}>On this page</div>
      <ul className={styles.list}>
        {headings.map((heading) => (
          <li
            key={heading.slug}
            className={cn(styles.item, {
              [styles.itemActive]: activeId === heading.slug,
              [styles.itemLevel2]: heading.level === 2,
              [styles.itemLevel3]: heading.level === 3,
            })}
          >
            <a href={`#${heading.slug}`} className={styles.link}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
